import type { APIRoute } from 'astro';
import { absoluteUrl, IS_PREVIEW } from '../lib/url';

// Sur la prévisualisation GitHub Pages, on bloque l'indexation pour ne pas créer de doublon
// avec le futur domaine. En production, tout est ouvert et le sitemap est déclaré.
export const GET: APIRoute = () =>
  new Response(
    IS_PREVIEW
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap-index.xml')}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
