import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

import swiftImage from "@/assets/swift.svg";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex gap-3">
        <Image src={swiftImage} alt="icon" className="size-6" /> Swift Docs
      </div>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: "Documentação",
      url: "/docs",
    },
  ],
  themeSwitch: {
    mode: "light-dark-system",
  },
  githubUrl: "https://github.com/Felix01SA/swift-ptbr-docs",
};
