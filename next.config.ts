// Next config
import type { NextConfig } from "next";

// Next intl
import createNextIntlPlugin from "next-intl/plugin";

// Next intl plugin
const withNextIntl = createNextIntlPlugin();

// Next config
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/carlos-martinez-resume.pdf",
        destination: "/carlos-martinez-resume.pdf",
      },
      {
        source: "/carlos-martinez-curriculum.pdf",
        destination: "/carlos-martinez-curriculum.pdf",
      },
    ];
  },
};

// Export
export default withNextIntl(nextConfig);
