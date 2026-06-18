import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-background font-display text-sm font-bold">
            DF
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
            Deryalfi Fathudin
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          <a href="/#work" className="text-muted-foreground hover:text-foreground">Work</a>
          <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
          <a href="/#skills" className="text-muted-foreground hover:text-foreground">Skills</a>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/CV_Deryalfi_Fathudin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition hover:opacity-90 sm:text-sm"
          >
            <span className="mono">CV</span>
            <span aria-hidden>↓</span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="border-t border-border/60 bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            <a href="/#work" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">Work</a>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">About</Link>
            <a href="/#skills" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">Skills</a>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">Contact</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Built in Bandung · {new Date().getFullYear()}
          </p>
          <p className="mt-2 max-w-md font-display text-2xl leading-tight tracking-tight">
            Got a media data problem worth solving?{" "}
            <Link to="/contact" className="underline decoration-[var(--yellow)] decoration-4 underline-offset-4">
              Let's talk.
            </Link>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <a href="mailto:deryalfif@gmail.com" className="hover:text-foreground">Email</a>
          <a href="https://www.linkedin.com/in/deryalfi-fathudin/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href="https://github.com/deryalfif" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
