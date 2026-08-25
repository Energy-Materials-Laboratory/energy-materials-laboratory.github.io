import EmailCopyButton from "../components/EmailCopyButton";
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
            <EmailCopyButton email={contact.principalInvestigator.email} />
          </div>
          <div>
            <p className="section-index">{contact.laboratory.label}</p>
            <h2>{contact.laboratory.room}</h2>
            <p>{contact.laboratory.addressLine1}<br />{contact.laboratory.addressLine2}</p>
            <a href={contact.laboratory.mapUrl} target="_blank" rel="noreferrer">{contact.laboratory.mapLabel} ↗</a>
          </div>
        </div>
        <div className="contact-recruitment">
          <p className="section-index">{contact.recruitment.label}</p>
          <div className="contact-recruitment-copy">
            <h2>{contact.recruitment.title}</h2>
            <p>{contact.recruitment.english}</p>
            <p>{contact.recruitment.korean}</p>
            <EmailCopyButton
              className="button button-primary"
              email={contact.principalInvestigator.email}
            >
              {contact.recruitment.actionLabel}
            </EmailCopyButton>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
