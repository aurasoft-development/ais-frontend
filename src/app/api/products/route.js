import { NextResponse } from "next/server";
import { supabase, TABLES } from "@/lib/supabase";

// GET all products
export async function GET() {
  try {
    const { data: products, error } = await supabase
      .from(TABLES.PRODUCTS)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(products || []);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json([], { status: 200 });
  }
}

// POST new product
export async function POST(request) {
  try {
    const newProduct = await request.json();
    
    // Check if product with same ID exists
    const { data: existingProduct } = await supabase
      .from(TABLES.PRODUCTS)
      .select('*')
      .eq('id', newProduct.id)
      .single();

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

    // Add timestamp
    const productWithTimestamp = {
      ...newProduct,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    // Insert new product
    const { data, error } = await supabase
      .from(TABLES.PRODUCTS)
      .insert([productWithTimestamp])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: "Failed to create product", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
