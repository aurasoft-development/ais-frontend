import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PRODUCTS_FILE = path.join(process.cwd(), "public/data/products.json");

// GET all products
export async function GET() {
  try {
    const data = fs.readFileSync(PRODUCTS_FILE, "utf8");
    const products = JSON.parse(data);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}

// POST new product
export async function POST(request) {
  try {
    const newProduct = await request.json();
    
    // Read existing products
    let products = [];
    try {
      const data = fs.readFileSync(PRODUCTS_FILE, "utf8");
      products = JSON.parse(data);
    } catch (error) {
      products = [];
    }

    // Check if product with same ID exists
    const existingProduct = products.find((p) => p.id === newProduct.id);
    if (existingProduct) {
      return NextResponse.json(
        { 
          error: "Product with this ID already exists",
          message: `A product with ID "${newProduct.id}" already exists. Please use a different Product ID.`,
          existingProduct: existingProduct.name
        },
        { status: 400 }
      );
    }

    // Add new product
    products.push(newProduct);

    // Save to file
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2));

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
