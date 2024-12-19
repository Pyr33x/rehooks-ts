import type { Card } from "../types";

export const cards: Card[] = [
  {
    label: "Rehooks",
    title: "Open-Source Codebase",
    code: `const rehooks = {
  openSource: true,
  license: "MIT",
  issues: "open",
  commits: "+500",
  version: "v4.0.0",
}`,
  },
  {
    label: "Rehooks",
    title: "TypeScript Support",
    content:
      "Rehooks is written in TypeScript, ensuring type safety and maintainability throughout the codebase. This enhances code clarity and reduces errors, making it easier to understand and extend.",
    className: "font-sans text-base",
  },
  {
    label: "Rehooks",
    title: "Variety of Hooks",
    content:
      "Rehooks offers a diverse variety of powerful hooks for different use cases, allowing developers to easily and efficiently implement common functionality in their components and enhance their applications.",
    className: "font-sans text-base",
  },
  {
    label: "Rehooks",
    title: "Performant & Reusability",
    content:
      "All hooks are expertly crafted with SOLID principles, ensuring not only efficient and optimized performance but also robust functionality that enhances the overall development experience.",
    className: "font-sans text-base",
  },
];
