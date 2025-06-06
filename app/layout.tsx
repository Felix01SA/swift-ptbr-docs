import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale: "pt",
            translations: {
              search: "Pesquisa",
              toc: "Nesta Pagina",
              nextPage: "Proxima Pagina",
              previousPage: "Pagina Anterior",
              lastUpdate: "Ultima modificação em",
              editOnGithub: "Editar no Github",
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
