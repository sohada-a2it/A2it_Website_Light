export const dynamic = "force-static";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://a2itltd.com";

  // Define routes with their specific metadata
  const routes = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    { path: "/about", priority: "0.9", changefreq: "monthly" },
    { path: "/contact", priority: "0.8", changefreq: "monthly" },
    { path: "/portfolio", priority: "0.9", changefreq: "weekly" },
    { path: "/blog", priority: "0.9", changefreq: "daily" },
    { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
    { path: "/terms-of-service", priority: "0.3", changefreq: "yearly" },
    { path: "/services/amazon", priority: "0.8", changefreq: "weekly" },
    { path: "/services/design-development", priority: "0.8", changefreq: "weekly" },
    { path: "/services/e-bay", priority: "0.8", changefreq: "weekly" },
    { path: "/services/e-commerce", priority: "0.8", changefreq: "weekly" },
    { path: "/services/erp", priority: "0.8", changefreq: "weekly" },
    { path: "/services/mobile-app", priority: "0.8", changefreq: "weekly" },
    { path: "/services/seo", priority: "0.8", changefreq: "weekly" },
    { path: "/services/server-hosting", priority: "0.8", changefreq: "weekly" },
    { path: "/services/shopify", priority: "0.8", changefreq: "weekly" },
    { path: "/services/social-media", priority: "0.8", changefreq: "weekly" },
  ];

  const currentDate = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}