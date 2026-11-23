// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Adresse publique du site.
// - En production (domaine OVH) : remplacer la valeur par défaut par le vrai domaine.
// - Sur GitHub Pages, le workflow fournit SITE_URL et BASE_PATH automatiquement.
const site = process.env.SITE_URL || 'https://www.movementandgrace.com'; // TODO : domaine OVH
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  i18n: {
    // Français à la racine (/), anglais sous /en/ quand il sera ajouté.
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-BE', en: 'en' },
      },
    }),
  ],
});
