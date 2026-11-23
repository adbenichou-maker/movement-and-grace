// Informations centrales du site : à modifier ici, elles sont reprises partout
// (pied de page, menu, page Contact, données structurées Google).
// Les valeurs marquées TODO sont des exemples à remplacer.
// Le nom de domaine se règle dans astro.config.mjs.

import { withBase } from '../lib/url';

export const SITE = {
  name: 'Movement & Grace',
  tagline: 'Well-being',
  founder: 'Mathilde Goutorbe',

  // TODO : coordonnées réelles.
  email: 'hello@movementandgrace.com',
  phone: '+32 400 00 00 00',
  instagram: 'https://www.instagram.com/movementandgrace',
  instagramHandle: '@movementandgrace',
  address: {
    city: 'Mons',
    region: 'Hainaut, Wallonie',
    postalCode: '7000',
    country: 'BE',
  },

  // Zones où Mathilde intervient : reprises dans les textes et pour Google.
  areasServed: ['Mons', 'Wallonie', 'Bruxelles', 'Paris'],

  // TODO : lien de prise de rendez-vous (Calendly, Cal.com…). En attendant, renvoie vers Contact.
  bookingUrl: withBase('/contact/'),
} as const;
