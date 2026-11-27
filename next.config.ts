import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ryokan",
        destination: "/hotel",
        permanent: true,
      },
      {
        source: "/en/flavors",
        destination: "/flavors",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
