import SiteShell from "../../components/SiteShell";
import membersContent from "../../../content/members.json";

export const metadata = { title: membersContent.metadata.groupTitle };

const groups = membersContent.group.roleOrder.map((group) => ({
  title: group.heading,
  members: membersContent.group.members.filter((member) => member.role === group.role),
}));

export default function GroupMembersPage() {
  return (
    <SiteShell>
      <section className="page-hero site-width compact">
        <p className="eyebrow">{membersContent.group.eyebrow}</p>
        <h1>{membersContent.group.titleLine1}<br />{membersContent.group.titleLine2}</h1>
        <p>{membersContent.group.description}</p>
      </section>
      <section className="member-groups site-width">
        {groups.map((group) => (
          <div className="member-group" key={group.title}>
            <p className="section-index">{group.title}</p>
            <div className="member-grid">
              {group.members.map((member) => (
                <article className="member-card" key={member.email}>
                  <div className="member-photo"><span>{member.initials}</span><small>Portrait</small></div>
                  <h2>{member.name}</h2>
                  <p>{member.role}</p>
                  <a href={`mailto:${member.email}`}>{member.email} ↗</a>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
