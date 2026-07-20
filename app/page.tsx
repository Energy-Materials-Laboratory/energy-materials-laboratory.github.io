import Link from "next/link";
import SiteShell from "./components/SiteShell";
import home from "../content/home.json";
import research from "../content/research.json";
import publications from "../content/publications.json";
import { assetPath } from "../lib/paths";

export default function Home() {
  const selectedPublications = publications.journals.slice(
    home.publicationsSection.startIndex,
    home.publicationsSection.startIndex + home.publicationsSection.count
  );

  return (
    <SiteShell>
      <section className="hero site-width" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{home.hero.eyebrow}</p>
          <h1 id="hero-title">{home.hero.title}</h1>
          <p className="hero-text">{home.hero.description}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href={home.hero.primaryAction.href}>{home.hero.primaryAction.label}</Link>
            <Link className="text-link" href={home.hero.secondaryAction.href}>{home.hero.secondaryAction.label} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div
          className="hero-visual"
          role="img"
          aria-label={home.hero.imageAlt}
          style={{ backgroundImage: `url("${assetPath(home.hero.image)}")` }}
        />
      </section>

      <section className="pillar-strip site-width" aria-label="Research philosophy">
        {home.pillars.map((pillar) => (
          <article key={pillar.index}>
            <span>{pillar.index}</span>
            <h2>{pillar.title}</h2>
            <p>{pillar.description}</p>
          </article>
        ))}
      </section>

      <section className="statement-section site-width">
        <div className="section-index">{home.approach.label}</div>
        <div className="statement-copy">
          <p className="statement-lead">{home.approach.lead}</p>
          <p className="statement-body">{home.approach.body}</p>
        </div>
      </section>

      <section className="research-section site-width">
        <div className="section-heading">
          <div>
            <p className="section-index">{home.researchSection.label}</p>
            <h2>{home.researchSection.titleLine1}<br />{home.researchSection.titleLine2}</h2>
          </div>
          <Link className="text-link" href="/research">{home.researchSection.actionLabel} <span aria-hidden="true">→</span></Link>
        </div>
        <div className="research-grid">
          {research.areas.map((area) => (
            <Link href="/research" className="research-card" key={area.title}>
              <span className="card-index">{area.index}</span>
              <h3>{area.title}</h3>
              <p>{area.short}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="publication-section site-width">
        <div className="section-heading publication-heading">
          <div>
            <p className="section-index">{home.publicationsSection.label}</p>
            <h2>{home.publicationsSection.title}</h2>
          </div>
          <Link className="text-link" href="/publications/journals">{home.publicationsSection.actionLabel} <span aria-hidden="true">→</span></Link>
        </div>
        <div className="publication-list">
          {selectedPublications.map((publication) => (
            <article className="publication-row" key={publication.title}>
              <span className="publication-year">{publication.year}</span>
              <div>
                <h3>{publication.title}</h3>
                <p>{publication.venue}</p>
              </div>
              {publication.doi ? (
                <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noreferrer" aria-label={`Open DOI for ${publication.title}`}>↗</a>
              ) : <span />}
            </article>
          ))}
        </div>
      </section>

      <section className="recruit-section">
        <div className="site-width recruit-grid">
          <p className="section-index">{home.recruitment.label}</p>
          <div>
            <h2>{home.recruitment.titleLine1}<br />{home.recruitment.titleLine2}</h2>
            <p>{home.recruitment.description}</p>
          </div>
          <Link className="button button-light" href="/contact">{home.recruitment.actionLabel}</Link>
        </div>
      </section>
    </SiteShell>
  );
}
