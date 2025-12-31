import { MetadataRoute } from 'next';

const BASE_URL = 'https://pathanx.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/about',
        '/contact',
        '/solutions',
        '/partnership',
        '/future-projects',
        '/technologies/ai',
        '/technologies/automation',
        '/technologies/hardware',
        '/technologies/cyber-security',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
