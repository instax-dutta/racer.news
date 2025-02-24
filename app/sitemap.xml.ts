import { NextResponse } from 'next/server';
import { glob } from 'glob';

const BASE_URL = 'https://www.racer.news';

async function getRoutes() {
  const files = await glob('app/**/page.tsx', {
    ignore: ['app/**/_*.tsx', 'app/**/[*.tsx'],
  });

  const routes = files.map((file) => {
    const path = file
      .replace('app/', '')
      .replace('/page.tsx', '')
      .replace('index', '');
    return {
      url: `${BASE_URL}/${path}`,
      lastmod: new Date(),
    };
  });
  routes.push({ url: BASE_URL, lastmod: new Date() });
  return routes;
}

function sitemapXml(routes: any) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach((route: any) => {
    xml += `
      <url>
        <loc>${route.url}</loc>
        <lastmod>${route.lastmod.toISOString()}</lastmod>
      </url>`;
  });

  xml += `</urlset>`;

  return xml;
}

export async function GET() {
  const routes = await getRoutes();
  const sitemap = sitemapXml(routes);

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
