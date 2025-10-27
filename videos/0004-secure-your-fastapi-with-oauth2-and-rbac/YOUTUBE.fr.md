# Protège ta FastAPI avec OAuth2 & RBAC

> [!important]
> 🇬🇧 The english version is available here ➡️ [link](./YOUTUBE.en.md).

- ▶️ [Vidéo YouTube](https://www.youtube.com/watch?v=CBLiSCD6v0E)
- 📚 [YouTube & transparence](../../README.fr.md)

---

- [Utilisation de l’IA](#utilisation-de-lia)
- [Code \& outils](#code--outils)
  - [Code source](#code-source)
  - [Outils de production](#outils-de-production)
  - [Outils de code](#outils-de-code)
- [Inspirations \& références](#inspirations--références)
  - [Sources](#sources)
- [Temps passé](#temps-passé)
- [Auto-critique](#auto-critique)
- [Licence](#licence)

---

## Utilisation de l’IA

👉 Dans le cadre de cette vidéo, **l’IA a une empreinte très faible**.

- J’ai utilisé **ChatGPT (GPT-5)** pour :
  - m'aider à trouver le titre de la vidéo et la miniature
  - générer une structure de script de l'introduction et la conclusion
  - créer le diagramme Mermaid pour le flow "Authorization code" OAuth2
- J'ai utilisé **GitHub Copilot (GPT-4.1 Copilot)** pour :
  - m'aider à de rares moments à autocompléter du code (visible dans la vidéo)

---

## Code & outils

### Code source

- **library-api** : [fhuitelec/library-api](https://github.com/fhuitelec/library-api)

### Outils de production

- [Screen Studio](https://screen.studio/) (screen recording)
- [Slidev](https://sli.dev/) (slides)
- [Canva](https://www.canva.com/) (miniature)
- [Final Cut Pro](https://www.apple.com/fr/final-cut-pro/) (outil de montage)
- [Envato](https://elements.envato.com/) (transition, titres & éléments de montage)
- [Pexels](www.pexels.com) (B-roll)
- [Epidemic Sound](https://www.epidemicsound.com/) (bande son)

### Outils de code

- [JetBrains PyCharm Pro](https://www.jetbrains.com/fr-fr/pycharm/) (IDE)
- [Auth0](https://auth0.com/) (fournisseur d'identité)
  - ⚠️ Aucune collaboration commerciale
- [Bruno](https://www.usebruno.com/) (client HTTP orienté API)
- [jwt.io](https://www.jwt.io/) (introspection de JWT)
- [Mermaid](https://mermaid.js.org/) (diagram as code & visualisation)

---

## Inspirations & références

Dans cette vidéo et la série entière, d'ailleurs, je ne m'inspire que de mon expérience et pas de contenu existant.

### Sources

Les sources, ici, sont principalement les outils utilisés :

- [FastAPI](https://fastapi.tiangolo.com/)
- [OAuth2](https://oauth.net/2/)
- JWT: [standard](https://datatracker.ietf.org/doc/html/rfc7519) & [jwt.io](https://www.jwt.io/introduction#what-is-json-web-token)

---

## Temps passé

En plus du temps passé pour l'épisode décrit ci-dessous, j'ai passé **~8h** de recherche sur l'intégralité de la série de vidéos à venir.

| Catégorie                  | Tâche               | Temps      |
| -------------------------- | ------------------- | ---------- |
| **Préparation**            | Structuration       | 1h30       |
|                            | Préparation du code | 13h30      |
|                            | Script              | 8h30       |
|                            | Slides              | 9h45       |
|                            | Titre & Thumbnail   | 30m        |
| **Préparation – total**    |                     | **33h45**  |
| **Tournage – total**       |                     | **3h45**   |
| **Montage**                | Découpage           | 2h30       |
|                            | Repérage            | 15m        |
|                            | Titrage             | 15m        |
|                            | B-roll              | 1h         |
|                            | Transitions         | 1h15       |
|                            | SFX                 | 15m        |
|                            | Soundtrack          | 15m        |
| **Montage – total**        |                     | **5h45**   |
| **Relecture**              |                     | 45m        |
| **Publication**            |                     | 15m        |
| **Total global (épisode)** |                     | **44h25** |

## Auto-critique

- initialement, je voulais faire tenir ça sur 15 minutes mais impossible de faire tenir la théorie plus la pratique (même en accéléré)
- la partie pratique est très - trop ? - guidée, on n'est plus sur un "code with me" mais sur une explication de code
- il y a pas mal d'éléments de fond que je n'ai pas abordé sur OAuth2 :
  - vraie délégation d'autorisation avec les scopes
  - réfléxion de fond sur la durée de validité de l'access token
  - session utilisateur et refresh tokens
  - action sensible & privilège élevé avec une validité maximale courte
  - invalidation et tradeoff
  - etc.
- je m'y suis très mal pris sur la conception de cet épisode :
  - j'ai créé énormément de contenu avant de me rendre que c'était trop dense
  - j'ai dû, finalement, "jeter" 40 à 50% de la préparation car ça ne rentrait pas dans le format

## Licence

Licence : [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
