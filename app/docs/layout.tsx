import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";

import { source } from "@/lib/source";

import "fumadocs-ui/style.css";
import "./docs-overrides.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider theme={{ enabled: false }}>
      <div className="dark docs-root">
        <DocsLayout
          tree={source.pageTree}
          nav={{ title: "Maestro Deck" }}
          githubUrl="https://github.com/BlueShork/maestro-deck-docs"
        >
          {children}
        </DocsLayout>
      </div>
    </RootProvider>
  );
}
