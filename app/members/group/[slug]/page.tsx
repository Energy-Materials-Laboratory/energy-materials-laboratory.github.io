/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "../../../components/SiteShell";
import membersContent from "../../../../content/members.json";
import { assetPath } from "../../../../lib/paths";

type Education = {
  degree: string;
  institution: string;
  year: string;
};

type SelectedPublication = {
  title: string;
  authors?: string;
  venue?: string;
  year?: string;
  href?: string;
};

type Member = {
  name: string;
  slug: string;
  email: string;
  role: string;
  initials: string;

  cardPhoto?: string;
  cardPosition?: string;

  profilePhoto?: string;
  profilePosition?: string;

  photo?: string;
  bio: string;
  education: Education[];
  researchInterests: string[];
  selectedPublications: SelectedPublication[];
};

const members = membersContent.group.members as Member[];

export const dynamicParams = false;

export function generateStaticParams() {
  return members.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = members.find((item) => item.slug === slug);

  return {
    title: member ? `${member.name} · Group members` : "Group member",
    description: member?.bio || member?.role,
  };
}

export default async function MemberProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = members.find((item) => item.slug === slug);

  if (!member) notFound();

  const profilePhoto = member.profilePhoto || member.photo;

  const hasDetails = Boolean(
    member.bio ||
      member.education.length ||
      member.researchInterests.length ||
      member.selectedPublications.length,
  );

  return (
    <SiteShell>
      <div className="member-detail site-width">
        <Link className="member-detail-back" href="/members/group">
          <span aria-hidden="true">←</span> All group members
        </Link>

        <section className="member-detail-hero">
          <div className={`member-detail-portrait${profilePhoto ? " has-photo" : ""}`}>
            {profilePhoto ? (
             <img
  src={assetPath(profilePhoto)}
  alt={`${member.name} portrait`}
  style={{
    objectPosition: member.profilePosition || "50% 20%",
  }}
/>
            ) : (
              <><span>{member.initials}</span><small>Portrait</small></>
            )}
          </div>

          <div className="member-detail-intro">
            <p className="eyebrow">{member.role}</p>
            <h1>{member.name}</h1>
            <div className="member-detail-contact">
              <span>Contact</span>
              <a href={`mailto:${member.email}`}>{member.email} ↗</a>
            </div>
          </div>
        </section>

        <section className="member-detail-body">
          <div className="member-detail-lead">
            <p className="section-index">Profile</p>
            <p className={member.bio ? "member-detail-bio" : "member-detail-empty"}>
              {member.bio || "Profile details will be updated soon."}
            </p>
          </div>

          <div className="member-detail-sections">
            {member.education.length > 0 ? (
              <section className="member-detail-section">
                <p className="section-index">Education</p>
                <div className="member-education-list">
                  {member.education.map((item) => (
                    <article key={`${item.degree}-${item.year}`}>
                      <span>{item.year}</span>
                      <div>
                        <h2>{item.degree}</h2>
                        <p>{item.institution}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {member.researchInterests.length > 0 ? (
              <section className="member-detail-section">
                <p className="section-index">Research interests</p>
                <ul className="member-interest-list">
                  {member.researchInterests.map((interest) => <li key={interest}>{interest}</li>)}
                </ul>
              </section>
            ) : null}

            {member.selectedPublications.length > 0 ? (
              <section className="member-detail-section">
                <p className="section-index">Selected publications</p>
                <div className="member-publication-list">
                  {member.selectedPublications.map((publication, index) => (
                    <article key={`${publication.title}-${index}`}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h2>
                          {publication.href ? (
                            <a href={publication.href} target="_blank" rel="noreferrer">
                              {publication.title} ↗
                            </a>
                          ) : publication.title}
                        </h2>
                        {publication.authors ? <p>{publication.authors}</p> : null}
                        {publication.venue || publication.year ? (
                          <small>{[publication.venue, publication.year].filter(Boolean).join(" · ")}</small>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {!hasDetails ? (
              <p className="member-detail-note">More information about this member will be added here.</p>
            ) : null}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
