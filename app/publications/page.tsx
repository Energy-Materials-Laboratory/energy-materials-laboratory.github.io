import Link from "next/link";
import SiteShell from "../components/SiteShell";
import publications from "../../content/publications.json";

export const metadata = { title: publications.metadata.landingTitle };

export default function PublicationsPage() {
  return (
    <SiteShell>
      <section className="page-hero site-width compact">
        <p className="eyebrow">{publications.landing.eyebrow}</p>
        <h1>{publications.landing.titleLine1}<br />{publications.landing.titleLine2}</h1>
      </section>
      <section className="portal-grid site-width">
        {publications.landing.portals.map((portal) => (
          <Link href={portal.href} key={portal.href}>
            <span>{portal.index}</span>
            <h2>{portal.title}</h2>
            <p>{portal.description}</p>
            <b>{portal.actionLabel} ↗</b>
          </Link>
        ))}
      </section>
    </SiteShell>
  );
}
