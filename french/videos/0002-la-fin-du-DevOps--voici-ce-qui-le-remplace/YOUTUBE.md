# La fin du DevOps ? Voici ce qui le remplace…

> [!important]
> 🇬🇧 The english version is available here ➡️ [link](/english/videos/0002-the-end-of-devops--heres-whats-replacing-it/YOUTUBE.md).

- ▶️ [Vidéo YouTube](https://www.youtube.com/watch?v=VnExltM4yII)
- 📚 [YouTube & transparence](../../README.md)

---

- [Utilisation de l’IA](#utilisation-de-lia)
- [Code \& outils](#code--outils)
- [Inspirations \& références](#inspirations--références)
  - [Inspiration principale](#inspiration-principale)
  - [Sources de données](#sources-de-données)
- [Mes biais cognitifs](#mes-biais-cognitifs)
  - [Croyances de départ](#croyances-de-départ)
  - [Biais associés](#biais-associés)
- [Statistiques \& interprétation](#statistiques--interprétation)
  - [Visualisations](#visualisations)
  - [Niche des sources](#niche-des-sources)
  - [Contexte spécifique](#contexte-spécifique)
  - [Critique](#critique)
- [Auto-critique](#auto-critique)
- [Temps passé](#temps-passé)
- [Licence](#licence)


## Utilisation de l’IA

👉 Dans le cadre de cette vidéo, **l’IA a une empreinte très importante**.

- J’ai utilisé **Cursor (Claude Sonnet 4)** pour :
  - co-créer une CLI d'étude de concurrence pour sortir des statistiques précises des chaînes YouTube concurrentes/adjacentes
- J'ai utilisé **ChatGPT (GPT-5)** pour :
  - comprendre l'API YouTube pour l'étude de concurrence
  - étudier les tendances de marchés (approche sourcée)
  - générer le script NodeJS [devops-labor-market-trends](/code/videos/0002-the-end-of-devops--heres-whats-replacing-it/devops-labor-market-trends/) pour récupérer les données de l'[API Algolia de Hacker News](https://hn.algolia.com/api)
  - m'aider à choisir le thème et le titre de la vidéo depuis les statistiques des chaînes YouTube concurrentes/adjacentes
  - générer une structure de script de la vidéo
  - affiner le script de la vidéo
- **Je n'ai pas utilisé l'IA pour** :
  - l'approche globale de la vidéo
  - l'écriture du premier jet du script de la vidéo

---

## Code & outils

### Code source

- [Devops labor market trends - HN Who is hiring](/code/videos/0002-the-end-of-devops--heres-whats-replacing-it/devops-labor-market-trends/) : script NodeJS utilisé afin de récupérer le nombre d'annonces dans les threads [Hacker News](https://news.ycombinator.com/) "Who is hiring" depuis 2014
- [Non divulgué] : application CLI d'étude de concurrence sur YouTube pour trouver des thèmes de vidéos à fort potentiel ("outliers")

### Outils de production

- [Canva](https://www.canva.com/) (miniature)
- [Final Cut Pro](https://www.apple.com/fr/final-cut-pro/) (outil de montage)
- [Envato](https://elements.envato.com/) (transition, titres & éléments de montage)
- [Pexels](www.pexels.com) (B-roll)
- [Epidemic Sound](https://www.epidemicsound.com/) (bande son)
- [Flourish](https://flourish.studio/) (visualisation de données)
- [Poke Card Generator](https://www.pokecardgenerator.com/fr) (cartes pokémon de rôles)

---

## Inspirations & références

### Inspiration principale

[DevOps Jobs Are Disappearing - Here's Why You Should Celebrate](https://www.youtube.com/watch?v=KW1X9xefE0Q) de [Mischa van den Burg](https://www.youtube.com/@mischavandenburg) :

- ça a été ma principale source d'inspiration dans l'idée de la vidéo elle-même et l'accroche : j'ai beaucoup fonctionné par mimétisme
- quelques similitudes sont notables dans le motion design et quelques éléments de structure
- au-delà de l'accroche, je ne me suis pas inspiré du reste de sa vidéo et j'en dévie complètement après [01:40](https://www.youtube.com/watch?v=VnExltM4yII&t=100s)

### Sources de données

- Étude du marché du travail de la tech :
  - [kube.careers](https://kube.careers/)
  - [Hacker News](https://news.ycombinator.com/news) (threads "Who is Hiring")
- Contexte sur le marché de la tech entre 2021 et 2025 via [The Pragmatic Engineer](https://www.pragmaticengineer.com/) (Gergely Orosz)
  - [ZIRP and the end of cheap money](https://newsletter.pragmaticengineer.com/p/zirp) (2024)
  - [What is Old is New Again](https://newsletter.pragmaticengineer.com/p/what-is-old-is-new-again) (2024)
  - [Drop in global SWE openings](https://blog.pragmaticengineer.com/is-there-a-drop-in-software-engineer-job-openings-globally/) (2023)
  - [Software Engineer jobs at a 5-year low](https://blog.pragmaticengineer.com/software-engineer-jobs-five-year-low/) (2025)
- Sources diverses pour comprendre l'impact de la "bulle COVID" (2020–2021)
  - [Elliott Scott HR – Fallout of the Tech Sector Hiring Spree](https://www.elliottscotthr.com/hr-insights/hr-insights-and-trends/the-fallout-of-the-tech-sector-hiring-spree/)  
  - [Business Insider – Tech graduate job market post-layoffs/AI](https://www.businessinsider.com/tech-graduate-job-market-ai-layoffs-2024-10)  
  - [Wall Street Journal – Tech jobs and AI](https://www.wsj.com/tech/tech-jobs-artificial-intelligence-cce22393)  
  - [Bureau of Labor Statistics – JOLTS 2023 report](https://www.bls.gov/opub/mlr/2024/article/job-openings-and-hires-decline-in-2023.htm)  
- Culture du platform engineering et du site reliability engineering :
  - [Google SRE Workbook](https://sre.google/books/)
  - [Humanitec – définition Platform Engineering](https://humanitec.com/platform-engineering)  
  - [Humanitec – blog “Platform as a Product”](https://humanitec.com/blog/platform-as-a-product-the-evolution-of-devops-and-platform-engineering)  
  - [Humanitec – State of Platform Engineering report](https://humanitec.com/whitepapers/state-of-platform-engineering-report-volume-2)  
  - [The New Stack – Birth and evolution of Platform Engineering](https://thenewstack.io/the-birth-and-continuing-evolution-of-platform-engineering/)  
  - [O’Reilly – Camille Fournier on Platform Engineering](https://www.oreilly.com/radar/platform-engineering-the-next-step-in-operations/)  
  - [Red Hat Developers – What is Platform Engineering](https://developers.redhat.com/articles/2024/05/06/what-platform-engineering-and-why-do-we-need-it)  
  - [Here is Why Platform Engineering May Be a More Lucrative Career Than You Think](https://platformengineering.com/features/here-is-why-platform-engineering-may-be-a-more-lucrative-career-than-you-think/)

---

## Mes biais cognitifs

### Croyances de départ

- Le métier de "DevOps" est une "abérration" de marché, c'est avant tout une culture avant d'être un métier
- Les rôles et fonctions derrière ce terme "DevOps" engineer se fragmentent en plusieurs rôles clés (SRE, Platform, Cloud, Security, Software engineers) depuis ~2017

### Biais associés

- Biais de confirmation : je pense ne pas avoir réussi à m'en défaire, ça se ressens dans l'exploitation des données de Hacker News
- Biais "d'identité" : je vis dans l'écosystème que je décris depuis 11+ ans, je ne suis donc pas objectif

---

## Statistiques & interprétation

### Visualisations

- [1]<a name=visualisation-1></a> [00:03](https://youtu.be/VnExltM4yII?t=3) : [DevOps declining - HN - Who is hiring](https://public.flourish.studio/visualisation/24897779/)
- [2]<a name=visualisation-2></a> [00:14](https://youtu.be/VnExltM4yII?t=14) : [New roles - HN - Who is hiring](https://public.flourish.studio/visualisation/24898238/)
- [3]<a name=visualisation-3></a> [03:00](https://youtu.be/VnExltM4yII?t=180) : [DevOps vs Platform vs SRE - HN - Who is hiring](https://public.flourish.studio/visualisation/24855770/)

### Niche des sources

Les annonces de "Who is hiring" de Hacker News ne sont pas représentatives :

- du marché du travail de la tech anglophone
- encore moins du marché français

### Contexte spécifique

Le marché de la tech est perturbé depuis ~2020 :
  - lors de la crise du Covid, le marché a connu une croissance hors-norme
  - entre 2022 et 2024, le marché a subi une correction avec un déclin non-négligeable (vagues de licenciement, gel des recrutements, etc.)
  - depuis 2025, on commence à retrouver un certain équilibre

### Critique

Cela signifie que la baisse du nombre de *job posting* pour le métier de "DevOps engineer" [[1](#visualisation-1)] n'est pas lié qu'à la tendance que je tente de montrer.

Du fait de la diminution de l'échantillon dû aux conditions de marché, il est même possible que les graphes [[2](#visualisation-2)] & [[3](#visualisation-3)] ne soient influencés que par ces conditions de marché et non la tendance que je tente de démontrer dans la vidéo.

## Auto-critique

- le sujet est traité vraiment très en surface, 7 minutes c'est peu
- l'analogie avec le webmaster est un minimum parlante mais elle m'a l'air un peu bancale

---

## Temps passé

| Catégorie   | Tâche                  | Temps  |
|-------------|------------------------|--------|
| Préparation | Recherche              | 8h     |
| Préparation | Scripting              | 6h     |
| Préparation | YouTube learning       | 4h     |
| Préparation | Titre & Thumbnail      | 1h30   |
| **Préparation – total** |            | **19h30**|
| **Tournage – total** |               | **1h30**|
| Montage     | Découpage              | 1h40   |
| Montage     | Création B-roll        | 5h30   |
| Montage     | Transitions            | 0h30   |
| Montage     | SFX                    | 0h30   |
| Montage     | Soundtrack             | 0h45   |
| Montage     | Outro                  | 0h45   |
| **Montage – total** |                | **9h40**|
| **⏱️ Total global** |                | **30h40**|

## Licence

Licence : [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
