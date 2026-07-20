import SiteShell from "../../components/SiteShell";
import publications from "../../../content/publications.json";

export const metadata = { title: publications.metadata.journalsTitle };

export default function JournalsPage() {
  const years = [...new Set(publications.journals.map((publication) => publication.year))];
  return (
    <SiteShell>
      <section className="page-hero site-width compact publication-page-hero">
        <p className="eyebrow">{publications.journalsPage.eyebrow}</p>
        <h1>{publications.journalsPage.title}</h1>
        <p>{publications.journalsPage.note}</p>
      </section>
      <section className="journal-archive site-width">
        <aside className="year-index" aria-label="Publication years">
          {years.map((year) => <a href={`#year-${year}`} key={year}>{year}</a>)}
        </aside>
        <div className="journal-years">
          {years.map((year) => (
            <section className="journal-year" id={`year-${year}`} key={year}>
              <h2>{year}</h2>
              {publications.journals.filter((publication) => publication.year === year).map((publication, index) => (
                <article className="journal-entry" key={publication.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{publication.title}</h3>
                    <p className="journal-authors">{publication.authors}</p>
                    <p className="journal-venue">{publication.venue}</p>
                  </div>
                  {publication.doi ? <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noreferrer">DOI ↗</a> : <em>Accepted</em>}
                </article>
              ))}
            </section>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
