/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SiteShell from "../components/SiteShell";
import gallery from "../../content/gallery.json";
import { assetPath } from "../../lib/paths";

export const metadata = { title: gallery.metadataTitle };

export default function GalleryPage() {
  const events = [...gallery.events].sort(
    (a, b) => b.date.localeCompare(a.date),
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
            >
              <div className="gallery-image">
                <img
                  src={assetPath(event.cover)}
                  alt={event.coverAlt}
                  style={{
                    objectPosition: event.coverPosition || "50% 50%",
                  }}
                />

                <span className="gallery-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h2>{event.title}</h2>
              <p>{event.date.replaceAll("-", ".")}</p>
            </Link>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
