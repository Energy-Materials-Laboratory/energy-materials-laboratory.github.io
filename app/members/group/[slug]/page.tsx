/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import EmailCopyButton from "../../../components/EmailCopyButton";
import SiteShell from "../../../components/SiteShell";
import membersContent from "../../../../content/members.json";
import { assetPath } from "../../../../lib/paths";
import type { PublicationAuthor } from "../../../../lib/publications";

type Education = {
  degree: string;
  institution: string;
  year: string;
};

type SelectedPublication = {
  title: string;
  authors?: string | PublicationAuthor[];
  venue?: string;
  year?: string;
  href?: string;
  doi?: string;
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
              <EmailCopyButton email={member.email} />
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
            ) : (
              <section className="member-detail-section">
                <p className="section-index">Education</p>
                <p className="member-detail-empty">Education details will be updated soon.</p>
              </section>
            )}

          </div>

              <section className="member-detail-section member-detail-publications">
                <p className="section-index">Publications</p>
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
                        {publication.authors ? (
                          <p>
                            {typeof publication.authors === "string"
                              ? publication.authors
                              : publication.authors.map((author, authorIndex, authors) => (
                                  <span key={`${author.name}-${authorIndex}`}>
                                    {authorIndex > 0 ? (authorIndex === authors.length - 1 ? ", and " : ", ") : ""}
                                    {author.bold ? <strong>{author.name}</strong> : author.name}
                                    {author.mark ? <sup>{author.mark}</sup> : null}
                                  </span>
                                ))}
                          </p>
                        ) : null}
                        {publication.venue || publication.year ? (
                          <small>
                            {[publication.venue, publication.year].filter(Boolean).join(" · ")}
                            {publication.doi ? (
                              <> · <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noreferrer">DOI: {publication.doi}</a></>
                            ) : null}
                          </small>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
                {member.selectedPublications.length === 0 ? (
                  <p className="member-detail-empty">No publications listed yet.</p>
                ) : null}
              </section>
        </section>
      </div>
    </SiteShell>
  );
}
