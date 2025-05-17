import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

import swiftImage from "@/assets/swift.svg";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex gap-3">
        <Image src={swiftImage} alt="icon" className="size-6" /> Swift Docs
      </div>
    ),
  },
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
