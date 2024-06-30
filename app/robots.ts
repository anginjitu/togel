import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/',
      },
    ],
    sitemap: 'https://5.anginjitu.asia/sitemap.xml',
  }
}