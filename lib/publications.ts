export type PublicationAuthor = {
  name: string;
  mark?: string;
  bold?: boolean;
};

export type JournalPublication = {
  /*
   * 최종적으로 모든 논문에 YYYY-MM-DD 형식으로 입력합니다.
   * 기존 데이터와의 임시 호환을 위해 optional로 둡니다.
   */
  date?: string;

  /*
   * 기존 publications.json에 남아 있는 year와의 임시 호환용입니다.
   * 새 논문에는 year를 넣지 않아도 됩니다.
   */
  year?: string;

  title: string;
  authors: PublicationAuthor[] | string;
  venue: string;

  doi?: string;
  cover?: string;
  coverAlt?: string;
};

export function getPublicationSortDate(
  publication: JournalPublication,
): string {
  if (publication.date) {
    return publication.date;
  }

  if (publication.year) {
    return `${publication.year}-01-01`;
  }

  return "0000-01-01";
}

export function getPublicationYear(
  publication: JournalPublication,
): string {
  if (publication.date) {
    return publication.date.slice(0, 4);
  }

  return publication.year ?? "Undated";
}

export function sortPublications(
  publications: readonly JournalPublication[],
): JournalPublication[] {
  return [...publications].sort((a, b) =>
    getPublicationSortDate(b).localeCompare(
      getPublicationSortDate(a),
    ),
  );
}
