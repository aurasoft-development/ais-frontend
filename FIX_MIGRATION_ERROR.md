# 🔧 Fix Migration Error - Quick Guide

## The Problem

Your migration failed with:
```
❌ Error migrating products: Could not find the 'featured' column of 'products' in the schema cache
```

**Why?** The original SQL schema was missing two fields that your products actually use:
- `images` (array) - instead of single `image` field
- `featured` (boolean) - to mark featured products

## The Fix (2 minutes)

### Step 1: Drop and Recreate the Products Table

1. Go to your **Supabase Dashboard**
2. Click **SQL Editor** in the left sidebar
3. Click **New query**
4. Copy and paste this SQL:

```sql
-- Drop the existing products table
DROP TABLE IF EXISTS products CASCADE;

-- Create products table with CORRECT schema
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  images TEXT[],  -- Array of image URLs
  featured BOOLEAN DEFAULT false,  -- Featured product flag
  price NUMERIC,
  features TEXT[],
  specifications JSONB,
  inStock BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Enable read access for all users" ON products
  FOR SELECT USING (true);

-- Write access (open for demo)
CREATE POLICY "Enable insert for all users" ON products
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for all users" ON products
  FOR UPDATE USING (true);

CREATE POLICY "Enable delete for all users" ON products
  FOR DELETE USING (true);

-- Create indexes
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_created_at ON products(created_at);
CREATE INDEX idx_products_featured ON products(featured);
```

5. Click **Run** ▶️
6. You should see "Success" message

### Step 2: Run Migration Again

```bash
npm run migrate
```

You should see:
```
✅ Successfully migrated 9 categories!
✅ Successfully migrated 18 products!  ← This time it works!
```

### Step 3: Verify

1. Go to Supabase Dashboard → **Table Editor**
2. Click on **products** table
3. You should see all 18 products with:
   - Multiple images per product
   - Featured flag (true/false)

---

## ✅ Done!

Your migration is now complete. All 18 products and 9 categories are in Supabase.

### Next Steps:

1. **Test locally**:
   ```bash
   npm run dev
   ```
   Go to http://localhost:3000/admin

2. **Deploy to Netlify**:
   ```bash
   git add .
   git commit -m "Fix Supabase schema and complete migration"
   git push
   ```

3. **Test on live site** - Your CRUD operations will now work! 🎉

---

## What Was Fixed?

| Before | After |
|--------|-------|
| ❌ Single `image` field | ✅ `images` array |
| ❌ No `featured` field | ✅ `featured` boolean |
| ❌ Products failed to migrate | ✅ All 18 products migrated |

---

## Need Help?

If migration still fails:
1. Check `.env.local` has correct Supabase credentials
2. Verify the SQL ran successfully (no errors)
3. Check browser console for detailed error messages
