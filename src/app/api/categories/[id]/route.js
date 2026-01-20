import { NextResponse } from "next/server";
import { supabase, TABLES } from "@/lib/supabase";

// PUT update category
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const updatedCategory = await request.json();

    // Add updated timestamp
    const categoryUpdate = {
      ...updatedCategory,
      updated_at: new Date().toISOString()
    };

    // Update category
    const { data, error } = await supabase
      .from(TABLES.CATEGORIES)
      .update(categoryUpdate)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: "Category not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: "Failed to update category", details: error.message },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating category:', error);
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

    // Delete category
    const { error } = await supabase
      .from(TABLES.CATEGORIES)
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: "Failed to delete category", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      { error: "Failed to delete category" },
      { status: 500 }
    );
  }
}
