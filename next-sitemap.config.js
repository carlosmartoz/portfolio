/** @type {import('next-sitemap').IConfig} */

module.exports = {
  priority: 0.7,
  sitemapSize: 7000,
  changefreq: "daily",
  generateRobotsTxt: true,
  siteUrl: "https://carlosmartoz.com",
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
