// Construction des liens internes.
// Le site peut être servi à la racine d'un domaine (ex. OVH : https://www.mondomaine.com/)
// ou dans un sous-dossier (GitHub Pages : https://compte.github.io/movement-and-grace/).
// Toujours passer par withBase() pour les liens internes : ça marche dans les deux cas.

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** '/contact/' → '/movement-and-grace/contact/' (ou '/contact/' à la racine). Les URL externes restent intactes. */
export function withBase(path: string): string {
  if (/^([a-z]+:|\/\/|#)/i.test(path)) return path;
  return BASE + (path.startsWith('/') ? path : `/${path}`);
}

/** URL absolue complète, pour Google (canonical, données structurées, sitemap). */
export function absoluteUrl(path = '/'): string {
  return new URL(withBase(path), import.meta.env.SITE).href;
}

/** Version de prévisualisation (GitHub Pages) : on demande à Google de ne pas l'indexer. */
export const IS_PREVIEW = new URL(import.meta.env.SITE ?? 'http://localhost').hostname.endsWith('github.io');
