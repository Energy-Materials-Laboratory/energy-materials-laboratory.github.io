/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import EmailCopyButton from "../../components/EmailCopyButton";
import SiteShell from "../../components/SiteShell";
import membersContent from "../../../content/members.json";
import { assetPath } from "../../../lib/paths";

type GroupMember = {
  name: string;
  slug: string;
  email: string;
  role: string;
  initials: string;
  cardPhoto?: string;
  cardPosition?: string;
  photo?: string;
  isLabManager?: boolean;
};

export const metadata = {
  title: membersContent.metadata.groupTitle,
};

const members = membersContent.group.members as GroupMember[];

const groups = membersContent.group.roleOrder.map((group) => ({
  title: group.heading,
  members: members.filter((member) => member.role === group.role),
}));

export default function GroupMembersPage() {
  return (
    <SiteShell>
      <section className="page-hero page-hero-minimal page-hero-borderless site-width">
        <h1 className="visually-hidden">{membersContent.group.eyebrow}</h1>
        <p className="eyebrow">{membersContent.group.eyebrow}</p>
        <div
          className="lab-manager-legend"
          aria-label="Asterisk indicates the lab manager"
        >
          <span className="lab-manager-legend-marker" aria-hidden="true">
            *
          </span>
          <span aria-hidden="true">: {membersContent.group.labManagerLabel}</span>
        </div>
      </section>

      <section className="member-groups site-width">
        {groups.map((group) => (
          <div className="member-group" key={group.title}>
            <p className="section-index">{group.title}</p>

            <div className="member-grid">
              {group.members.map((member) => {
                const cardPhoto = member.cardPhoto || member.photo;

                return (
                  <article
                    className={`member-card${
                      member.isLabManager ? " is-lab-manager" : ""
                    }`}
                    key={member.email}
                  >
                    <Link
                      className="member-photo-link"
                      href={`/members/group/${member.slug}`}
                      aria-label={`View ${member.name}'s profile`}
                    >
                      <div
                        className={`member-photo${
                          cardPhoto ? " has-photo" : ""
                        }`}
                      >
                        {cardPhoto ? (
                          <img
                            src={assetPath(cardPhoto)}
                            alt={`${member.name} portrait`}
                            style={{
                              objectPosition:
                                member.cardPosition || "50% 20%",
                            }}
                          />
                        ) : (
                          <>
                            <span>{member.initials}</span>
                            <small>Portrait</small>
                          </>
                        )}
                      </div>
                    </Link>

                    <h2>
                      <Link
                        href={`/members/group/${member.slug}`}
                        aria-label={
                          member.isLabManager
                            ? `${member.name}, ${membersContent.group.labManagerLabel}`
                            : undefined
                        }
                      >
                        {member.name}
                        {member.isLabManager ? (
                          <sup className="lab-manager-marker" aria-hidden="true">
                            *
                          </sup>
                        ) : null}
                      </Link>
                    </h2>

                    <p>{member.role}</p>

                    <EmailCopyButton email={member.email} />
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
