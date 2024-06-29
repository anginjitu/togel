import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://5.anginjitu.asia',
      lastModified: new Date(),
    },
  ]
}