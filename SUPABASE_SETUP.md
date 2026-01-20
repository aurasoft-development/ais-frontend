# Supabase Setup Guide

This guide will help you set up Supabase for your Aura Safety Catalog to enable CRUD operations on Netlify.

## Why Supabase?

Your application was using file system writes (`fs.writeFileSync()`) which work on localhost but **fail on Netlify** because:
- Netlify uses serverless functions with a **read-only file system**
- Data cannot be persisted to JSON files in production

Supabase provides a cloud-based PostgreSQL database that works perfectly with serverless deployments.

---

## Step 1: Create a Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Start your project"** and sign up (free tier is sufficient)
3. Create a new organization if prompted

---

## Step 2: Create a New Project

1. Click **"New Project"**
2. Fill in the details:
   - **Name**: `aura-safety-catalog` (or any name you prefer)
   - **Database Password**: Choose a strong password (save it securely)
   - **Region**: Choose the closest region to your users
   - **Pricing Plan**: Free tier is fine to start
3. Click **"Create new project"**
4. Wait 2-3 minutes for the project to initialize

---

## Step 3: Create Database Tables

1. In your Supabase project dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Copy and paste the following SQL:

```sql
-- Drop existing tables if they exist (only if recreating!)
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

-- Create products table (CORRECTED schema)
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  images TEXT[],  -- Array of image URLs (CORRECTED from single 'image')
  featured BOOLEAN DEFAULT false,  -- Featured product flag (ADDED)
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
```

4. Click **"Run"** to execute the SQL
5. You should see "Success. No rows returned" message

---

## Step 4: Get Your API Keys

1. In your Supabase project, click **"Settings"** (gear icon) in the left sidebar
2. Click **"API"** under Project Settings
3. Find these two values:
   - **Project URL** (under "Project URL")
   - **anon public key** (under "Project API keys")

---

## Step 5: Configure Environment Variables

### For Local Development:

1. In your project root, create a file named `.env.local` (if it doesn't exist)
2. Add the following (replace with your actual values):

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

3. Save the file

### For Netlify Deployment:

1. Go to your Netlify dashboard
2. Select your site
3. Go to **"Site settings"** → **"Environment variables"**
4. Click **"Add a variable"** and add:
   - **Key**: `NEXT_PUBLIC_SUPABASE_URL`
   - **Value**: Your Supabase project URL
5. Click **"Add a variable"** again and add:
   - **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value**: Your Supabase anon key
6. Click **"Save"**

---

## Step 6: Migrate Existing Data

You need to import your existing products and categories into Supabase.

### Option A: Use the Supabase Dashboard (Recommended for small datasets)

1. In Supabase, click **"Table Editor"** in the left sidebar
2. Select the **products** table
3. Click **"Insert"** → **"Insert row"**
4. Manually add your products one by one

### Option B: Use SQL Insert Statements (Faster for bulk data)

1. Open `public/data/products.json` and `public/data/categories.json` in your project
2. Use the migration script (see Step 7 below)

---

## Step 7: Run the Migration Script

I've created a migration helper script for you:

```bash
# In your project directory
node scripts/migrate-to-supabase.js
```

This will read your existing JSON files and insert the data into Supabase.

---

## Step 8: Test Locally

1. Restart your development server:
```bash
npm run dev
```

2. Go to `http://localhost:3000/admin`
3. Try adding, editing, or deleting a product or category
4. Check the Supabase dashboard to verify the changes

---

## Step 9: Deploy to Netlify

1. Commit your changes:
```bash
git add .
git commit -m "Migrate to Supabase for persistent storage"
git push
```

2. Netlify will automatically rebuild your site
3. After deployment, test the admin features on your live site!

---

## Troubleshooting

### "Missing Supabase environment variables" error
- Make sure you've added the environment variables in Netlify
- Make sure you've created `.env.local` for local development
- Restart your dev server after adding environment variables

### "Failed to create product" error
- Check that you ran the SQL table creation script
- Verify your API keys are correct
- Check the browser console for detailed error messages

### Data not showing up
- Check the Supabase Table Editor to see if data exists
- Verify Row Level Security policies are set correctly
- Check browser Network tab for API errors

### Netlify build fails
- Make sure you've committed all changes
- Check that `@supabase/supabase-js` is in your `package.json` dependencies
- Review the Netlify build logs for specific errors

---

## Security Considerations

**Important**: The current setup allows anyone to add/edit/delete products and categories. This is fine for a demo, but for production you should:

1. **Add Authentication**: Use Supabase Auth to require login
2. **Update RLS Policies**: Restrict write operations to authenticated admins only
3. **Add Admin Role**: Create an admin role and check it before allowing modifications

Example of a more secure policy:
```sql
-- Only allow authenticated users with admin role to modify data
CREATE POLICY "Only admins can modify" ON products
  FOR ALL USING (
    auth.role() = 'authenticated' AND 
    auth.jwt() ->> 'user_role' = 'admin'
  );
```

---

## Need Help?

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord Community](https://discord.supabase.com)
- Check the browser console for error messages
- Review Netlify function logs for server-side errors

---

## Summary

✅ Installed Supabase client library  
✅ Updated all API routes to use Supabase  
✅ Created database tables with proper schema  
✅ Configured environment variables  
✅ Your CRUD operations will now work on Netlify!

The key difference: Instead of writing to local JSON files (which doesn't work on serverless), your app now writes to a cloud database that persists data permanently.
