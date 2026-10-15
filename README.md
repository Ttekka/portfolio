# Portfolio — Gwendal Riquier (BTS SIO SISR)

Portfolio statique (HTML/CSS/JS, sans dépendance de build) présentant mes
projets d'étudiant en BTS SIO, option SISR.

## Structure

```
.
├── index.html                      page d'accueil
├── projects/
│   └── serveur-minecraft.html      étude de cas : serveur Minecraft sous Debian
├── css/style.css                   design system (couleurs, typo, composants)
├── js/main.js                      interactions (nav, animations, terminal animé)
└── assets/favicon.svg               icône du site
```

Pour ajouter un nouveau projet : dupliquer `projects/serveur-minecraft.html`,
adapter son contenu, puis ajouter une carte dans la section « Projets » de
`index.html` (remplacer une des cartes « À venir »).

## Déploiement sur GitHub Pages

1. Créer un dépôt sur GitHub (par ex. `portfolio`) et y pousser ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/Ttekka/portfolio.git
   git push -u origin main
   ```
2. Sur GitHub : **Settings → Pages → Build and deployment → Source : Deploy
   from a branch**, choisir la branche `main` et le dossier `/ (root)`.
3. Le site est publié à l'adresse `https://ttekka.github.io/portfolio/`
   (quelques minutes après le premier déploiement).

## Aperçu local

Aucune compilation nécessaire : ouvrir `index.html` dans un navigateur, ou
lancer un petit serveur local pour que les chemins relatifs fonctionnent
parfaitement :

```bash
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```
