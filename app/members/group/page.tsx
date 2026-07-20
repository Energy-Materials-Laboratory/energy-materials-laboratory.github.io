/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import membersContent from "../../../content/members.json";
import { assetPath } from "../../../lib/paths";

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
              {group.members.map((member) => {
                const cardPhoto = member.cardPhoto || member.photo;

                return (
                  <article className="member-card" key={member.email}>
                    <Link
                      className="member-photo-link"
                      href={`/members/group/${member.slug}`}
                      aria-label={`View ${member.name}'s profile`}
                    >
                      <div className={`member-photo${cardPhoto ? " has-photo" : ""}`}>
                        {cardPhoto ? (
                          <img src={assetPath(cardPhoto)} alt={`${member.name} portrait`} />
                        ) : (
                          <><span>{member.initials}</span><small>Portrait</small></>
                        )}
                      </div>
                    </Link>
                    <h2><Link href={`/members/group/${member.slug}`}>{member.name}</Link></h2>
                    <p>{member.role}</p>
                    <a href={`mailto:${member.email}`}>{member.email} ↗</a>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
