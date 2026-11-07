/**
 * Procedural Zen Audio Engine (Web Audio API)
 * Synthesizes Edo woodblock (Mokugyo) and Tibetan/Zen temple chimes (Rin)
 * Zero external audio assets required; 100% procedurally synthesized in real-time.
 */

class ZenAudioManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false; // Enabled by default per user request
  private userHasInteracted: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("neo_edo_audio_muted");
      if (saved !== null) {
        this.isMuted = saved === "true";
      } else {
        this.isMuted = false;
      }

      // Mark user interaction flag on first gesture to comply with Chrome Autoplay policy
      const markInteracted = () => {
        this.userHasInteracted = true;
        if (this.ctx && this.ctx.state === "suspended") {
          this.ctx.resume().catch(() => {});
        }
        window.removeEventListener("pointerdown", markInteracted);
        window.removeEventListener("keydown", markInteracted);
        window.removeEventListener("touchstart", markInteracted);
      };

      window.addEventListener("pointerdown", markInteracted, { passive: true });
      window.addEventListener("keydown", markInteracted, { passive: true });
      window.addEventListener("touchstart", markInteracted, { passive: true });
    }
  }

  private initContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== "undefined") {
      localStorage.setItem("neo_edo_audio_muted", String(this.isMuted));
    }
    if (!this.isMuted) {
      this.playChime();
    }
    return this.isMuted;
  }

  /**
   * Procedural Japanese Mokugyo (Woodblock) Click
   * Resonant dual-sine with rapid exponential decay
   */
  public playWoodblock(pitchMultiplier = 1.0) {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(640 * pitchMultiplier, now);
      osc1.frequency.exponentialRampToValueAtTime(380 * pitchMultiplier, now + 0.045);

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(1200 * pitchMultiplier, now);
      osc2.frequency.exponentialRampToValueAtTime(740 * pitchMultiplier, now + 0.035);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(780, now);
      filter.Q.setValueAtTime(3.8, now);

      gain.gain.setValueAtTime(0.24, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);

      // StereoPannerNode with subtle ±0.15 randomization for binaural depth
      if (typeof ctx.createStereoPanner === "function") {
        const panner = ctx.createStereoPanner();
        panner.pan.setValueAtTime((Math.random() * 0.3) - 0.15, now);
        gain.connect(panner);
        panner.connect(ctx.destination);
      } else {
        gain.connect(ctx.destination);
      }

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.06);
      osc2.stop(now + 0.06);
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Procedural Zen Temple Chime / Bell (Rin)
   * Harmonic shimmer with gentle long exponential tail
   */
  public playChime() {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const fundamental = 528;

      const partials = [1, 2.02, 2.76, 4.07];
      const gains = [0.12, 0.07, 0.04, 0.02];
      const durations = [1.4, 1.1, 0.8, 0.5];

      partials.forEach((mult, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(fundamental * mult, now);

        gain.gain.setValueAtTime(gains[i], now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + durations[i]);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + durations[i] + 0.05);
      });
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Subtle micro-interaction hover tick
   */
  public playHoverTick() {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.015);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

      osc.connect(gain);
      if (typeof ctx.createStereoPanner === "function") {
        const panner = ctx.createStereoPanner();
        panner.pan.setValueAtTime((Math.random() * 0.2) - 0.1, now);
        gain.connect(panner);
        panner.connect(ctx.destination);
      } else {
        gain.connect(ctx.destination);
      }

      osc.start(now);
      osc.stop(now + 0.02);
    } catch {
      // AudioContext fallback
    }
  }
}

export const zenAudio = new ZenAudioManager();
