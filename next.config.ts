import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/docs", permanent: false }];
  },
};

export default withMDX(nextConfig);
