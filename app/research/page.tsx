import Image from "next/image";
import ResearchVisual from "../components/ResearchVisual";
import SiteShell from "../components/SiteShell";
import research from "../../content/research.json";
import { assetPath } from "../../lib/paths";

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
              <div className="research-selected">
                <p className="research-selected-label">Selected publications</p>
                <div className="research-selected-list">
                  {area.selectedPublications.map((publication) => (
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      key={publication.doi}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span>
                        <strong>{publication.title}</strong>
                        <small>{publication.venue}</small>
                      </span>
                      <b aria-hidden="true">↗</b>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className={`research-detail-visual${area.visual ? " has-figure" : ""}`}>
              {area.visual ? (
                <div className="research-detail-figure">
                  <Image
                    alt={area.visual.alt}
                    height={area.visual.height}
                    sizes="(max-width: 620px) calc(100vw - 76px), (max-width: 920px) 520px, 38vw"
                    src={assetPath(area.visual.image)}
                    width={area.visual.width}
                  />
                </div>
              ) : (
                <ResearchVisual index={area.index} />
              )}
            </div>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
