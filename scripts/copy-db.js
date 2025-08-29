const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "cratediggerDB.csv");
const destDir = path.join(__dirname, "..", "docs");
const dest = path.join(destDir, "cratediggerDB.csv");

if (!fs.existsSync(src)) {
  console.error("cratediggerDB.csv not found in project root!");
  process.exit(1);
}

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(src, dest);
console.log("cratediggerDB.csv copied to docs/.");
