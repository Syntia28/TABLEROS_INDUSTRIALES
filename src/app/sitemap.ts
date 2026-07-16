import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tablerosindustriales.pe';
  
  const routes = ['', '/servicios', '/productos', '/ventajas', '/clientes', '/contacto'];
  
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/productos' || route === '/servicios' ? 0.9 : 0.8,
  }));
}
