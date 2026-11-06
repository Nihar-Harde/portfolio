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
  const html = useMemo(() => {
    try {
      return katex.renderToString(formula, {
        displayMode,
        throwOnError: false,
      });
    } catch {
      return formula;
    }
  }, [formula, displayMode]);

  return (
    <div
      className={`font-mono overflow-x-auto py-2 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
