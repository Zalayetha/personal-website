import type { APIRoute } from "astro";
import { blogPosts, projects } from "../data/portfolio";
import { SITE_URL, parseISODate } from "../utils/seo";

interface SitemapPage {
  loc: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
}

export const GET: APIRoute = async ({ site }) => {
  const origin = (site ? site.origin : SITE_URL).replace(/\/$/, "");

  const staticPages: SitemapPage[] = [
    { loc: `${origin}/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${origin}/work`, priority: "0.9", changefreq: "weekly" },
    { loc: `${origin}/writing`, priority: "0.9", changefreq: "weekly" },
    { loc: `${origin}/about`, priority: "0.8", changefreq: "monthly" },
    { loc: `${origin}/services`, priority: "0.8", changefreq: "monthly" },
  ];

  const projectPages: SitemapPage[] = projects.map((project) => ({
    loc: `${origin}/work/${project.slug}`,
    priority: "0.8",
    changefreq: "monthly",
  }));

  const blogPages: SitemapPage[] = blogPosts.map((post) => ({
    loc: `${origin}/blog/${post.slug}`,
    priority: "0.8",
    changefreq: "monthly",
    lastmod: parseISODate(post.date).split("T")[0],
  }));

  const allPages: SitemapPage[] = [...staticPages, ...projectPages, ...blogPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ""}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
};
