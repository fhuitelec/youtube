# Secure your FastAPI with OAuth2 & RBAC

> [!important]
> 🇫🇷 La version française est disponible ici ➡️ [link](./YOUTUBE.fr.md).

- ▶️ [YouTube Video](https://www.youtube.com/watch?v=CBLiSCD6v0E)
- 📚 [YouTube & Transparency](../../README.en.md)

---

- [Use of AI](#use-of-ai)
- [Code \& Tools](#code--tools)
  - [Source Code](#source-code)
  - [Production Tools](#production-tools)
  - [Coding Tools](#coding-tools)
- [Inspirations \& References](#inspirations--references)
  - [Sources](#sources)
- [Time Spent](#time-spent)
- [Self-Review](#self-review)
- [License](#license)

---

## Use of AI

👉 For this video, **AI had a very low footprint**.

- I used **ChatGPT (GPT-5)** to:
  - help me find the video title and thumbnail
  - generate the structure for the intro and outro scripts
  - generate the OAuth2 "Authorization code" flow Mermaid diagram
- I used **GitHub Copilot (GPT-4.1 Copilot)** to:
  - occasionally autocomplete some code (visible in the video)

---

## Code & Tools

### Source Code

- **library-api**: [fhuitelec/library-api](https://github.com/fhuitelec/library-api)

### Production Tools

- [Screen Studio](https://screen.studio/) (screen recording)
- [Slidev](https://sli.dev/) (slides)
- [Canva](https://www.canva.com/) (thumbnail)
- [Final Cut Pro](https://www.apple.com/final-cut-pro/) (video editing)
- [Envato](https://elements.envato.com/) (transitions, titles & motion assets)
- [Pexels](https://www.pexels.com) (B-roll)
- [Epidemic Sound](https://www.epidemicsound.com/) (soundtrack)

### Coding Tools

- [JetBrains PyCharm Pro](https://www.jetbrains.com/pycharm/) (IDE)
- [Auth0](https://auth0.com/) (identity provider)
  - ⚠️ No commercial collaboration
- [Bruno](https://www.usebruno.com/) (API-oriented HTTP client)
- [jwt.io](https://www.jwt.io/) (JWT inspection)
- [Mermaid](https://mermaid.js.org/) (diagram as code & visualization)

---

## Inspirations & References

In this video — and in the entire series — I only draw from my own experience, not existing tutorials.

### Sources

The main references here are the tools and standards themselves:

- [FastAPI](https://fastapi.tiangolo.com/)
- [OAuth2](https://oauth.net/2/)
- JWT: [standard](https://datatracker.ietf.org/doc/html/rfc7519) & [jwt.io](https://www.jwt.io/introduction#what-is-json-web-token)

---

## Time Spent

In addition to the time for this episode (detailed below), I spent **~8h** researching the overall video series direction.

| Category                 | Task                 | Time      |
| ------------------------- | -------------------- | ---------- |
| **Preparation**           | Structuring          | 1h30       |
|                           | Code preparation     | 13h30      |
|                           | Script               | 8h30       |
|                           | Slides               | 9h45       |
|                           | Title & Thumbnail    | 30m        |
| **Preparation – total**   |                      | **33h45**  |
| **Filming – total**       |                      | **3h45**   |
| **Editing**               | Editing              | 2h30       |
|                           | Review / Selection   | 15m        |
|                           | Titling              | 15m        |
|                           | B-roll               | 1h         |
|                           | Transitions          | 1h15       |
|                           | SFX                  | 15m        |
|                           | Soundtrack           | 15m        |
| **Editing – total**       |                      | **5h45**   |
| **Proofreading**          |                      | 45m        |
| **Publishing**            |                      | 15m        |
| **Total (episode)**       |                      | **44h25**  |

---

## Self-Review

- I initially wanted to fit everything into 15 minutes — impossible to include both theory and practice, even with tight editing
- The hands-on part ended up being very guided — more “explained code” than “code with me”
- I skipped several deeper OAuth2 topics:
  - true delegated authorization using scopes
  - reasoning around access token lifespan
  - user sessions and refresh tokens
  - sensitive actions with short token validity
  - invalidation and trade-offs
- I also approached this episode poorly at first:
  - I created way too much material before realizing it was too dense
  - I eventually had to cut 40–50% of what I prepared to make it fit the format

---

## License

License: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
