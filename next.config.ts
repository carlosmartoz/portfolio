// Next config
import type { NextConfig } from "next";

// Next intl
import createNextIntlPlugin from "next-intl/plugin";

// Next intl plugin
const withNextIntl = createNextIntlPlugin();

// Next config
const nextConfig: NextConfig = {};

// Export
export default withNextIntl(nextConfig);
