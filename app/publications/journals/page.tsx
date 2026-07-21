/* eslint-disable @next/next/no-img-element */

import { Fragment } from "react";

import SiteShell from "../../components/SiteShell";
import publications from "../../../content/publications.json";
import { assetPath } from "../../../lib/paths";
import {
  getPublicationYear,
  sortPublications,
  type JournalPublication,
  type PublicationAuthor,
} from "../../../lib/publications";

export const metadata = {
  title: publications.metadata.journalsTitle,
};

function PublicationAuthors({
  authors,
}: {
  authors: PublicationAuthor[] | string;
}) {
  /*
   * 기존 publications.json의 문자열 형식도 임시로 지원합니다.
   */
  if (typeof authors === "string") {
    return <>{authors}</>;
  }

  return (
    <>
      {authors.map((author, index) => {
        let separator = "";

        if (index > 0) {
          if (index === authors.length - 1) {
            separator =
              authors.length === 2 ? " and " : ", and ";
          } else {
            separator = ", ";
          }
        }

        return (
          <Fragment key={`${author.name}-${index}`}>
            {separator}

            {author.bold ? (
              <strong>{author.name}</strong>
            ) : (
              author.name
            )}

            {author.mark ?? ""}
          </Fragment>
        );
      })}
    </>
  );
}

export default function JournalsPage() {
  const journalData =
    publications.journals as unknown as JournalPublication[];

  const sortedPublications =
    sortPublications(journalData);

  const years = [
    ...new Set(
      sortedPublications.map((publication) =>
        getPublicationYear(publication),
      ),
    ),
  ];

  return (
    <SiteShell>
      <section className="page-hero site-width compact publication-page-hero">
        <p className="eyebrow">
          {publications.journalsPage.eyebrow}
        </p>

        <h1>{publications.journalsPage.title}</h1>

        <p>{publications.journalsPage.note}</p>
      </section>

      <section className="journal-archive site-width">
        <aside
          className="year-index"
          aria-label="Publication years"
        >
          {years.map((year) => (
            <a href={`#year-${year}`} key={year}>
              {year}
            </a>
          ))}
        </aside>

        <div className="journal-years">
          {years.map((year) => {
            const yearlyPublications =
              sortedPublications.filter(
                (publication) =>
                  getPublicationYear(publication) === year,
              );

            return (
              <section
                className="journal-year"
                id={`year-${year}`}
                key={year}
              >
                <h2>{year}</h2>

                {yearlyPublications.map(
                  (publication, index) => (
                    <article
                      className="journal-entry"
                      key={`${
                        publication.date ??
                        publication.year ??
                        "undated"
                      }-${publication.title}`}
                    >
                      <span className="journal-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="journal-copy">
                        <h3>{publication.title}</h3>

                        <p className="journal-authors">
                          <PublicationAuthors
                            authors={publication.authors}
                          />
                        </p>

                        <p className="journal-venue">
                          {publication.venue}

                          {publication.doi ? (
                            <>
                              {" · "}
                              <span className="journal-doi">
                                DOI: {publication.doi}
                              </span>
                            </>
                          ) : null}
                        </p>
                      </div>

                      <div className="journal-cover">
                        {publication.cover ? (
                          publication.doi ? (
                            <a
                              className="journal-cover-link"
                              href={`https://doi.org/${publication.doi}`}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`Open ${publication.title}`}
                            >
                              <img
                                src={assetPath(
                                  publication.cover,
                                )}
                                alt={
                                  publication.coverAlt ??
                                  `First page of ${publication.title}`
                                }
                              />
                            </a>
                          ) : (
                            <img
                              src={assetPath(
                                publication.cover,
                              )}
                              alt={
                                publication.coverAlt ??
                                `First page of ${publication.title}`
                              }
                            />
                          )
                        ) : (
                          <span className="journal-cover-placeholder">
                            Image pending
                          </span>
                        )}
                      </div>
                    </article>
                  ),
                )}
              </section>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
