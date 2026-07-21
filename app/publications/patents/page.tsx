import SiteShell from "../../components/SiteShell";
import publicationMeta from "../../../content/publications.json";
import patentsContent from "../../../content/patents.json";

type Patent = {
  year?: string;
  date: string;
  korean: string;
  english: string;
  inventors: string;
  number: string;
};

export const metadata = {
  title: publicationMeta.metadata.patentsTitle,
};

function getPatentYear(patent: Patent): string {
  return patent.year ?? patent.date.slice(0, 4);
}

export default function PatentsPage() {
  const sortedPatents = [
    ...(patentsContent.patents as Patent[]),
  ].sort((a, b) => b.date.localeCompare(a.date));

  const years = [
    ...new Set(
      sortedPatents.map((patent) =>
        getPatentYear(patent),
      ),
    ),
  ];

  return (
    <SiteShell>
      <section className="page-hero site-width compact publication-page-hero">
        <p className="eyebrow">
          {patentsContent.page.eyebrow}
        </p>

        <h1>
          {patentsContent.page.titleLine1}
          <br />
          {patentsContent.page.titleLine2}
        </h1>
      </section>

      <section className="patent-list site-width">
        {years.map((year) => {
          const yearlyPatents = sortedPatents.filter(
            (patent) =>
              getPatentYear(patent) === year,
          );

          return (
            <section key={year}>
              <h2>{year}</h2>

              {yearlyPatents.map((patent, index) => (
                <article
                  className="patent-entry"
                  key={patent.number}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{patent.korean}</h3>

                    <p className="patent-english">
                      {patent.english}
                    </p>

                    <p>{patent.inventors}</p>
                  </div>

                  <div>
                    <p>Application No.</p>
                    <strong>{patent.number}</strong>
                    <small>{patent.date}</small>
                  </div>
                </article>
              ))}
            </section>
          );
        })}
      </section>
    </SiteShell>
  );
}
