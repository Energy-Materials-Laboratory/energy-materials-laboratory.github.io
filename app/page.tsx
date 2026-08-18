/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import SiteShell from "./components/SiteShell";
import home from "../content/home.json";
import research from "../content/research.json";
import journalsContent from "../content/journals.json";
import { assetPath } from "../lib/paths";
import {
  getPublicationYear,
  sortPublications,
  type JournalPublication,
} from "../lib/publications";

function getPublicationAuthorText(
  authors: JournalPublication["authors"],
) {
  if (typeof authors === "string") {
    return authors;
  }

  return authors
    .map((author) => `${author.name}${author.mark ?? ""}`)
    .join(", ");
}

function ResearchMechanism({ index }: { index: string }) {
  const commonProps = {
    className: `research-mechanism research-mechanism-${index}`,
    viewBox: "0 0 180 92",
    focusable: "false" as const,
    "aria-hidden": true,
  };

  if (index === "01") {
    return (
      <svg {...commonProps}>
        <path className="mechanism-line" d="M14 24H166M14 68H166" />
        {[30, 62, 94, 126, 158].map((x) => (
          <circle className="mechanism-site" cx={x} cy="24" r="5" key={`top-${x}`} />
        ))}
        {[22, 54, 86, 118, 150].map((x) => (
          <circle className="mechanism-site" cx={x} cy="68" r="5" key={`bottom-${x}`} />
        ))}
        <circle className="mechanism-cation" cx="94" cy="24" r="7" />
        <circle className="mechanism-oxygen" cx="126" cy="62" r="5" />
        <circle className="mechanism-oxygen" cx="141" cy="62" r="5" />
        <path className="mechanism-bond" d="M131 62H136" />
      </svg>
    );
  }

  if (index === "02") {
    return (
      <svg {...commonProps}>
        {[20, 62, 104, 146].map((x) =>
          [25, 67].map((y) => (
            <rect
              className="mechanism-candidate"
              x={x - 9}
              y={y - 9}
              width="18"
              height="18"
              rx="3"
              key={`${x}-${y}`}
            />
          )),
        )}
        <path className="mechanism-scan" d="M8 13H172" />
        <circle className="mechanism-hit" cx="104" cy="67" r="5" />
      </svg>
    );
  }

  if (index === "03") {
    return (
      <svg {...commonProps}>
        <path className="mechanism-path" d="M14 63C42 63 46 25 76 25S113 67 166 32" />
        {[18, 52, 84, 118, 160].map((x, itemIndex) => (
          <circle
            className="mechanism-site"
            cx={x}
            cy={[63, 37, 28, 57, 35][itemIndex]}
            r="5"
            key={x}
          />
        ))}
        <circle className="mechanism-sodium" cx="18" cy="63" r="7" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path className="mechanism-lattice" d="M18 19H162M18 46H162M18 73H162M42 10V82M78 10V82M114 10V82M150 10V82" />
      <path className="mechanism-channel" d="M16 69C47 69 58 30 91 30S125 69 166 25" />
      <circle className="mechanism-conductor-ion" cx="18" cy="69" r="7" />
    </svg>
  );
}

export default function Home() {
  const sortedPublications = sortPublications(
    journalsContent.journals as unknown as JournalPublication[],
  );

  const featuredPublication =
    sortedPublications.find((publication) => publication.cover) ??
    sortedPublications[0];

  const selectedPublications = sortedPublications
    .filter((publication) => publication !== featuredPublication)
    .slice(
      home.publicationsSection.startIndex,
      home.publicationsSection.startIndex +
        home.publicationsSection.count,
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
        >
          <span className="hero-local-motion" aria-hidden="true" />
        </div>
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
              <div className="research-card-topline">
                <span className="card-index">{area.index}</span>
                <ResearchMechanism index={area.index} />
              </div>
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

        {featuredPublication ? (
          <article className="featured-publication">
            <div className="featured-publication-cover">
              {featuredPublication.cover ? (
                featuredPublication.doi ? (
                  <a
                    href={`https://doi.org/${featuredPublication.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${featuredPublication.title}`}
                  >
                    <img
                      src={assetPath(featuredPublication.cover)}
                      alt={
                        featuredPublication.coverAlt ??
                        `First page of ${featuredPublication.title}`
                      }
                      loading="lazy"
                      decoding="async"
                      width="420"
                      height="594"
                    />
                  </a>
                ) : (
                  <img
                    src={assetPath(featuredPublication.cover)}
                    alt={
                      featuredPublication.coverAlt ??
                      `First page of ${featuredPublication.title}`
                    }
                    loading="lazy"
                    decoding="async"
                    width="420"
                    height="594"
                  />
                )
              ) : null}
            </div>

            <div className="featured-publication-copy">
              <p className="featured-publication-label">
                {home.publicationsSection.featuredLabel}
              </p>

              <p className="featured-publication-meta">
                {featuredPublication.venue} · {getPublicationYear(featuredPublication)}
              </p>

              <h3>{featuredPublication.title}</h3>

              <p className="featured-publication-authors">
                {getPublicationAuthorText(featuredPublication.authors)}
              </p>

              {featuredPublication.doi ? (
                <a
                  className="featured-publication-link"
                  href={`https://doi.org/${featuredPublication.doi}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read publication <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </article>
        ) : null}

        <div className="publication-list">
          {selectedPublications.map((publication) => (
            <article className="publication-row" key={publication.title}>
              <span className="publication-year">
                {getPublicationYear(publication)}
              </span>
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
