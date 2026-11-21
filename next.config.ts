import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ryokan",
        destination: "/hotel",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
