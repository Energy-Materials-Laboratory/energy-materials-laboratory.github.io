import Link from "next/link";
import SiteShell from "../components/SiteShell";
import members from "../../content/members.json";

export const metadata = { title: members.metadata.landingTitle };

export default function MembersPage() {
  return (
    <SiteShell>
      <section className="page-hero page-hero-minimal site-width">
        <h1 className="visually-hidden">{members.landing.eyebrow}</h1>
        <p className="eyebrow">{members.landing.eyebrow}</p>
      </section>
      <section className="portal-grid site-width">
        {members.landing.portals.map((portal) => (
          <Link href={portal.href} key={portal.href}>
            <span>{portal.index}</span>
            <h2>{portal.title}</h2>
            <p>{portal.description}</p>
            <b>Explore ↗</b>
          </Link>
        ))}
      </section>
    </SiteShell>
  );
}
