import { NextResponse } from "next/server";
import { supabase, TABLES } from "@/lib/supabase";

// PUT update product
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const updatedProduct = await request.json();

    // Add updated timestamp
    const productUpdate = {
      ...updatedProduct,
      updated_at: new Date().toISOString()
    };

    // Update product
    const { data, error } = await supabase
      .from(TABLES.PRODUCTS)
      .update(productUpdate)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: "Failed to update product", details: error.message },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating product:', error);
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

    // Delete product
    const { error } = await supabase
      .from(TABLES.PRODUCTS)
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: "Failed to delete product", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
