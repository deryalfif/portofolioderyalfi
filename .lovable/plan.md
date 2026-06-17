
# Deryalfi Fathudin — Personal Portfolio PRD & Build Plan

A Swiss-design, bento-grid personal portfolio positioning Deryalfi as a Media Analyst who turns large-scale media data into business insight. Built on the existing TanStack Start + Tailwind v4 stack, no backend required for v1.

---

## 1. Product Vision

A calm, intelligent, high-signal portfolio that makes a recruiter say "this person thinks clearly" within 5 seconds. Swiss typography discipline + bento modularity + one decisive accent (electric yellow) on a black/warm-white canvas. Every section earns its place by answering: *what business problem did Deryalfi solve, and how?*

**Brand promise (one line):** *Turning media noise into decisions.*

---

## 2. Target Personas

1. **Rina — Tech Recruiter.** Scans for stack, role fit, years. Needs: skills grid, role timeline, downloadable CV, contact in <2 clicks.
2. **Adi — Head of Analytics / Hiring Manager.** Evaluates depth. Needs: case studies with metrics, methodology, tool reasoning.
3. **Sarah — Media Intelligence Lead.** Cares about domain (sentiment, clustering, monitoring). Needs: domain-specific project proof.
4. **Freelance Client / Agency.** Needs: clear services, ease of contact, credibility signals.

---

## 3. Information Architecture & Sitemap

Single-page primary experience with deep-link routes for case studies.

```
/                 Home (all bento sections, anchor scroll)
/work/$slug       Individual case study (5 entries)
/about            Long-form bio & journey
/contact          Contact form + channels
/resume.pdf       Static download
/sitemap.xml      SEO
```

Top nav: Work · About · Skills · Contact · [Download CV button]

---

## 4. Homepage Section Order & Wireframe

```
[ NAV: logo "DF" — Work About Skills Contact — CV↓ ]

[ HERO BENTO — 12 col ]
  ┌─────────────────────────┬───────────────┐
  │ Headline (8 col)         │ Portrait (4)  │
  │ Sub + 2 CTAs             │ + status dot  │
  ├──────────┬──────────┬────┴───────────────┤
  │ Now @    │ Location │ Years in data      │
  │ Kurasi   │ Bandung  │ 4+                 │
  └──────────┴──────────┴────────────────────┘

[ MARQUEE: Python · SQL · Power BI · NLP · BERT · Airflow · dbt ... ]

[ ABOUT BENTO ]  short bio + "from law to data" narrative card

[ EXPERTISE 4-TILE ]
  Media Analytics │ Data Science │ Data Engineering │ Data Quality

[ FEATURED PROJECTS — bento, 5 cards, asymmetric ]
  big card = hero case study; 4 smaller

[ CAREER TIMELINE — vertical, left rail w/ years ]

[ SKILLS MATRIX ] languages | libs | viz | data eng | domain

[ TOOLS GRID ] logo monochrome tiles

[ CERTIFICATIONS strip ]

[ TESTIMONIALS placeholder — 2 slots "Coming soon" ]

[ CONTACT BENTO ] email · linkedin · github · form · CV download

[ FOOTER ] © · built with · last updated
```

### Bento Grid Spec

- **Desktop ≥1024px:** 12-col, 24px gutter, 96px max card radius=16px. Tile sizes: 4×2, 6×2, 8×3, 12×1.
- **Tablet 640–1023px:** 8-col, 20px gutter. Hero portrait drops below headline. Tiles 4×2, 8×2.
- **Mobile <640px:** 4-col, 16px gutter, single-column stack with sticky CTA bar.
- Tiles share consistent inner padding (24/32/40px scale) and one accent rule: max **one yellow tile per viewport**.

---

## 5. Hero Content

- **Headline:** *Turning media noise into decisions.*
- **Sub:** I'm Deryalfi — a Media Analyst engineering clarity from sentiment, topics, and trends across millions of articles, posts, and conversations.
- **CTAs:** `See selected work →` (primary, yellow) · `Download CV` (ghost)
- **Micro-stats tiles:** Now @ Kurasi Media Nusantara · 4+ yrs in data · 5M+ media items analyzed · Python / SQL / Power BI
- **Status chip:** 🟢 Open to senior analyst & media intelligence roles

---

## 6. Project Showcase

5 featured projects, each with card + dedicated `/work/$slug` route.

**Card schema:** cover swatch · category tag · title · 1-line outcome · 3 metric chips · stack chips · `Read case →`

**Case study schema:**
1. Context (client/dataset size/timeframe)
2. Problem
3. Approach (methodology, models, pipeline diagram)
4. Stack
5. Results (quant metrics, business impact)
6. Reflection / what I'd do next

**Seed projects:**
1. Sentiment Engine for National Brand Monitoring — IndoBERT fine-tune, +18% accuracy vs baseline
2. Topic Clustering of 1.2M Articles — BERTopic + UMAP, 42 themes surfaced
3. Real-time Media Monitoring Pipeline — Airflow + Postgres, sub-15min latency
4. Data Validation Framework — Great Expectations, 99.4% data quality
5. Executive Power BI Dashboard — single source of truth for media KPIs

---

## 7. Personal Branding Strategy

- **Voice:** clear, confident, plain. No jargon flexing. Numbers > adjectives.
- **Visual signature:** black/warm-white + electric-yellow underline accent on key phrases; monospaced micro-labels (JetBrains Mono) for metadata.
- **Differentiator narrative:** *"From Sharia Economic Law to Media Analytics"* — frame the unusual background as evidence of structured reasoning + curiosity, not a gap.
- **Proof stack:** metrics, named tools, named employers, downloadable CV, GitHub link.

---

## 8. UX Journey & Psychology

| Stage | Section | Psychological goal |
|---|---|---|
| Land | Hero | Pattern interrupt — Swiss restraint signals seriousness |
| Trust | About + Now-working-at strip | Social proof via current employer + tenure |
| Validate | Expertise tiles + Skills matrix | Competence cues, scannable |
| Explore | Projects + case studies | Depth on demand — metrics deliver dopamine |
| Reassure | Timeline + Certs | Coherent trajectory, not random |
| Convert | Contact bento | Low-friction: email copy-to-clipboard, CV one-click |

---

## 9. Design System

**Tokens (src/styles.css @theme):**
- `--color-ink: #0F0F0F` · `--color-paper: #FAFAFA` · `--color-accent: #FFD60A`
- Grays: `--color-mute-{50,100,200,400,600,800}`
- `--font-display: "Space Grotesk"` · `--font-body: "Inter"` · `--font-mono: "JetBrains Mono"`
- Radii: 12 / 16 / 24. Shadows: subtle, single elevation level.
- Motion: 200ms ease-out only; no parallax, no scroll-jacking. One hero text reveal.

**Components:** Nav, BentoCard (variants: default/accent/mono/portrait), MetricChip, TagChip, TimelineItem, ProjectCard, CaseStudyLayout, ContactCard, Footer.

**Loading web fonts:** `<link>` tags in `src/routes/__root.tsx` (per Tailwind v4 rule), referenced in `@theme`.

---

## 10. Responsive Strategy

Mobile-first. Sticky bottom CTA bar on mobile (`Email · CV`). Bento collapses to single column; portrait tile becomes 16:9 banner. Use `grid-cols-[minmax(0,1fr)_auto]` pattern for hero header rows.

---

## 11. SEO

- **Title:** `Deryalfi Fathudin — Media Analyst | Data, ML, Insight`
- **Meta:** `Media Analyst turning large-scale media data into business decisions. Python · SQL · Power BI · NLP. Based in Bandung, Indonesia.`
- **OG:** generated 1200×630 with name + tagline (later); placeholder until then.
- **JSON-LD:** `Person` schema (name, jobTitle, worksFor, sameAs links, alumniOf), plus `WebSite`. Each case study uses `CreativeWork`.
- **Keywords (intent-mapped):** media analyst, sentiment analysis Indonesia, topic clustering, media monitoring analytics, NLP portfolio, data analyst Bandung, IndoBERT, BERTopic, Power BI media dashboard.
- `head()` per route — title/description/canonical/og:url self-referencing relative paths. Sitemap server route covers `/`, `/about`, `/contact`, `/work/$slug`.

---

## 12. Tech Implementation (Lovable / TanStack Start)

- Routes: `index.tsx`, `about.tsx`, `contact.tsx`, `work.index.tsx`, `work.$slug.tsx`, `sitemap[.]xml.ts`.
- Projects stored as typed array in `src/content/projects.ts` (no DB for v1).
- Tailwind v4 tokens in `src/styles.css`; fonts via `<link>` in `__root.tsx`.
- Animation: framer-motion for hero reveal + card hover lift only.
- Contact form: `mailto:` for v1; Lovable Cloud + email later.
- No backend in v1 → no Cloud activation needed.

---

## 13. Roadmap

- **v1 (this build):** Static portfolio, 5 case studies, CV download, mailto contact.
- **v1.1:** Real OG image, testimonials, blog/notes route (MDX).
- **v2:** Lovable Cloud — contact form persistence, project view analytics, admin to add case studies.
- **v2.1:** Indonesian/English toggle, RSS for notes.

---

## 14. Open Questions (please confirm before build)

1. Do you have a **headshot/portrait** to use, or should I use a typographic monogram tile in the hero?
2. Real **metrics** for the 5 seed projects, or proceed with the realistic placeholders above (clearly marked as samples for now)?
3. **Contact channels** to publish: email, LinkedIn URL, GitHub URL, WhatsApp?
4. Provide a **CV PDF** to wire to `/resume.pdf`, or use a "Coming soon" state on the download button?

Once confirmed I'll switch to build mode and ship the homepage + case study route + sitemap end-to-end in one pass.
