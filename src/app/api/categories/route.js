import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CATEGORIES_FILE = path.join(process.cwd(), "public/data/categories.json");

// GET all categories
export async function GET() {
  try {
    const data = fs.readFileSync(CATEGORIES_FILE, "utf8");
    const categories = JSON.parse(data);
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}

// POST new category
export async function POST(request) {
  try {
    const newCategory = await request.json();
    
    // Read existing categories
    let categories = [];
    try {
      const data = fs.readFileSync(CATEGORIES_FILE, "utf8");
      categories = JSON.parse(data);
    } catch (error) {
      categories = [];
    }

    // Check if category with same ID exists
    if (categories.find((c) => c.id === newCategory.id)) {
      return NextResponse.json(
        { error: "Category with this ID already exists" },
        { status: 400 }
      );
    }

    // Add new category
    categories.push(newCategory);

    // Save to file
    fs.writeFileSync(CATEGORIES_FILE, JSON.stringify(categories, null, 2));

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}
