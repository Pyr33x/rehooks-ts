"use client";

import { ArrowUp } from "@rehooks/ui/icons";
import { useScroll } from "rehooks-ts";

export function Scroll() {
  const { scrollTo } = useScroll();

  return (
    <button
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      className="bg-background border-border group fixed bottom-4 right-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border"
    >
      <ArrowUp className="size-6 transform transition duration-100 group-hover:-translate-y-0.5" />
    </button>
  );
}
