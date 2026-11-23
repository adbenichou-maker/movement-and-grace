# Movement & Grace — site web

Site vitrine de Movement & Grace Well-being (Mathilde Goutorbe) : yoga, ateliers, séminaires et team building.
Site statique construit avec [Astro](https://astro.build) : très rapide, bien référencé, sans base de données ni CMS.

## Lancer le site en local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère le site final dans dist/
npm run preview    # prévisualise le build
```

Node 20 suffit (Astro 5). Pour passer à Astro 6+, il faudra Node 22.

## Où modifier quoi

| Quoi | Fichier |
| --- | --- |
| Email, téléphone, Instagram, ville, lien de réservation | `src/config/site.ts` |
| Nom de domaine | `astro.config.mjs` |
| Libellés du menu, du pied de page, adresses des pages (FR/EN) | `src/i18n/ui.ts` |
| Couleurs, typographies, boutons, cartes, animations | `src/styles/global.css` |
| Texte des pages | `src/pages/*.astro` |
| Menu latéral (survol sur ordinateur, toucher sur mobile) | `src/components/SideNav.astro` |
| Vidéos (fichier MP4 ou YouTube/Vimeo) | `src/components/Video.astro` |

Les contenus provisoires sont signalés par `TODO` dans le code et par un badge « Texte provisoire » / « À remplacer » sur le site.

```bash
grep -rn "TODO" src
```

## Images et vidéos

- Photos : les mettre dans `src/assets/` et utiliser `<Image>` d'Astro (compression et formats modernes automatiques).
- Vidéos courtes d'ambiance : `public/videos/xxx.mp4` puis `<Video src="/videos/xxx.mp4" ambient title="…" />`.
- Vidéos longues : YouTube ou Vimeo, `<Video youtube="ID" title="…" />` (le lecteur ne se charge qu'au clic).

## Ajouter l'anglais

1. Dans `src/i18n/ui.ts`, passer `LIVE_LOCALES` à `['fr', 'en']` (les libellés EN sont déjà prêts).
2. Créer les pages dans `src/pages/en/` avec les adresses de `routes.en`.
3. Les balises `hreflang` et le sitemap multilingue se mettent en place automatiquement.

## Référencement (SEO)

Déjà en place :
- titre et description propres à chaque page, URL canonique, balises Open Graph ;
- données structurées Google (`ProfessionalService` avec zones Mons / Wallonie / Bruxelles / Paris, `Service`, `Person`) ;
- `sitemap-index.xml` et `robots.txt` générés automatiquement ;
- polices auto-hébergées (rapide, et pas d'appel à Google Fonts → conforme RGPD) ;
- site statique très léger (bons Core Web Vitals).

À faire après la mise en ligne :
- renseigner le vrai domaine dans `astro.config.mjs` (voir « Passer sur le domaine OVH ») ;
- créer la fiche **Google Business Profile** (Mons) : c'est le levier n°1 pour la recherche locale ;
- déclarer le site dans **Google Search Console** et y soumettre `sitemap-index.xml` ;
- ajouter une image de partage (`ogImage`) et de vraies photos avec un texte `alt` descriptif.

## Mise en ligne

Le site est publié automatiquement sur **GitHub Pages** à chaque push sur `main`
(workflow `.github/workflows/deploy.yml`) :
https://adbenichou-maker.github.io/movement-and-grace/

Cette version de prévisualisation est marquée `noindex` : Google ne l'indexe pas, pour éviter
un doublon avec le futur domaine.

### Passer sur le domaine OVH

1. Dans `astro.config.mjs`, remplacer `https://www.movementandgrace.com` par le vrai domaine.
2. GitHub → Settings → Pages → *Custom domain* : saisir `www.mondomaine.com`, puis cocher *Enforce HTTPS*.
3. Chez OVH (zone DNS du domaine) :
   - `www` → enregistrement **CNAME** vers `adbenichou-maker.github.io.`
   - domaine nu → 4 enregistrements **A** vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Relancer le workflow : le site passe à la racine du domaine et devient indexable automatiquement.
