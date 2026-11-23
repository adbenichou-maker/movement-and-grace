import { withBase } from '../lib/url';

// Textes d'interface (menu, pied de page, boutons) et adresses des pages, par langue.
// Le contenu des pages, lui, vit directement dans src/pages/ (FR) et plus tard src/pages/en/ (EN).
//
// Pour ajouter l'anglais :
//   1. compléter `en` ci-dessous (déjà pré-rempli) et passer `LIVE_LOCALES` à ['fr', 'en'] ;
//   2. créer les pages dans src/pages/en/ avec les slugs de `routes.en`.
// Le sélecteur de langue et les balises hreflang s'activent alors automatiquement.

export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

/** Langues réellement publiées. */
export const LIVE_LOCALES: readonly Locale[] = ['fr'];

export type PageKey = 'home' | 'seminars' | 'lessons' | 'about' | 'contact';

const paths: Record<Locale, Record<PageKey, string>> = {
  fr: {
    home: '/',
    seminars: '/seminaires-team-building/',
    lessons: '/cours-individuels/',
    about: '/a-propos/',
    contact: '/contact/',
  },
  en: {
    home: '/en/',
    seminars: '/en/seminars-team-building/',
    lessons: '/en/private-yoga-classes/',
    about: '/en/about/',
    contact: '/en/contact/',
  },
};

/** Adresses des pages, préfixées si le site est servi dans un sous-dossier. */
export const routes = Object.fromEntries(
  Object.entries(paths).map(([locale, pages]) => [
    locale,
    Object.fromEntries(Object.entries(pages).map(([key, path]) => [key, withBase(path)])),
  ]),
) as Record<Locale, Record<PageKey, string>>;

export const ui = {
  fr: {
    'nav.open': 'Ouvrir le menu',
    'nav.close': 'Fermer le menu',
    'nav.label': 'Navigation principale',
    'nav.home': 'Accueil',
    'nav.seminars': 'Séminaire & Team Building',
    'nav.lessons': 'Cours individuels',
    'nav.about': 'À propos de moi',
    'nav.contact': 'Contact',
    'footer.contact': 'Me contacter',
    'footer.zones': 'Mons · Wallonie · Bruxelles · Paris',
    'footer.rights': 'Tous droits réservés.',
    'cta.book15': 'Réserver un échange de 15 minutes',
    'cta.book': 'Réserver',
    'lang.switch': 'English',
  },
  en: {
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',
    'nav.label': 'Main navigation',
    'nav.home': 'Home',
    'nav.seminars': 'Seminars & Team Building',
    'nav.lessons': 'Private classes',
    'nav.about': 'About me',
    'nav.contact': 'Contact',
    'footer.contact': 'Get in touch',
    'footer.zones': 'Mons · Wallonia · Brussels · Paris',
    'footer.rights': 'All rights reserved.',
    'cta.book15': 'Book a 15-minute call',
    'cta.book': 'Book',
    'lang.switch': 'Français',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['fr'];

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key] ?? ui[DEFAULT_LOCALE][key];
}

/** Ordre du menu latéral. */
export const NAV_ORDER: PageKey[] = ['home', 'seminars', 'lessons', 'about', 'contact'];
