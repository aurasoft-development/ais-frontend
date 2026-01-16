import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source and destination directories
const srcDir = path.join(__dirname, "../src/assets/products");
const destDir = path.join(__dirname, "../public/assets/products");

// Function to recursively copy directory
function copyRecursive(src, dest) {
  // Check if source directory exists
  if (!fs.existsSync(src)) {
    console.log(`Source directory not found: ${src}. Skipping asset copy.`);
    return;
  }

  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectory
      copyRecursive(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${entry.name}`);
    }
  }
}

try {
  console.log("Copying assets from src/assets/products to public/assets/products...");
  copyRecursive(srcDir, destDir);
  console.log("✓ Asset copy process completed!");
} catch (error) {
  console.error("Error copying assets:", error);
  process.exit(1);
}
