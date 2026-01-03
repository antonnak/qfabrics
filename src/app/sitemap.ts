import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://quantumfabrics.ai', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/solutions', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/solutions/talent-fabrics', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/solutions/investment-fabrics', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/solutions/operations-fabrics', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/solutions/customer-fabrics', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/how-we-work', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/about', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/blog', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/contact', lastModified: new Date() },
  ];
}
