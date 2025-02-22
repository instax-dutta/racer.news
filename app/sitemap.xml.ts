import { NextResponse } from 'next/server';

const BASE_URL = 'https://www.racer.news';

const routes = [
  {
    url: BASE_URL,
    lastmod: new Date(),
  },
  {
    url: `${BASE_URL}/pricing`,
    lastmod: new Date(),
  },
];

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
  const sitemap = sitemapXml(routes);

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
