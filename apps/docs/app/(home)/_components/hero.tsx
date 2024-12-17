"use client";

import { GithubIcon, ArrowRight } from "@rehooks/ui/icons";
import { Button, Shine } from "@rehooks/ui/components";
import { GITHUB_LINK } from "@rehooks/utils";
import { useClipboard } from "rehooks-ts";
import { cn } from "@rehooks/utils";
import Link from "next/link";

export function Hero() {
  const { copy, isCopied } = useClipboard();

  const handleCopy = () => {
    copy("npx rehooks-cli@latest init");
  };
  return (
    <>
      <h1 className="text-balance text-center text-4xl font-black lg:text-5xl">
        Streamline{" "}
        <span className="animate-background-shine inline-flex transform bg-[linear-gradient(110deg,#8b5cf6,45%,#a78bfa,55%,#8b5cf6)] bg-[length:250%_100%] bg-clip-text text-transparent">
          React
        </span>{" "}
        Hooks
      </h1>
      <p className="dark:text-fd-muted-foreground/50 text-fd-muted-foreground mt-2 max-w-3xl text-balance text-center text-lg font-medium lg:text-xl">
        A CLI to insert hooks directly to your project. Avoid repetitive code
        and stay with the SOLID principles.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-y-2.5">
        <Link href="/docs">
          <Button className="rounded-full">
            <ArrowRight className="size-6" />
            Get Started
          </Button>
        </Link>
        <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="-ml-1.5 rounded-full">
            Star on Github
            <GithubIcon className="size-6" />
          </Button>
        </a>
        <Shine
          borderRadius={9999}
          className="col-span-2"
          color={["#4f46e5", "#6d28d9", "#8b5cf6"]}
        >
          <Button
            className="w-full rounded-full font-mono"
            onClick={handleCopy}
            variant="outline"
          >
            {isCopied ? "Copied to Clipboard!" : "$ npx rehooks-cli@latest"}
          </Button>
        </Shine>
      </div>
    </>
  );
}
