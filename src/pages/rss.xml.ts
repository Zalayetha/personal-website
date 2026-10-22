import type { APIRoute } from "astro";
import { blogPosts } from "../data/portfolio";
import { SITE_URL, escapeXml, parseRFC822Date } from "../utils/seo";

export const GET: APIRoute = async ({ site }) => {
  const origin = (site ? site.origin : SITE_URL).replace(/\/$/, "");

  const items = blogPosts
    .map((post) => {
      const postUrl = `${origin}/blog/${post.slug}`;
      const pubDate = parseRFC822Date(post.date);
      const categories = post.tags
        .map((tag) => `      <category>${escapeXml(tag)}</category>`)
        .join("\n");

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
${categories}
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Zaghy Zalayetha | Software Engineer</title>
    <link>${origin}</link>
    <description>Articles and reflections on software engineering, mobile development, architecture, and learnings by Zaghy Zalayetha.</description>
    <language>en-us</language>
    <atom:link href="${origin}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`.trim();

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
};
