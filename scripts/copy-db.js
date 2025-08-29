// scripts/copy-db.js
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "cratediggerDB.csv");
const dest = path.join(__dirname, "..", "docs", "cratediggerDB.csv");

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log("Copied cratediggerDB.csv to docs/");
} else {
  console.warn("cratediggerDB.csv not found in project root.");
}