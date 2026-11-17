---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["projects/support-inetum-tdf.html"]
---

# Accueil du portfolio (index.html) et pages des réalisations

Scope: index.html plus the shared stylesheet used by projects/*.html and mentions-legales.html. Visitor mode: Read (the BTS jury finds and reads each RP).
Audience and job: the E5 board, on a laptop or a projector, reaching any RP in two clicks, the synthesis table and the proofs.
Constraints: static HTML/CSS/JS on GitHub Pages, URLs unchanged, real content only, Minecraft server kept as a personal lab separate from the RPs.
Quality bar: the user picked the category standard on purpose and named vercel.com and linear.app as the craft level to sit alongside.

## Direction contract

THESIS: The category-standard developer portfolio, executed at product-site craft: a short hero that states who and why, then the work. It refuses the dark "hacker" look with a typed terminal and gradient text that the old site used.

OWN-WORLD: White and slate-50 ground, slate ink (#0F172A), blue (#2563EB) for links and primary actions. At the user's request (2026-11-17, "rajoute de la couleur"), colour carries meaning: one hue per setting on the RP cards (alternance blue, project amber, TP violet, veille green) and one hue per bloc 1 competence, shared by the card chips and the synthesis table columns; a pale blue hero band. Hairline slate borders, 12px cards for the RPs only, pill buttons, Inter for everything, JetBrains Mono only for code and config.

STORY: The examiner knows in one glance who the candidate is, sees all seven RPs and the veille as cards, opens one, and can always reach the synthesis table, the parcours and the next RP.

FIRST VIEWPORT: Sticky nav (name left, Réalisations, Synthèse, Parcours, Compétences, Contact; primary pill "Tableau de synthèse" right). Left-aligned hero: H1 "Étudiant en BTS SIO SISR, orienté infrastructure.", one paragraph, primary "Voir les réalisations" and secondary download, a facts row (session, centre, alternance). The first row of RP cards starts inside the first viewport on a 1440x900 screen.

FORM: canon (standing exit chosen by the user); seed: seed:9354175828a347ee.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
