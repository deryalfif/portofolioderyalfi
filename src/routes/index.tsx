import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deryalfi Fathudin — Media Analyst | Data, ML, Insight" },
      {
        name: "description",
        content:
          "Media Analyst turning large-scale media data into business decisions. Sentiment, topics, monitoring — Python · SQL · Power BI · NLP.",
      },
      { property: "og:title", content: "Deryalfi Fathudin — Media Analyst" },
      {
        property: "og:description",
        content:
          "Turning media noise into decisions. Selected work in sentiment, clustering, monitoring, and analytics dashboards.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const marqueeItems = [
  "Python", "SQL", "Power BI", "IndoBERT", "BERTopic", "Airflow", "dbt",
  "PostgreSQL", "FastAPI", "scikit-learn", "PyTorch", "Great Expectations",
  "UMAP", "HDBSCAN", "Pandas", "NumPy", "Sentiment", "Clustering", "NLP",
];

const expertise = [
  {
    title: "Media Analytics",
    body: "Monitoring narratives, sentiment shifts, and topic momentum across several of sources in near real-time.",
    items: ["Media Monitoring", "Sentiment Analysis", "Topic Clustering"],
  },
  {
    title: "Data Science",
    body: "Practical ML for messy text — fine-tuned IndoBERT, BERTopic pipelines, and feedback loops that keep models honest.",
    items: ["NLP", "Classification", "Active Learning"],
  },
  {
    title: "Data Engineering",
    body: "Building and optimizing data pipelines, backend integrations, and automated workflows to ensure reliable data accessibility.",
    items: ["PYTHON", "\n", "Postgres"],
  },
  {
    title: "Data Validation",
    body: "Ensuring data quality, sentiment accuracy, and classification consistency across large-scale datasets for analytics and machine learning.",
    items: ["MS. EXCEL", "GOOGLE SHEETS", "CONSISTENCY"],
  },
];

const timeline = [
  { year: "2025 — Now", role: "Media Analyst", org: "PT Kurasi Media Nusantara",
    note: "Lead media intelligence — sentiment, topic clustering, executive reporting." },
  { year: "2024", role: "Jr. Data Engineer", org: "PT Kurasi Media Nusantara",
    note: "Built the real-time monitoring pipeline (sub-15min latency) and validation framework." },
  { year: "2023", role: "Jr. Data Scientist", org: "Earlier engagement",
    note: "Shipped first IndoBERT sentiment classifier and BERTopic clustering for 1.2M articles." },
  { year: "2022", role: "Data Validator", org: "Earlier engagement",
    note: "Started in data quality — learned that good data is a contract, not a checkbox." },
];

const skills = [
  { group: "Languages", items: ["Python", "SQL", "DAX"] },
  { group: "ML / NLP", items: ["PyTorch", "scikit-learn", "Transformers", "BERTopic", "UMAP", "HDBSCAN"] },
  { group: "Data Eng.", items: ["Airflow", "dbt", "PostgreSQL", "Great Expectations", "Docker"] },
  { group: "Viz / BI", items: ["Power BI", "DAX", "Excel"] },
  { group: "Domain", items: ["Media Monitoring", "Sentiment", "Topic Modeling", "Reporting"] },
];

const certs = [
  "Data Analyst — Coursera",
  "Microsoft Power BI Data Analyst",
  "Machine Learning Specialization",
  "SQL for Data Analysis",
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pt-10 pb-14 sm:px-8 sm:pt-16 sm:pb-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Headline tile */}
          <div className="tile relative md:col-span-8 md:row-span-2 md:p-10 lg:p-12">
            <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Media Analyst · Bandung, ID
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-tight">
              Turning media{" "}
              <span className="relative whitespace-nowrap">
                noise
                <span className="absolute inset-x-0 -bottom-1 h-3 bg-[var(--yellow)]/80" style={{ zIndex: -1 }} />
              </span>{" "}
              into decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm Deryalfi — a Media Analyst engineering clarity from sentiment, topics and
              trends across millions of articles, posts and conversations. I lean on data
              science and engineering principles, but I'm here to ship insight, not models.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                See selected work <span aria-hidden>→</span>
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition hover:bg-secondary"
              >
                Download CV
              </a>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Open to senior analyst & media intelligence roles
            </div>
          </div>

          {/* Portrait monogram tile */}
          <div className="tile relative overflow-hidden bg-foreground text-background md:col-span-4 md:row-span-2 md:p-0">
            <div className="grid h-full min-h-[280px] place-items-center p-8">
              <div className="text-center">
                <div className="mx-auto grid h-28 w-28 place-items-center rounded-2xl bg-[var(--yellow)] font-display text-5xl font-bold text-foreground">
                  DF
                </div>
                <p className="mono mt-6 text-[10px] uppercase tracking-[0.3em] text-background/60">
                  Deryalfi Fathudin
                </p>
                <p className="mt-2 font-display text-lg font-medium">Media · Data · Decisions</p>
              </div>
            </div>
          </div>

          {/* Micro stats */}
          <StatTile label="Now @" value="Kurasi Media" />
          <StatTile label="Years in data" value="1+" />
          <StatTile label="Media items analyzed" value="5M+" />
          <StatTile label="Primary stack" value="Py · SQL · BI" />
        </div>
      </section>

      {/* MARQUEE */}
      <section aria-hidden className="overflow-hidden border-y border-border bg-foreground text-background">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mono mx-6 text-xs uppercase tracking-[0.2em] text-background/70">
              {item} <span className="ml-6 text-[var(--yellow)]">/</span>
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeader eyebrow="01 / About" title="From Sharia Economic Law to media analytics — on purpose." />
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="tile md:col-span-7 md:p-10">
            <p className="text-lg leading-relaxed text-foreground/85">
              I started in <span className="underline decoration-[var(--yellow)] decoration-4 underline-offset-4">data validation</span>,
              learning that "good data" is a contract you keep with the next person down the pipe. From there I moved into
              data science and engineering, and today I work as Media Analytics.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {"\n"}
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeader eyebrow="02 / Expertise" title="Four disciplines, one workflow." />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((e) => (
            <div key={e.title} className="tile tile-hover h-full">
              <h3 className="font-display text-xl font-semibold tracking-tight">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {e.items.map((i) => (
                  <span key={i} className="mono rounded-full border border-border px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeader eyebrow="03 / Selected work" title="Five projects where the metric moved." />
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[minmax(220px,auto)]">
          {/* Big card */}
          <ProjectCard project={projects[0]} className="md:col-span-8 md:row-span-2" big />
          <ProjectCard project={projects[1]} className="md:col-span-4" />
          <ProjectCard project={projects[2]} className="md:col-span-4" />
          <ProjectCard project={projects[3]} className="md:col-span-6" />
          <ProjectCard project={projects[4]} className="md:col-span-6" />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeader eyebrow="04 / Career" title="A coherent trajectory through data." />
        <ol className="mt-10 relative border-l border-border pl-8">
          {timeline.map((t) => (
            <li key={t.year + t.role} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[37px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
              </span>
              <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.year}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">{t.role}</h3>
              <p className="text-sm text-foreground/70">{t.org}</p>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{t.note}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeader eyebrow="05 / Skills" title="The toolkit, organized." />
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {skills.map((s) => (
            <div key={s.group} className="tile">
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.group}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-foreground" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CERTS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeader eyebrow="06 / Certifications" title="Ongoing study, not collected badges." />
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <div key={c} className="tile flex items-start gap-3">
              <span className="mono mt-1 text-[10px] text-[var(--yellow)]">●</span>
              <span className="text-sm">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeader eyebrow="07 / Testimonials" title="Words from collaborators — coming soon." />
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[1, 2].map((i) => (
            <div key={i} className="tile border-dashed p-10">
              <p className="font-display text-2xl leading-snug text-muted-foreground">
                "Recommendation forthcoming."
              </p>
              <p className="mono mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Reserved · 2026
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="tile bg-foreground text-background md:col-span-7 md:p-12">
            <p className="mono text-xs uppercase tracking-[0.2em] text-background/60">08 / Contact</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Have a media or data
              <br />
              problem worth solving?
            </h2>
            <p className="mt-5 max-w-md text-background/70">
              I'm open to senior analyst, media intelligence and applied-NLP roles — plus selective
              freelance engagements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:deryalfi@example.com"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] px-5 py-3 text-sm font-medium text-foreground hover:opacity-90"
              >
                Email me →
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-background/30 px-5 py-3 text-sm font-medium text-background hover:bg-background/10"
              >
                Contact form
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:col-span-5">
            <ContactLink label="Email" value="deryalfi@example.com" href="mailto:deryalfi@example.com" />
            <ContactLink label="LinkedIn" value="/in/deryalfi" href="https://linkedin.com/" />
            <ContactLink label="GitHub" value="@deryalfi" href="https://github.com/" />
            <ContactLink label="Resume" value="Download PDF" href="/resume.pdf" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:flex-wrap sm:justify-between">
      <div className="min-w-0">
        <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="tile md:col-span-3">
      <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  );
}

function Principle({ n, text }: { n: string; text: string }) {
  return (
    <li className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4">
      <span className="mono text-xs text-muted-foreground">{n}</span>
      <span>{text}</span>
    </li>
  );
}

function ProjectCard({
  project,
  className = "",
  big = false,
}: {
  project: (typeof projects)[number];
  className?: string;
  big?: boolean;
}) {
  const isAccent = project.accent === "yellow" && big;
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className={`tile tile-hover group flex h-full flex-col justify-between ${
        isAccent ? "bg-[var(--yellow)]" : ""
      } ${className}`}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">
            {project.category}
          </span>
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            {project.year}
          </span>
        </div>
        <h3
          className={`mt-5 font-display font-semibold tracking-tight ${
            big ? "text-3xl sm:text-4xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className={`mt-3 leading-relaxed ${big ? "text-base text-foreground/80" : "text-sm text-muted-foreground"}`}>
          {project.tagline}
        </p>
      </div>
      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {project.metrics.slice(0, big ? 3 : 2).map((m) => (
            <span
              key={m.label}
              className="mono rounded-full border border-foreground/20 bg-background/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em]"
            >
              <span className="text-foreground/60">{m.label}</span>{" "}
              <span className="font-semibold">{m.value}</span>
            </span>
          ))}
        </div>
        <p className="mono mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
          Read case <span className="transition group-hover:translate-x-1">→</span>
        </p>
      </div>
    </Link>
  );
}

function ContactLink({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a href={href} className="tile tile-hover flex items-center justify-between">
      <div>
        <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
        <p className="mt-1 font-display text-lg">{value}</p>
      </div>
      <span aria-hidden className="text-xl">→</span>
    </a>
  );
}
