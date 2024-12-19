import { ArrowRight } from "@rehooks/ui/icons";
import { GITHUB_LINK, REHOOKS_NPM } from "@rehooks/utils";
import { type HomeLayoutProps } from "fumadocs-ui/layouts/home";

export const baseOptions: HomeLayoutProps = {
  githubUrl: "https://github.com/Pyr33x/rehooks",
  nav: {
    title: "Rehooks",
  },

  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "GitHub",
      url: GITHUB_LINK,
      active: "nested-url",
    },
    {
      text: "NPM",
      url: REHOOKS_NPM,
      active: "nested-url",
    },
  ],
};
