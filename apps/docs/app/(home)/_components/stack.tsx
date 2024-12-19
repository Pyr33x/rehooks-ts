"use client";

import { React, Turborepo, Rust, Next } from "@rehooks/ui/icons/stack";

export function Stack() {
  return (
    <>
      <h2 className="text-fd-muted-foreground/50 select-none text-xl font-medium uppercase">
        Stack
      </h2>
      <h3 className="text-fd-foreground my-1 text-wrap text-center text-3xl font-semibold">
        Powered by Innovation
      </h3>
      <h4 className="text-fd-muted-foreground mt-1.5 max-w-lg text-wrap text-center text-xl italic">
        Rehooks is built with TypeScript to power the best developer experience
        and type-safety.
      </h4>
      <div className="mt-8 flex flex-row items-center justify-center gap-x-6 lg:gap-x-8">
        <Stacks />
      </div>
    </>
  );
}

function Stacks() {
  return (
    <>
      <Rust className="size-[65px] transform transition duration-75 lg:size-[65px]" />
      <Next className="size-[65px] transform transition duration-75 lg:size-[65px]" />
      <Turborepo className="size-[65px] transform transition duration-75 lg:size-[65px]" />
    </>
  );
}
