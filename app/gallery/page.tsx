import SiteShell from "../components/SiteShell";
import gallery from "../../content/gallery.json";

export const metadata = { title: gallery.metadataTitle };

export default function GalleryPage() {
  return (
    <SiteShell>
      <section className="page-hero site-width compact">
        <p className="eyebrow">{gallery.hero.eyebrow}</p>
        <h1>{gallery.hero.titleLine1}<br />{gallery.hero.titleLine2}</h1>
      </section>
      <section className="gallery-grid site-width">
        {gallery.events.map((event, index) => (
          <article className={index % 3 === 0 ? "gallery-card gallery-wide" : "gallery-card"} key={event.title}>
            <div className={`gallery-image gallery-image-${event.index}`} aria-label={`Photo placeholder for ${event.title}`}>
              <span>{event.index}</span><small>Lab archive</small>
            </div>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
