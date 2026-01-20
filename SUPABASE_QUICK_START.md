# Supabase Quick Start - TL;DR

Quick reference guide to get your CRUD operations working on Netlify.

## 🚀 Quick Setup (5 minutes)

### 1. Create Supabase Project
```
1. Go to https://supabase.com → Sign up (free)
2. Create new project → Wait 2-3 minutes
```

### 2. Create Tables
```
1. Go to SQL Editor in Supabase dashboard
2. Copy & paste the SQL from SUPABASE_SETUP.md (Step 3)
3. Click "Run"
```

### 3. Get API Keys
```
1. Settings → API
2. Copy "Project URL" and "anon public" key
```

### 4. Add Environment Variables

**Local (.env.local file):**
```env
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
```

**Netlify:**
```
1. Site settings → Environment variables
2. Add NEXT_PUBLIC_SUPABASE_URL
3. Add NEXT_PUBLIC_SUPABASE_ANON_KEY
4. Save
```

### 5. Migrate Data
```bash
npm run migrate
```

### 6. Test & Deploy
```bash
# Test locally
npm run dev
# Go to http://localhost:3000/admin

# Deploy
git add .
git commit -m "Add Supabase integration"
git push
```

## ✅ Done!

Your CRUD operations now work on Netlify! 🎉

---

## 📋 SQL for Tables (Copy-Paste)

**⚠️ IMPORTANT: Use this corrected schema that matches your actual data!**

```sql
-- Drop existing tables if needed (WARNING: deletes data!)
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

-- Create products table (CORRECTED - includes images array and featured field)
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  images TEXT[],  -- Array of image URLs (not single image!)
  featured BOOLEAN DEFAULT false,  -- Featured product flag
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

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Enable read access for all users" ON products FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON categories FOR SELECT USING (true);

-- Write access (open for demo - secure this in production!)
CREATE POLICY "Enable insert for all users" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON products FOR UPDATE USING (true);
CREATE POLICY "Enable delete for all users" ON products FOR DELETE USING (true);
CREATE POLICY "Enable insert for all users" ON categories FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON categories FOR UPDATE USING (true);
CREATE POLICY "Enable delete for all users" ON categories FOR DELETE USING (true);

-- Indexes
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_created_at ON products(created_at);
CREATE INDEX idx_products_featured ON products(featured);
CREATE INDEX idx_categories_name ON categories(name);
```

---

## 🔧 Troubleshooting

**Migration fails?**
- Check your .env.local file exists with correct keys
- Make sure tables are created in Supabase

**Still can't edit on Netlify?**
- Verify environment variables are set in Netlify dashboard
- Redeploy after adding env vars
- Check browser console for errors

**Need help?**
- See SUPABASE_SETUP.md for detailed guide
- Check Supabase dashboard → Table Editor to verify data
