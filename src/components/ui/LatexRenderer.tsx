"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface LatexRendererProps {
  formula: string;
  displayMode?: boolean;
  className?: string;
}

export const LatexRenderer: React.FC<LatexRendererProps> = ({
  formula,
  displayMode = true,
  className = "",
}) => {
  const result = useMemo(() => {
    try {
      const rendered = katex.renderToString(formula, {
        displayMode,
        throwOnError: false,
        trust: false, // Strictly disallow unsafe commands like \url or protocol execution
        strict: "warn",
      });
      return { html: rendered, isError: false };
    } catch {
      return { html: "", isError: true };
    }
  }, [formula, displayMode]);

  // If rendering fails or throws, render safely as a React text node (auto-escaped)
  // Never pass unsanitized fallback strings into dangerouslySetInnerHTML
  if (result.isError) {
    return (
      <div className={`font-mono overflow-x-auto py-2 text-xs text-[#c82b2b] ${className}`}>
        {formula}
      </div>
    );
  }

  return (
    <div
      className={`font-mono overflow-x-auto py-2 ${className}`}
      dangerouslySetInnerHTML={{ __html: result.html }}
    />
  );
};
