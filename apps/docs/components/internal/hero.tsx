"use client";

import { useClipboard, useKeyPress, useDevice } from "@/hooks";
import { Badge } from "@/components/internal";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { useEffect } from "react";
import Link from "next/link";

export function Hero() {
  const router = useRouter();
  const { isMobile } = useDevice();
  const { copy, isCopied } = useClipboard();
  const copyKeyPressed = useKeyPress({ key: "c", meta: true });
  const documentPressed = useKeyPress({ key: "d", meta: true });

  const handleCopy = () => {
    copy("npx rehooks-cli@latest init");
  };

  useEffect(() => {
    copyKeyPressed ? handleCopy() : null;
    documentPressed ? router.push("/docs") : null;
  }, [copy]);
  return (
    <>
      <div className="mb-8">
        <Badge
          href="https://npmjs.org/package/rehooks-cli"
          target="_blank"
          rel="noopener noreferrer"
          variant="green"
          shine
          shineColor="#4ade80"
          borderRadius={9999}
        >
          Rehooks v4 is out
        </Badge>
      </div>
      <h1 className="text-balance text-center text-4xl font-black lg:text-5xl">
        Streamline{" "}
        <span className="animate-background-shine inline-flex transform bg-[linear-gradient(110deg,#22c55e,45%,#86efac,55%,#22c55e)] bg-[length:250%_100%] bg-clip-text text-transparent">
          React
        </span>{" "}
        Hooks
      </h1>
      <p className="dark:text-fd-muted-foreground/50 text-fd-muted-foreground mt-2 text-balance text-center text-base font-medium lg:text-xl">
        A CLI to insert hooks directly to your project.
      </p>
      <div className="mt-5 flex flex-row flex-wrap justify-center gap-2">
        <Button
          size="circular"
          onClick={handleCopy}
          className="cursor-copy font-mono"
        >
          {isMobile ? null : (
            <kbd className="pointer-events-none mr-2 inline-flex h-5 select-none items-center gap-1 rounded bg-neutral-100 px-1.5 font-mono text-neutral-900 dark:bg-green-300 dark:text-green-900">
              <span className="text-xl">⌘</span>
              <span>C</span>
            </kbd>
          )}
          {isCopied ? "Copied to Clipboard!" : "npx rehooks-cli@latest"}
        </Button>
        <Link href="/docs" className="outline-none ring-0">
          <Button size="circular" variant="secondary" className="font-mono">
            Documentation
            <kbd className="pointer-events-none ml-2 inline-flex h-5 select-none items-center gap-1 rounded bg-neutral-200 px-1.5 font-mono text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100">
              <span className="text-xl">⌘</span>
              <span>D</span>
            </kbd>
          </Button>
        </Link>
      </div>
    </>
  );
}
