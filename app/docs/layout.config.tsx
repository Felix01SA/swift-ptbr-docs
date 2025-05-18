import type { DocsLayoutProps } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "../layout.config";
import { StarOnGithubButton } from "@/components/star-on-github-button";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const docsOptions: Partial<DocsLayoutProps> = {
  ...baseOptions,
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [{ on: "nav", children: <StarOnGithubButton />, type: "custom" }],
};
