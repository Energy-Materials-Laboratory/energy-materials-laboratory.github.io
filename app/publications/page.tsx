import Link from "next/link";

import SiteShell from "../components/SiteShell";
import publications from "../../content/publications.json";

export const metadata = {
  title: publications.metadata.landingTitle,
};

export default function PublicationsPage() {
  return (
    <SiteShell>
      <section className="page-hero page-hero-minimal site-width">
        <h1 className="visually-hidden">
          {publications.landing.eyebrow}
        </h1>
        <p className="eyebrow">
          {publications.landing.eyebrow}
        </p>
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
