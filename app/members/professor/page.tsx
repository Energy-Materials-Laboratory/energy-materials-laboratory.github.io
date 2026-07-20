import SiteShell from "../../components/SiteShell";
import members from "../../../content/members.json";
import { assetPath } from "../../../lib/paths";

export const metadata = { title: members.metadata.professorTitle };

export default function ProfessorPage() {
  const professor = members.professor;

  return (
    <SiteShell>
      <section className="profile-hero site-width">
        <div className="profile-portrait">
  <img
    src={assetPath(professor.profilePhoto)}
    alt={professor.portraitLabel}
  />
  <small>{professor.eyebrow}</small>
</div>
        <div className="profile-intro">
          <p className="eyebrow">{professor.eyebrow}</p>
          <h1>{professor.name}</h1>
          <p className="profile-role">{professor.title}<br />{professor.department}<br />{professor.university}</p>
          <div className="profile-links">
            {professor.links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="cv-section site-width">
        <div className="cv-column">
          <p className="section-index">Education</p>
          {professor.education.map((item) => (
            <div className="cv-item" key={`${item.year}-${item.title}`}>
              <span>{item.year}</span>
              <div><h2>{item.title}</h2><p>{item.institution}</p>{"detail" in item && item.detail ? <small>{item.detail}</small> : null}</div>
            </div>
          ))}
        </div>
        <div className="cv-column">
          <p className="section-index">Experience</p>
          {professor.experience.map((item) => (
            <div className="cv-item" key={`${item.year}-${item.institution}`}>
              <span>{item.year}</span>
              <div><h2>{item.title}</h2><p>{item.institution}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="awards-section site-width">
        <p className="section-index">Selected honors</p>
        {professor.honors.map((honor) => (
          <div className="award-row" key={`${honor.year}-${honor.title}`}>
            <span>{honor.year}</span><h3>{honor.title}</h3><p>{honor.institution}</p>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
