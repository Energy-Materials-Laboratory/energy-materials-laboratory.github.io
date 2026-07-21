/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import SiteShell from "../../components/SiteShell";
import galleryContent from "../../../content/gallery.json";
import { assetPath } from "../../../lib/paths";

type GalleryPhoto = {
  src: string;
  alt: string;
  position?: string;
};

type GalleryEvent = {
  slug: string;
  title: string;
  date: string;
  cover: string;
  coverAlt: string;
  coverPosition?: string;
  photos: GalleryPhoto[];
};

const events = galleryContent.events as GalleryEvent[];

export const dynamicParams = false;

/*
 * gallery.json에 등록된 slug를 기준으로
 * GitHub Pages용 상세 페이지를 미리 생성합니다.
 */
export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

/*
 * 브라우저 탭 제목을 행사명에 맞게 설정합니다.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  return {
    title: event ? `${event.title} · Gallery` : "Gallery",
    description: event
      ? `${event.title} photo archive`
      : "Energy Materials Laboratory gallery",
  };
}

export default async function GalleryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  /*
   * photos가 비어 있으면 대표 사진을 대신 표시합니다.
   * 실수로 세부 사진을 넣지 않아도 빈 페이지가 되지 않습니다.
   */
  const photos =
    event.photos.length > 0
      ? event.photos
      : [
          {
            src: event.cover,
            alt: event.coverAlt,
            position: event.coverPosition,
          },
        ];

  return (
    <SiteShell>
      <main className="gallery-detail site-width">
        <Link className="gallery-detail-back" href="/gallery">
          <span aria-hidden="true">←</span>
          All gallery events
        </Link>

        <header className="gallery-detail-header">
          <p className="eyebrow">Lab archive</p>

          <h1>{event.title}</h1>

          <time dateTime={event.date}>
            {event.date.replaceAll("-", ".")}
          </time>
        </header>

        <section
          className="gallery-detail-grid"
          aria-label={`Photos from ${event.title}`}
        >
          {photos.map((photo, index) => (
            <figure
              className="gallery-detail-photo"
              key={`${photo.src}-${index}`}
            >
              <div className="gallery-detail-image">
                <img
                  src={assetPath(photo.src)}
                  alt={photo.alt}
                  style={{
                    objectPosition: photo.position ?? "50% 50%",
                  }}
                />
              </div>

              <figcaption>
                {String(index + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
