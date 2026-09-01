import { Fragment } from "react";

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

const LAB_MEMBER_NAMES = new Set([
  "김병훈",
  "박민규",
  "김명훈",
  "신동혁",
]);

function PatentInventors({
  inventors,
}: {
  inventors: string;
}) {
  const names = inventors.split(" · ");

  return (
    <>
      {names.map((name, index) => (
        <Fragment key={`${name}-${index}`}>
          {index > 0 ? " · " : ""}
          {LAB_MEMBER_NAMES.has(name) ? <b>{name}</b> : name}
        </Fragment>
      ))}
    </>
  );
}

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
      <section className="page-hero page-hero-minimal site-width">
        <h1 className="visually-hidden">
          {patentsContent.page.eyebrow}
        </h1>
        <p className="eyebrow">
          {patentsContent.page.eyebrow}
        </p>
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

                    <p>
                      <PatentInventors
                        inventors={patent.inventors}
                      />
                    </p>
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
