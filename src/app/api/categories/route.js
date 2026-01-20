import { NextResponse } from "next/server";
import { supabase, TABLES } from "@/lib/supabase";

// GET all categories
export async function GET() {
  try {
    const { data: categories, error } = await supabase
      .from(TABLES.CATEGORIES)
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(categories || []);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json([], { status: 200 });
  }
}

// POST new category
export async function POST(request) {
  try {
    const newCategory = await request.json();
    
    // Check if category with same ID exists
    const { data: existingCategory } = await supabase
      .from(TABLES.CATEGORIES)
      .select('*')
      .eq('id', newCategory.id)
      .single();

    if (existingCategory) {
      return NextResponse.json(
        { 
          error: "Category with this ID already exists",
          message: `A category with ID "${newCategory.id}" already exists. Please use a different Category ID.`
        },
        { status: 400 }
      );
    }

    // Add timestamp
    const categoryWithTimestamp = {
      ...newCategory,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    // Insert new category
    const { data, error } = await supabase
      .from(TABLES.CATEGORIES)
      .insert([categoryWithTimestamp])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: "Failed to create category", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}
