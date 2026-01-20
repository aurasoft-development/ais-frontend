-- ============================================
-- CORRECTED Supabase Schema for Aura Safety Catalog
-- ============================================
-- This is the CORRECT schema that matches your actual product data
-- Run this in Supabase SQL Editor

-- Drop existing tables if they exist (WARNING: This will delete data!)
-- Comment these out if you want to keep existing categories
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

-- Create products table with ALL fields from your JSON
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  images TEXT[],  -- Array of image URLs
  featured BOOLEAN DEFAULT false,  -- Featured flag
  price NUMERIC,
  features TEXT[],
  specifications JSONB,
  inStock BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create categories table
CREATE TABLE categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Enable read access for all users" ON products
  FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON categories
  FOR SELECT USING (true);

-- Create policies for insert/update/delete (currently open for demo)
-- In production, you should restrict these to authenticated users only
CREATE POLICY "Enable insert for all users" ON products
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for all users" ON products
  FOR UPDATE USING (true);

CREATE POLICY "Enable delete for all users" ON products
  FOR DELETE USING (true);

CREATE POLICY "Enable insert for all users" ON categories
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for all users" ON categories
  FOR UPDATE USING (true);

CREATE POLICY "Enable delete for all users" ON categories
  FOR DELETE USING (true);

-- Create indexes for better performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_created_at ON products(created_at);
CREATE INDEX idx_products_featured ON products(featured);
CREATE INDEX idx_categories_name ON categories(name);

-- Verify tables were created
SELECT 'Products table created successfully!' as status;
SELECT 'Categories table created successfully!' as status;
