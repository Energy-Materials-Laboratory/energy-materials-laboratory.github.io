import ResearchVisual from "../components/ResearchVisual";
import SiteShell from "../components/SiteShell";
import research from "../../content/research.json";

export const metadata = { title: research.metadataTitle };

export default function ResearchPage() {
  return (
    <SiteShell>
      <section className="page-hero page-hero-minimal site-width">
        <h1 className="visually-hidden">{research.hero.eyebrow}</h1>
        <p className="eyebrow">{research.hero.eyebrow}</p>
      </section>

      <section className="research-detail-list site-width">
        {research.areas.map((area) => (
          <article className="research-detail" key={area.title}>
            <div className="research-number">{area.index}</div>
            <div className="research-detail-copy">
              <h2>{area.title}</h2>
              <p className="research-detail-lead">{area.short}</p>
              <p className="research-detail-description">{area.detail}</p>
              <div className="tag-list">
                {area.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className="research-detail-visual">
              <ResearchVisual index={area.index} />
            </div>
          </article>
        ))}
      </section>

      <section className="research-methods site-width">
        <h2 className="visually-hidden">{research.methods.label}</h2>
        <p className="section-index">{research.methods.label}</p>
        <div className="research-method-grid">
          {research.methods.items.map((item) => (
            <article key={item.index}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
