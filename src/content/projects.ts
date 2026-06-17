export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: "Sentiment Analysis" | "Topic Clustering" | "Media Monitoring" | "Data Engineering" | "Dashboard";
  year: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  context: string;
  problem: string;
  approach: string[];
  results: string[];
  reflection: string;
  accent?: "yellow" | "ink" | "paper";
};

export const projects: Project[] = [
  {
    slug: "sentiment-engine-national-brand",
    title: "Sentiment Engine for National Brand Monitoring",
    tagline: "An IndoBERT-based sentiment classifier purpose-built for Indonesian media chatter.",
    category: "Sentiment Analysis",
    year: "2025",
    accent: "yellow",
    metrics: [
      { label: "Accuracy uplift", value: "+18%" },
      { label: "Articles / day", value: "120K" },
      { label: "Labels", value: "5-class" },
    ],
    stack: ["Python", "PyTorch", "IndoBERT", "FastAPI", "PostgreSQL"],
    context:
      "A national consumer brand needed a sentiment signal that actually understood Indonesian — including informal phrasing, sarcasm cues, and code-mixing — across 120K+ daily news, blog and social mentions.",
    problem:
      "Off-the-shelf multilingual models flattened nuance, producing noisy positive/negative splits that PR leadership could not act on.",
    approach: [
      "Curated and hand-labeled a 24K-row gold dataset spanning news, Twitter/X, and TikTok captions.",
      "Fine-tuned IndoBERT with a 5-class head (very negative → very positive).",
      "Wrapped the model in a FastAPI service with batched inference and a Postgres-backed feedback loop.",
      "Shipped weekly drift reports to spot label decay before it hit dashboards.",
    ],
    results: [
      "Macro-F1 lifted from 0.61 → 0.79 vs. the prior multilingual baseline.",
      "Reduced analyst manual review hours by ~62% per week.",
      "Enabled the PR team to detect a brewing crisis ~6 hours before it trended.",
    ],
    reflection:
      "Next iteration: switch to active learning so the team labels only the model's uncertain edge cases — cutting labeling cost by another half.",
  },
  {
    slug: "topic-clustering-bertopic",
    title: "Topic Clustering of 1.2M Articles",
    tagline: "BERTopic + UMAP surfaced the 42 conversations that actually mattered to leadership.",
    category: "Topic Clustering",
    year: "2024",
    metrics: [
      { label: "Articles", value: "1.2M" },
      { label: "Themes surfaced", value: "42" },
      { label: "Coverage", value: "94%" },
    ],
    stack: ["Python", "BERTopic", "UMAP", "HDBSCAN", "sentence-transformers"],
    context:
      "Quarterly strategy reviews were drowning in ad-hoc keyword reports. Leadership wanted to see the conversation, not the keywords.",
    problem:
      "Keyword-based clustering produced overlapping, low-signal buckets and missed emerging narratives entirely.",
    approach: [
      "Embedded headlines + ledes using multilingual sentence-transformers.",
      "Reduced dimensionality with UMAP, clustered with HDBSCAN via BERTopic.",
      "Built a topic-merging pass with cosine-similarity thresholds tuned with domain reviewers.",
      "Delivered an interactive topic explorer in Power BI.",
    ],
    results: [
      "Collapsed 380 noisy keyword buckets into 42 coherent themes covering 94% of corpus mass.",
      "Identified 3 emerging narratives weeks ahead of trade press.",
      "Cut quarterly review prep from 5 days → 1 day.",
    ],
    reflection:
      "BERTopic gave us speed; the leverage came from a tight feedback loop with the domain editors. The model is half the work.",
  },
  {
    slug: "realtime-media-monitoring-pipeline",
    title: "Real-time Media Monitoring Pipeline",
    tagline: "An Airflow + Postgres pipeline that lands fresh media in dashboards in under 15 minutes.",
    category: "Data Engineering",
    year: "2024",
    metrics: [
      { label: "End-to-end latency", value: "<15 min" },
      { label: "Sources", value: "180+" },
      { label: "Uptime", value: "99.7%" },
    ],
    stack: ["Airflow", "Python", "PostgreSQL", "dbt", "Docker"],
    context:
      "Crisis communications can't wait on overnight batches. The team needed a near-real-time signal across 180+ sources.",
    problem:
      "Existing scraping ran once a day, with brittle scripts and no observability — failures often surfaced via Slack panic, not alerts.",
    approach: [
      "Designed a producer/worker architecture orchestrated by Airflow with per-source SLAs.",
      "Standardized payloads through a dbt staging layer with explicit contracts.",
      "Added structured logging, Slack alerts and a per-source health dashboard.",
    ],
    results: [
      "Latency dropped from ~22 hours → under 15 minutes.",
      "Source failures auto-recovered in 78% of cases without analyst intervention.",
      "Zero missed news cycles in the first 90 days post-launch.",
    ],
    reflection:
      "The win wasn't speed — it was trust. Reliable freshness is what made the dashboard the first tab people opened.",
  },
  {
    slug: "data-validation-framework",
    title: "Data Validation Framework",
    tagline: "Great Expectations checks that lifted overall pipeline data quality to 99.4%.",
    category: "Data Engineering",
    year: "2023",
    metrics: [
      { label: "Data quality", value: "99.4%" },
      { label: "Checks", value: "240+" },
      { label: "Bad rows blocked / mo", value: "~18K" },
    ],
    stack: ["Python", "Great Expectations", "PostgreSQL", "GitHub Actions"],
    context:
      "Downstream dashboards were silently consuming corrupt rows — duplicated articles, malformed timestamps, unresolved entities.",
    problem:
      "There was no shared definition of 'good data' between engineering and analytics. Bugs surfaced in client meetings.",
    approach: [
      "Co-designed expectations with analysts (the people who'd feel the failure).",
      "Wired Great Expectations into CI and into nightly pipeline runs.",
      "Built a triage queue for rejected rows so nothing was silently dropped.",
    ],
    results: [
      "Lifted measured data quality from 91.2% → 99.4%.",
      "Blocked ~18K bad rows per month from ever reaching dashboards.",
      "Cut analytics rework tickets by roughly 70%.",
    ],
    reflection:
      "Data quality is a product, not a script. Ownership beats automation.",
  },
  {
    slug: "executive-power-bi-dashboard",
    title: "Executive Power BI Dashboard",
    tagline: "One screen, one truth — the daily standup of media performance for the leadership team.",
    category: "Dashboard",
    year: "2024",
    metrics: [
      { label: "Daily viewers", value: "30+" },
      { label: "KPIs tracked", value: "12" },
      { label: "Load time", value: "<2s" },
    ],
    stack: ["Power BI", "DAX", "SQL", "PostgreSQL"],
    context:
      "Leadership was reconciling four spreadsheets every morning. Each told a slightly different story.",
    problem:
      "No canonical metric definitions. No drill path from headline number to underlying article. Trust was leaking.",
    approach: [
      "Workshopped a metric dictionary with every consumer team.",
      "Built a star-schema semantic model with explicit DAX measures and unit tests.",
      "Designed for the 30-second glance, with drill-throughs for the 5-minute deep dive.",
    ],
    results: [
      "Replaced 4 spreadsheets with 1 source of truth.",
      "Standup time cut from 45 → 12 minutes.",
      "Adopted by 100% of the leadership team within 3 weeks.",
    ],
    reflection:
      "Dashboards live or die on definitions. The DAX was the easy part.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
