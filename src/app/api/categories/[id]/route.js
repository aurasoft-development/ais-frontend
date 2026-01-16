import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CATEGORIES_FILE = path.join(process.cwd(), "public/data/categories.json");

// PUT update category
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const updatedCategory = await request.json();

    // Read existing categories
    const data = fs.readFileSync(CATEGORIES_FILE, "utf8");
    let categories = JSON.parse(data);

    // Find and update category
    const index = categories.findIndex((c) => c.id === id);
    if (index === -1) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    categories[index] = { ...categories[index], ...updatedCategory };

    // Save to file
    fs.writeFileSync(CATEGORIES_FILE, JSON.stringify(categories, null, 2));

    return NextResponse.json(categories[index]);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update category" },
      { status: 500 }
    );
  }
}

// DELETE category
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    // Read existing categories
    const data = fs.readFileSync(CATEGORIES_FILE, "utf8");
    let categories = JSON.parse(data);

    // Remove category
    categories = categories.filter((c) => c.id !== id);

    // Save to file
    fs.writeFileSync(CATEGORIES_FILE, JSON.stringify(categories, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete category" },
      { status: 500 }
    );
  }
}
