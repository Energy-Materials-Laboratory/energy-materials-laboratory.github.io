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

console.log(`Content check passed (${jsonFiles.length} JSON files).`);
