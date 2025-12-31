import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/portal-coming-soon', // Hiding internal/placeholder pages
        },
        sitemap: 'https://pathanx.vercel.app/sitemap.xml',
    };
}
