import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PRODUCTS_FILE = path.join(process.cwd(), "public/data/products.json");

// PUT update product
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const updatedProduct = await request.json();

    // Read existing products
    const data = fs.readFileSync(PRODUCTS_FILE, "utf8");
    let products = JSON.parse(data);

    // Find and update product
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    products[index] = { ...products[index], ...updatedProduct };

    // Save to file
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2));

    return NextResponse.json(products[index]);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

// DELETE product
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    // Read existing products
    const data = fs.readFileSync(PRODUCTS_FILE, "utf8");
    let products = JSON.parse(data);

    // Remove product
    products = products.filter((p) => p.id !== id);

    // Save to file
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
