# The End of DevOps? Here’s What’s Replacing It…

> [!important]
> 🇫🇷 Pour la version française, c'est par ici ➡️ [link](./YOUTUBE.fr.md).

- ▶️ [YouTube Video](https://www.youtube.com/watch?v=VnExltM4yII)
- 📚 [YouTube & transparency](../../README.en.md)

---

- [Use of AI](#use-of-ai)
- [Code \& tools](#code--tools)
- [Inspirations \& references](#inspirations--references)
  - [Main inspiration](#main-inspiration)
  - [Data sources](#data-sources)
- [My cognitive biases](#my-cognitive-biases)
  - [Starting beliefs](#starting-beliefs)
  - [Associated biases](#associated-biases)
- [Statistics \& interpretation](#statistics--interpretation)
  - [Visualizations](#visualizations)
  - [Source niche](#source-niche)
  - [Specific context](#specific-context)
  - [Criticism](#criticism)
- [Self-critique](#self-critique)
- [Time spent](#time-spent)
- [License](#license)


## Use of AI

👉 For this video, **AI played a significant role**.

- I used **Cursor (Claude Sonnet 4)** to:
  - co-create a CLI for competitor analysis to extract precise statistics from adjacent/competing YouTube channels
- I used **ChatGPT (GPT-5)** to:
  - understand the YouTube API for competitor research
  - study market trends (source-backed approach)
  - generate the NodeJS script [devops-labor-market-trends](./code/devops-labor-market-trends/) to pull data from the [Hacker News Algolia API](https://hn.algolia.com/api)
  - help me pick the theme and title of the video from competitor/adjacent YouTube channel statistics
  - generate a draft video script structure
  - refine the video script
- **I did not use AI for**:
  - the overall approach of the video
  - the writing of the first draft of the script

---

## Code & tools

### Source code

- [DevOps labor market trends – HN Who is hiring](./code/devops-labor-market-trends/): NodeJS script used to gather the number of job postings from [Hacker News](https://news.ycombinator.com/) "Who is hiring" threads since 2014
- [Undisclosed]: CLI app for YouTube competitor analysis to find high-potential (“outlier”) video topics

### Production tools

- [Canva](https://www.canva.com/) (thumbnail & motion designs)
- [Final Cut Pro](https://www.apple.com/fr/final-cut-pro/) (editing tool)
- [Envato](https://elements.envato.com/) (transitions, titles & editing elements)
- [Pexels](www.pexels.com) (B-roll)
- [Epidemic Sound](https://www.epidemicsound.com/) (soundtrack)
- [Flourish](https://flourish.studio/) (data visualization)
- [Poke Card Generator](https://www.pokecardgenerator.com/fr) (Pokémon role cards)

---

## Inspirations & references

### Main inspiration

[DevOps Jobs Are Disappearing - Here's Why You Should Celebrate](https://www.youtube.com/watch?v=KW1X9xefE0Q) by [Mischa van den Burg](https://www.youtube.com/@mischavandenburg):

- this was my main source of inspiration for the idea and hook of the video: I largely followed by imitation
- some similarities can be seen in the motion design and a few structural elements
- beyond the hook, I did not draw from the rest of his video and diverge completely after [01:40](https://www.youtube.com/watch?v=VnExltM4yII&t=100s)

### Data sources

- Tech labor market study:
  - [kube.careers](https://kube.careers/)
  - [Hacker News](https://news.ycombinator.com/news) (“Who is Hiring” threads)
- Context on the tech market between 2021 and 2025 via [The Pragmatic Engineer](https://www.pragmaticengineer.com/) (Gergely Orosz)
  - [ZIRP and the end of cheap money](https://newsletter.pragmaticengineer.com/p/zirp) (2024)
  - [What is Old is New Again](https://newsletter.pragmaticengineer.com/p/what-is-old-is-new-again) (2024)
  - [Drop in global SWE openings](https://blog.pragmaticengineer.com/is-there-a-drop-in-software-engineer-job-openings-globally/) (2023)
  - [Software Engineer jobs at a 5-year low](https://blog.pragmaticengineer.com/software-engineer-jobs-five-year-low/) (2025)
- Misc. sources for understanding the impact of the “COVID bubble” (2020–2021)
  - [Elliott Scott HR – Fallout of the Tech Sector Hiring Spree](https://www.elliottscotthr.com/hr-insights/hr-insights-and-trends/the-fallout-of-the-tech-sector-hiring-spree/)  
  - [Business Insider – Tech graduate job market post-layoffs/AI](https://www.businessinsider.com/tech-graduate-job-market-ai-layoffs-2024-10)  
  - [Wall Street Journal – Tech jobs and AI](https://www.wsj.com/tech/tech-jobs-artificial-intelligence-cce22393)  
  - [Bureau of Labor Statistics – JOLTS 2023 report](https://www.bls.gov/opub/mlr/2024/article/job-openings-and-hires-decline-in-2023.htm)  
- Platform engineering and site reliability engineering culture:
  - [Google SRE Workbook](https://sre.google/books/)
  - [Humanitec – definition Platform Engineering](https://humanitec.com/platform-engineering)  
  - [Humanitec – blog “Platform as a Product”](https://humanitec.com/blog/platform-as-a-product-the-evolution-of-devops-and-platform-engineering)  
  - [Humanitec – State of Platform Engineering report](https://humanitec.com/whitepapers/state-of-platform-engineering-report-volume-2)  
  - [The New Stack – Birth and evolution of Platform Engineering](https://thenewstack.io/the-birth-and-continuing-evolution-of-platform-engineering/)  
  - [O’Reilly – Camille Fournier on Platform Engineering](https://www.oreilly.com/radar/platform-engineering-the-next-step-in-operations/)  
  - [Red Hat Developers – What is Platform Engineering](https://developers.redhat.com/articles/2024/05/06/what-platform-engineering-and-why-do-we-need-it)  
  - [Here is Why Platform Engineering May Be a More Lucrative Career Than You Think](https://platformengineering.com/features/here-is-why-platform-engineering-may-be-a-more-lucrative-career-than-you-think/)

---

## My cognitive biases

### Starting beliefs

- The job of “DevOps” is a market “aberration”; it is primarily a culture, not a job title
- The roles and functions behind the “DevOps engineer” label have been fragmenting into several key roles (SRE, Platform, Cloud, Security, Software engineers) since ~2017

### Associated biases

- Confirmation bias: I don’t think I managed to overcome it, it shows in my use of Hacker News data
- Identity bias: I have lived in the ecosystem I describe for 11+ years, so I’m not objective

---

## Statistics & interpretation

### Visualizations

- [1]<a name=visualisation-1></a> [00:03](https://youtu.be/VnExltM4yII?t=3): [DevOps declining - HN - Who is hiring](https://public.flourish.studio/visualisation/24897779/)
- [2]<a name=visualisation-2></a> [00:14](https://youtu.be/VnExltM4yII?t=14): [New roles - HN - Who is hiring](https://public.flourish.studio/visualisation/24898238/)
- [3]<a name=visualisation-3></a> [03:00](https://youtu.be/VnExltM4yII?t=180): [DevOps vs Platform vs SRE - HN - Who is hiring](https://public.flourish.studio/visualisation/24855770/)

### Source niche

The Hacker News “Who is Hiring” job postings are not representative of:

- the broader English-speaking tech job market
- and even less of the French market

### Specific context

The tech job market has been disrupted since ~2020:
  - during the Covid crisis, the market experienced extraordinary growth
  - between 2022 and 2024, the market went through a correction with significant decline (waves of layoffs, hiring freezes, etc.)
  - since 2025, some balance is starting to return

### Criticism

This means that the drop in *job postings* for the role of “DevOps engineer” [[1](#visualisation-1)] cannot only be attributed to the trend I try to highlight.  

Due to the shrinking sample size caused by market conditions, it’s even possible that graphs [[2](#visualisation-2)] & [[3](#visualisation-3)] are driven primarily by those market conditions rather than the trend I attempt to show in the video.

---

## Self-critique

- the subject is covered very superficially; 7 minutes is short
- the analogy with the webmaster role is somewhat relatable, but feels a bit shaky

---

## Time spent

| Category    | Task                  | Time   |
|-------------|-----------------------|--------|
| Prep        | Research              | 8h     |
| Prep        | Scripting             | 6h     |
| Prep        | YouTube learning      | 4h     |
| Prep        | Title & Thumbnail     | 1h30   |
| **Prep – total** |                   | **19h30**|
| **Filming – total** |                | **1h30**|
| Editing     | Rough cut             | 1h40   |
| Editing     | B-roll creation       | 5h30   |
| Editing     | Transitions           | 0h30   |
| Editing     | SFX                   | 0h30   |
| Editing     | Soundtrack            | 0h45   |
| Editing     | Outro                 | 0h45   |
| **Editing – total** |                | **9h40**|
| **⏱️ Overall total** |               | **30h40**|

---

## License

License: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
