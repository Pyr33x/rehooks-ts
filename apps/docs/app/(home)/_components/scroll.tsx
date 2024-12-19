"use client";

import { Button } from "@rehooks/ui/components";
import { ArrowUp } from "@rehooks/ui/icons";
import { useScroll } from "rehooks-ts";

export function Scroll() {
  const { scrollTo } = useScroll();

  return (
    <Button
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      variant="outline"
      className="group fixed bottom-4 right-4 z-50 size-12 cursor-pointer rounded-full"
    >
      <ArrowUp className="size-12" />
    </Button>
  );
}
