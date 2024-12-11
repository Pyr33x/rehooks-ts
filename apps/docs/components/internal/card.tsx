import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { Text } from "@/components/internal/text";
import { cn } from "utils";
import { Beam } from "@/components/internal/demo";

interface Card {
  id: number;
  name: string;
  description: React.ReactNode | string;
  link?: string;
  content?: React.ReactNode | string;
  footer?: string;
  class?: string;
}

type Hook = {
  title: string;
  class?: string;
  group: "A" | "B";
};

const hooks: Hook[] = [
  { title: "useSessionStorage", group: "A" },
  { title: "useDebounceValue", group: "A" },
  { title: "useLocalStorage", group: "A" },
  { title: "useClipboard", group: "A" },
  { title: "useKeyPress", group: "A" },
  { title: "useScroll", group: "A" },
  { title: "useDebounceCallback", group: "B" },
  { title: "useEventListener", group: "B" },
  { title: "useEventCallback", group: "B" },
  { title: "useOnlineStatus", group: "B" },
  { title: "useClipboard", group: "B" },
  { title: "useCountdown", group: "B" },
] as const;

const renderHooks = (group: string) => {
  return hooks
    .filter((item) => item.group === group)
    .map((item) => (
      <div
        key={item.title}
        className={cn(
          "group flex h-10 select-none items-center justify-center rounded-md border border-neutral-400 bg-neutral-200/50 px-20 transition-colors hover:border-neutral-500 hover:bg-neutral-200/80 dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:border-neutral-700 hover:dark:bg-neutral-900/80",
          item.class,
        )}
      >
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          {item.title}
        </span>
      </div>
    ));
};

const cards: Card[] = [
  {
    id: 1,
    name: "Performance-Driven",
    description:
      "All hooks are meticulously crafted with SOLID principles, ensuring efficient, optimized, and robust performance.",
    content: <Beam />,
    class: "max-w-md",
  },
  {
    id: 2,
    name: "Why Rehooks?",
    description:
      "It provides a set of hooks that can be used to craft performant and type-safe React components.",
    content: (
      <>
        <div className="flex h-full items-center justify-center">
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
            {renderHooks("A")}
          </div>
        </div>
        <hr className="my-6 w-full rounded-full border-t-4 border-t-neutral-300 dark:border-t-neutral-900" />
        <div className="hidden items-center justify-center xl:flex">
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
            {renderHooks("B")}
          </div>
        </div>
      </>
    ),
    class: "max-w-md row-span-2",
  },
  {
    id: 3,
    name: "TypeScript",
    description:
      "Written in TypeScript, Rehooks offers comprehensive type safety and autocompletion, making development seamless and error-resistant.",
    content: (
      <Files className="select-none">
        <Folder name="hooks" defaultOpen disabled>
          <File name="useSessionStorage.ts" />
          <File name="useLocalStorage.ts" />
          <File name="useClipboard.ts" />
          <File name="useKeyPress.ts" />
        </Folder>
        <File name="rehooks.json" />
      </Files>
    ),
    class: "max-w-md",
  },
  {
    id: 4,
    name: "Package",
    description:
      "Rehooks includes an internal package for easy access to production-ready hooks, streamlining development.",
    class: "max-w-md",
  },
  {
    id: 5,
    name: "Open-Source",
    description:
      "Rehooks is open-source under the MIT license, fostering community collaboration and welcoming contributions.",
    class: "max-w-md",
  },
] as const;

export function Cards() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-3 text-center md:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.id} className={card.class}>
          <CardHeader>
            <CardTitle className="text-neutral-800 dark:text-neutral-50">
              {card.name}
            </CardTitle>
            <CardDescription className="text-neutral-800 dark:text-neutral-50/70">
              {card.description}
            </CardDescription>
          </CardHeader>
          {card.content && <CardContent>{card.content}</CardContent>}
        </Card>
      ))}
    </div>
  );
}
