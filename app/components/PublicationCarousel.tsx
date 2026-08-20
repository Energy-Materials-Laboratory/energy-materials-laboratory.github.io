"use client";

/* eslint-disable @next/next/no-img-element */

import { Fragment, useEffect, useState } from "react";
import { assetPath } from "../../lib/paths";
import {
  getPublicationYear,
  type JournalPublication,
} from "../../lib/publications";

type PublicationCarouselProps = {
  label: string;
  publications: JournalPublication[];
};

function PublicationAuthors({
  authors,
}: {
  authors: JournalPublication["authors"];
}) {
  if (typeof authors === "string") {
    return <>{authors}</>;
  }

  return (
    <>
      {authors.map((author, index) => {
        let separator = "";

        if (index > 0) {
          if (index === authors.length - 1) {
            separator = authors.length === 2 ? " and " : ", and ";
          } else {
            separator = ", ";
          }
        }

        return (
          <Fragment key={`${author.name}-${index}`}>
            {separator}
            {author.bold ? <strong>{author.name}</strong> : author.name}
            {author.mark ?? ""}
          </Fragment>
        );
      })}
    </>
  );
}

export default function PublicationCarousel({
  label,
  publications,
}: PublicationCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserPaused, setIsUserPaused] = useState(false);

  const publicationCount = publications.length;
  const activePublication = publications[activeIndex];

  useEffect(() => {
    if (
      publicationCount < 2 ||
      isUserPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((currentIndex) =>
        (currentIndex + 1) % publicationCount,
      );
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isUserPaused, publicationCount]);

  if (!activePublication) {
    return null;
  }

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex - 1 + publicationCount) % publicationCount,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex + 1) % publicationCount,
    );
  };

  return (
    <div
      className="publication-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Recent publications"
    >
      <article
        className="featured-publication publication-carousel-slide"
        key={activePublication.title}
        aria-label={`${activeIndex + 1} of ${publicationCount}`}
      >
        <div className="featured-publication-cover">
          {activePublication.cover ? (
            activePublication.doi ? (
              <a
                href={`https://doi.org/${activePublication.doi}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${activePublication.title}`}
              >
                <img
                  src={assetPath(activePublication.cover)}
                  alt={
                    activePublication.coverAlt ??
                    `First page of ${activePublication.title}`
                  }
                  loading="lazy"
                  decoding="async"
                  width="420"
                  height="594"
                />
              </a>
            ) : (
              <img
                src={assetPath(activePublication.cover)}
                alt={
                  activePublication.coverAlt ??
                  `First page of ${activePublication.title}`
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
          <p className="featured-publication-label">{label}</p>
          <p className="featured-publication-meta">
            {activePublication.venue} · {getPublicationYear(activePublication)}
          </p>
          <h3>{activePublication.title}</h3>
          <p className="featured-publication-authors">
            <PublicationAuthors authors={activePublication.authors} />
          </p>

          <div className="publication-carousel-footer">
            {activePublication.doi ? (
              <a
                className="featured-publication-link"
                href={`https://doi.org/${activePublication.doi}`}
                target="_blank"
                rel="noreferrer"
              >
                Read publication <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span />
            )}

            <div
              className="publication-carousel-navigation"
              role="group"
              aria-label="Publication carousel controls"
            >
              <span className="publication-carousel-count" aria-live="polite">
                {String(activeIndex + 1).padStart(2, "0")} / {String(publicationCount).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => setIsUserPaused((paused) => !paused)}
                aria-label={
                  isUserPaused
                    ? "Resume automatic rotation"
                    : "Pause automatic rotation"
                }
              >
                <span aria-hidden="true">{isUserPaused ? "▶" : "Ⅱ"}</span>
              </button>
              <button type="button" onClick={showPrevious} aria-label="Previous publication">
                <span aria-hidden="true">←</span>
              </button>
              <button type="button" onClick={showNext} aria-label="Next publication">
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      <div
        className="publication-carousel-dots"
        role="group"
        aria-label="Choose a publication"
      >
        {publications.map((publication, index) => (
          <button
            className={index === activeIndex ? "is-active" : undefined}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show publication ${index + 1}: ${publication.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            key={publication.title}
          />
        ))}
      </div>
    </div>
  );
}
