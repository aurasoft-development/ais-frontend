import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Recursively get all image files from a directory
function getImagesFromDir(dir, baseDir = dir) {
  let images = [];
  
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        // Recursively search subdirectories
        images = images.concat(getImagesFromDir(fullPath, baseDir));
      } else if (item.isFile()) {
        // Check if it's an image file
        const ext = path.extname(item.name).toLowerCase();
        if ([".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"].includes(ext)) {
          // Convert to relative path for Next.js Image component
          const relativePath = fullPath
            .replace(baseDir, "")
            .replace(/\\/g, "/")
            .replace(/^\//, "");
          images.push(`/assets/products/${relativePath}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }
  
  return images;
}

export async function GET() {
  try {
    // First check public/assets/products (after copy-assets script runs)
    let assetsDir = path.join(process.cwd(), "public/assets/products");
    
    // Fallback to src/assets/products if public folder doesn't exist
    if (!fs.existsSync(assetsDir)) {
      assetsDir = path.join(process.cwd(), "src/assets/products");
    }
    
    if (!fs.existsSync(assetsDir)) {
      return NextResponse.json([]);
    }
    
    const images = getImagesFromDir(assetsDir);
    
    return NextResponse.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
