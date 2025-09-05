import { site } from "@/lib/seo";
export default function sitemap() {
  return [
    { url: site.url, lastModified: new Date() },
  ];
}
