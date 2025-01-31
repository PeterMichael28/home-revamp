import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { Readable } from "stream";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/privacy-policy", changefreq: "monthly", priority: 0.8 },
  { url: "/use-of-terms", changefreq: "monthly", priority: 0.8 },
  { url: "/ccpa", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/our-partners", changefreq: "monthly", priority: 0.8 },
  { url: "/join-our-affiliate-team", changefreq: "monthly", priority: 0.8 },
  { url: "/admin/login", changefreq: "never", priority: 0.5 },
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: "https://homerevampexpert.com" });
  const writeStream = createWriteStream("./public/sitemap.xml");

  // Convert the links array into a readable stream
  const readableLinks = Readable.from(links);
  readableLinks.pipe(sitemap).pipe(writeStream);

  // Wait for the stream to finish
  await streamToPromise(sitemap);

  console.log("Sitemap generated at public/sitemap.xml");
};

generateSitemap().catch(console.error);
