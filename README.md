# Papy AI

Site vitrine statique de Papy AI, construit avec Astro. Il regroupe une bibliothèque de prompts, des astuces, des ressources et les liens officiels.

## Lancer le site

Prérequis : Node.js 20 ou plus récent.

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur `http://localhost:4321`.

Pour vérifier et générer la version de production :

```bash
npm run check
npm run build
npm run preview
```

## Modifier les contenus

Les contenus éditoriaux sont séparés du design :

- `src/data/prompts.ts` : prompts, catégories, niveaux et conseils
- `src/data/tips.ts` : astuces et mini-articles
- `src/data/resources.ts` : ressources gratuites et produits
- `src/data/site.ts` : réseaux sociaux et adresse e-mail

Les pages sont dans `src/pages`, les composants réutilisables dans `src/components` et l’identité globale dans `src/styles/global.css`.

## Déployer sur GitHub Pages

Le projet est configuré pour le compte GitHub `papynotion-IA`.

1. Publie-le dans un dépôt public nommé exactement `papynotion-ia.github.io`.
2. Pousse le projet sur GitHub.
3. Dans **Settings → Pages**, choisis **GitHub Actions** comme source.
4. Le workflow `.github/workflows/deploy.yml` est déjà prêt : chaque envoi sur la branche `main` publie le site.

L’adresse publique sera `https://papynotion-ia.github.io`.

Le sitemap est créé automatiquement pendant `npm run build`. Le favicon et les métadonnées SEO/Open Graph de base sont déjà présents.
