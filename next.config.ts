// Next config
import type { NextConfig } from "next";

// Next intl
import createNextIntlPlugin from "next-intl/plugin";

// Next intl plugin
const withNextIntl = createNextIntlPlugin();

// Next config
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*", // Match all pages
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=3600, s-maxage=3600, stale-while-revalidate=59",
          },
        ],
      },
    ];
  },
};

// Export
export default withNextIntl(nextConfig);
