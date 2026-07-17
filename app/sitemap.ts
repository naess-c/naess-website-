import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://naessnepal.org.np",
      lastModified: new Date(),
    },
    {
      url: "https://naessnepal.org.np/team",
      lastModified: new Date(),
    },
    {
      url: "https://naessnepal.org.np/alumni",
      lastModified: new Date(),
    },
    {
      url: "https://naessnepal.org.np/agrineer",
      lastModified: new Date(),
    },
    {
      url: "https://naessnepal.org.np/notes",
      lastModified: new Date(),
    },
    {
      url: "https://naessnepal.org.np/career",
      lastModified: new Date(),
    },
    {
      url: "https://naessnepal.org.np/contact",
      lastModified: new Date(),
    },
  ];
}