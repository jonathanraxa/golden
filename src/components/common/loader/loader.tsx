// src/components/Loader.tsx
import React from "react";

interface LoaderProps {
  /**
   * Optional size in pixels (both width and height).
   * Default: 24 (i.e. 24px×24px)
   **/
  size?: number;

  /**
   * Optional Tailwind text-color class (e.g. "text-gray-500", "text-blue-600", etc.).
   * Default: "text-gray-500"
   **/
  colorClass?: string;

  /**
   * Optional Tailwind border width (e.g. "border-2", "border-4", etc.).
   * Default: "border-2"
   **/
  borderClass?: string;
}

export const Loader = ({
  size = 24,
  colorClass = "text-gray-500",
  borderClass = "border-2",
}: LoaderProps) => {
  // We’ll render a <div> that:
  // - has equal width/height (size px)
  // - uses border-radius: 50% (rounded-full)
  // - has a full border, but the “top” border is transparent, so only 3 sides are visible
  // - spins via animation
  return (
    <div
      className={`
        ${borderClass} 
        ${colorClass} 
        border-t-transparent 
        rounded-full 
        animate-spin
      `}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      role="status"
      aria-label="Loading..."
    >
      {/* 
        Note: We don’t need inner content—just the div’s border and spin do the work. 
      */}
    </div>
  );
};

export default Loader;
