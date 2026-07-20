import SiteShell from "../components/SiteShell";
import contact from "../../content/contact.json";

export const metadata = { title: contact.metadataTitle };

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="contact-hero site-width">
        <div>
          <p className="eyebrow">{contact.hero.eyebrow}</p>
          <h1>{contact.hero.titleLine1}<br />{contact.hero.titleLine2}</h1>
        </div>
        <div className="contact-details">
          <div>
            <p className="section-index">{contact.principalInvestigator.label}</p>
            <h2>{contact.principalInvestigator.name}</h2>
            <a href={`mailto:${contact.principalInvestigator.email}`}>{contact.principalInvestigator.email} ↗</a>
          </div>
          <div>
            <p className="section-index">{contact.laboratory.label}</p>
            <h2>{contact.laboratory.room}</h2>
            <p>{contact.laboratory.addressLine1}<br />{contact.laboratory.addressLine2}</p>
            <a href={contact.laboratory.mapUrl} target="_blank" rel="noreferrer">{contact.laboratory.mapLabel} ↗</a>
          </div>
        </div>
      </section>
      <section className="recruitment-detail">
        <div className="site-width">
          <p className="section-index">{contact.recruitment.label}</p>
          <div className="recruitment-copy">
            <h2>{contact.recruitment.title}</h2>
            <p>{contact.recruitment.english}</p>
            <p>{contact.recruitment.korean}</p>
            <a
              className="button button-light"
              href={`mailto:${contact.principalInvestigator.email}?subject=${encodeURIComponent(contact.recruitment.emailSubject)}`}
            >
              {contact.recruitment.actionLabel}
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
