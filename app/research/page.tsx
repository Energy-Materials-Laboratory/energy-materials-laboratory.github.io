import Link from "next/link";
import SiteShell from "../components/SiteShell";
import research from "../../content/research.json";

export const metadata = { title: research.metadataTitle };

export default function ResearchPage() {
  return (
    <SiteShell>
      <section className="page-hero site-width">
        <p className="eyebrow">{research.hero.eyebrow}</p>
        <h1>{research.hero.titleLine1}<br />{research.hero.titleLine2}</h1>
        <p>{research.hero.description}</p>
      </section>

      <section className="research-detail-list site-width">
        {research.areas.map((area) => (
          <article className="research-detail" key={area.title}>
            <div className="research-number">{area.index}</div>
            <div>
              <h2>{area.title}</h2>
              <p>{area.detail}</p>
              <div className="tag-list">
                {area.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className={`research-figure research-figure-${area.index}`} aria-hidden="true">
              <span className="figure-axis">atomic</span>
              <span className="figure-axis">materials</span>
            </div>
          </article>
        ))}
      </section>

      <section className="page-cta site-width">
        <p className="section-index">{research.cta.label}</p>
        <h2>{research.cta.titleLine1}<br />{research.cta.titleLine2}</h2>
        <Link className="button button-primary" href="/contact">{research.cta.actionLabel}</Link>
      </section>
    </SiteShell>
  );
}
