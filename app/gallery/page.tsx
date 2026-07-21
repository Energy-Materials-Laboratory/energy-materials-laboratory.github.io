/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import SiteShell from "../components/SiteShell";
import galleryContent from "../../content/gallery.json";
import { assetPath } from "../../lib/paths";

type GalleryPhoto = {
  src: string;
  alt: string;
  position?: string;
};

type GalleryEvent = {
  slug: string;
  title: string;
  date: string;
  cover: string;
  coverAlt: string;
  coverPosition?: string;
  photos?: GalleryPhoto[];
};

const gallery = galleryContent as {
  metadataTitle: string;
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
  };
  events: GalleryEvent[];
};

export const metadata = {
  title: gallery.metadataTitle,
};

export default function GalleryPage() {
  // gallery.json에 적힌 위치와 무관하게 날짜 최신순으로 자동 정렬
  const events = [...gallery.events].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <SiteShell>
      <section className="page-hero site-width compact">
        <p className="eyebrow">{gallery.hero.eyebrow}</p>

        <h1>
          {gallery.hero.titleLine1}
          <br />
          {gallery.hero.titleLine2}
        </h1>
      </section>

      <section className="gallery-grid site-width">
        {events.map((event, index) => (
          <article className="gallery-card" key={event.slug}>
            <Link
              className="gallery-card-link"
              href={`/gallery/${event.slug}`}
              aria-label={`View photos from ${event.title}`}
            >
              <div className="gallery-image">
                <img
                  src={assetPath(event.cover)}
                  alt={event.coverAlt}
                  style={{
                    objectPosition: event.coverPosition ?? "50% 50%",
                  }}
                />

                <span className="gallery-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h2>{event.title}</h2>

              <p>
                <time dateTime={event.date}>
                  {event.date.replaceAll("-", ".")}
                </time>
              </p>
            </Link>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
