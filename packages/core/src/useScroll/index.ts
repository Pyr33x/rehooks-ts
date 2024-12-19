import { useState, useLayoutEffect } from "react";

const description =
  "Custom hook that tracks and returns the current scroll position, and provides a method to scroll to specific coordinates.";

/**
 * Represents the scroll position in the x and y directions.
 */
type ScrollPosition = {
  x: number;
  y: number;
};

/**
 * Custom hook that tracks and returns the current scroll position,
 * and provides a method to scroll to specific coordinates.
 *
 * @returns {{ position: ScrollPosition; scrollTo: (options: ScrollToOptions) => void }}
 */
export function useScroll(): {
  position: ScrollPosition;
  scrollTo: (options: ScrollToOptions) => void;
} {
  const [position, setPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      setPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    }
  };

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setPosition({
        x: window.scrollX,
        y: window.scrollY,
      });

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scrollTo = (options: ScrollToOptions) => {
    if (typeof window !== "undefined") {
      window.scrollTo(options);
    }
  };

  return {
    position,
    scrollTo,
  };
}
