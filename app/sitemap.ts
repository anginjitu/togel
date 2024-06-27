import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://anginjitu.asia',
      lastModified: new Date(),
    },
  ]
}