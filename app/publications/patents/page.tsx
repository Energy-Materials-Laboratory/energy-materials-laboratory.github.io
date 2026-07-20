import SiteShell from "../../components/SiteShell";
import publications from "../../../content/publications.json";

export const metadata = { title: publications.metadata.patentsTitle };

export default function PatentsPage() {
  const years = [...new Set(publications.patents.map((patent) => patent.year))];

  return (
    <SiteShell>
      <section className="page-hero site-width compact publication-page-hero">
        <p className="eyebrow">{publications.patentsPage.eyebrow}</p>
        <h1>{publications.patentsPage.titleLine1}<br />{publications.patentsPage.titleLine2}</h1>
      </section>
      <section className="patent-list site-width">
        {years.map((year) => (
          <section key={year}>
            <h2>{year}</h2>
            {publications.patents.filter((patent) => patent.year === year).map((patent, index) => (
              <article className="patent-entry" key={patent.number}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{patent.korean}</h3><p className="patent-english">{patent.english}</p><p>{patent.inventors}</p></div>
                <div><p>Application No.</p><strong>{patent.number}</strong><small>{patent.date}</small></div>
              </article>
            ))}
          </section>
        ))}
      </section>
    </SiteShell>
  );
}
