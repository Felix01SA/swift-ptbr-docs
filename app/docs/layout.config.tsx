import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "../layout.config";

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
  links: [],
};
