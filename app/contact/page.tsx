import EmailCopyButton from "../components/EmailCopyButton";
import SiteShell from "../components/SiteShell";
import contact from "../../content/contact.json";

export const metadata = { title: contact.metadataTitle };

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="contact-hero site-width">
        <div className="contact-intro">
          <h1 className="contact-page-label">{contact.hero.eyebrow}</h1>
          <div className="contact-intro-copy">
            <p>{contact.recruitment.english}</p>
            <p>{contact.recruitment.korean}</p>
          </div>
        </div>
        <div className="contact-details">
          <div>
            <p className="section-index">{contact.principalInvestigator.label}</p>
            <h2>{contact.principalInvestigator.name}</h2>
            <EmailCopyButton email={contact.principalInvestigator.email} />
          </div>
          <div>
            <p className="section-index">{contact.laboratory.label}</p>
            <h2>{contact.laboratory.room}</h2>
            <p>{contact.laboratory.addressLine1}<br />{contact.laboratory.addressLine2}</p>
            <a href={contact.laboratory.mapUrl} target="_blank" rel="noreferrer">{contact.laboratory.mapLabel} ↗</a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
