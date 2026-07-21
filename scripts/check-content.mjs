import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentDirectory = path.join(root, "content");
const jsonFiles = fs.readdirSync(contentDirectory).filter((name) => name.endsWith(".json"));

for (const fileName of jsonFiles) {
  const filePath = path.join(contentDirectory, fileName);
  try {
    JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    console.error(`Invalid JSON in content/${fileName}`);
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

const home = JSON.parse(fs.readFileSync(path.join(contentDirectory, "home.json"), "utf8"));
const heroImage = path.join(root, "public", home.hero.image.replace(/^\//, ""));

if (!fs.existsSync(heroImage)) {
  console.error(`Hero image not found: ${home.hero.image}`);
  process.exit(1);
}

const membersContent = JSON.parse(fs.readFileSync(path.join(contentDirectory, "members.json"), "utf8"));
const members = membersContent.group.members;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const seenSlugs = new Set();

for (const member of members) {
  if (!member.slug || !slugPattern.test(member.slug)) {
    console.error(`Invalid member slug for ${member.name}: ${member.slug || "(empty)"}`);
    console.error("Use lowercase letters, numbers, and hyphens only (example: cheolwoo-cho). ");
    process.exit(1);
  }

  if (seenSlugs.has(member.slug)) {
    console.error(`Duplicate member slug: ${member.slug}`);
    process.exit(1);
  }
  seenSlugs.add(member.slug);

  for (const photoField of ["cardPhoto", "profilePhoto", "photo"]) {
    const photo = member[photoField];
    if (!photo) continue;

    const photoPath = path.join(root, "public", photo.replace(/^\//, ""));
    if (!fs.existsSync(photoPath)) {
      console.error(`Member ${photoField} not found for ${member.name}: ${photo}`);
      process.exit(1);
    }
  }
}
const journalsContent = JSON.parse(
  fs.readFileSync(
    path.join(contentDirectory, "journals.json"),
    "utf8",
  ),
);

const publicationDatePattern =
  /^\d{4}(?:-\d{2}(?:-\d{2})?)?$/;

for (const publication of journalsContent.journals) {
  if (
    publication.date &&
    !publicationDatePattern.test(publication.date)
  ) {
    console.error(
      `Invalid publication date for "${publication.title}": ${publication.date}`,
    );
    console.error(
  "Use YYYY, YYYY-MM, or YYYY-MM-DD format.",
);
    process.exit(1);
  }

  if (publication.cover) {
    const coverPath = path.join(
      root,
      "public",
      publication.cover.replace(/^\//, ""),
    );

    if (!fs.existsSync(coverPath)) {
      console.error(
        `Publication cover not found for "${publication.title}": ${publication.cover}`,
      );
      process.exit(1);
    }
  }
}
console.log(`Content check passed (${jsonFiles.length} JSON files, ${members.length} member profiles).`);
