import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/app/layout.config";
import { Book } from "@rehooks/ui/icons";
import type { ReactNode } from "react";
import { source } from "@/lib/source";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <DocsLayout
      sidebar={{
        tabs: [
          {
            title: "Documentation",
            url: "/docs",
            icon: <Book className="size-4" />,
          },
        ],
      }}
      tree={source.pageTree}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
