/**
 * Migration Script: JSON Files to Supabase
 * 
 * This script migrates your existing products and categories from JSON files to Supabase.
 * 
 * Prerequisites:
 * 1. Create Supabase project and tables (see SUPABASE_SETUP.md)
 * 2. Add environment variables to .env.local
 * 3. Run: node scripts/migrate-to-supabase.js
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Error: Missing Supabase environment variables!');
  console.error('Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// File paths
const PRODUCTS_FILE = path.join(__dirname, '../public/data/products.json');
const CATEGORIES_FILE = path.join(__dirname, '../public/data/categories.json');

/**
 * Migrate categories to Supabase
 */
async function migrateCategories() {
  console.log('📁 Reading categories from JSON file...');
  
  try {
    const categoriesData = fs.readFileSync(CATEGORIES_FILE, 'utf8');
    const categories = JSON.parse(categoriesData);
    
    console.log(`Found ${categories.length} categories to migrate`);
    
    if (categories.length === 0) {
      console.log('⚠️  No categories to migrate');
      return;
    }
    
    // Add timestamps to categories
    const categoriesWithTimestamps = categories.map(cat => ({
      ...cat,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }));
    
    console.log('📤 Uploading categories to Supabase...');
    
    const { data, error } = await supabase
      .from('categories')
      .upsert(categoriesWithTimestamps, { onConflict: 'id' })
      .select();
    
    if (error) {
      console.error('❌ Error migrating categories:', error.message);
      return;
    }
    
    console.log(`✅ Successfully migrated ${data.length} categories!`);
    
    // Display migrated categories
    data.forEach((cat, index) => {
      console.log(`   ${index + 1}. ${cat.name} (${cat.id})`);
    });
    
  } catch (error) {
    console.error('❌ Error reading categories file:', error.message);
  }
}

/**
 * Migrate products to Supabase
 */
async function migrateProducts() {
  console.log('\n📁 Reading products from JSON file...');
  
  try {
    const productsData = fs.readFileSync(PRODUCTS_FILE, 'utf8');
    const products = JSON.parse(productsData);
    
    console.log(`Found ${products.length} products to migrate`);
    
    if (products.length === 0) {
      console.log('⚠️  No products to migrate');
      return;
    }
    
    // Add timestamps to products
    const productsWithTimestamps = products.map(prod => ({
      ...prod,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }));
    
    console.log('📤 Uploading products to Supabase...');
    
    const { data, error } = await supabase
      .from('products')
      .upsert(productsWithTimestamps, { onConflict: 'id' })
      .select();
    
    if (error) {
      console.error('❌ Error migrating products:', error.message);
      return;
    }
    
    console.log(`✅ Successfully migrated ${data.length} products!`);
    
    // Display migrated products
    data.forEach((prod, index) => {
      console.log(`   ${index + 1}. ${prod.name} (${prod.id})`);
    });
    
  } catch (error) {
    console.error('❌ Error reading products file:', error.message);
  }
}

/**
 * Verify migration
 */
async function verifyMigration() {
  console.log('\n🔍 Verifying migration...');
  
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('*', { count: 'exact' });
  
  const { data: products, error: prodError } = await supabase
    .from('products')
    .select('*', { count: 'exact' });
  
  if (!catError && !prodError) {
    console.log(`\n📊 Database Status:`);
    console.log(`   Categories: ${categories?.length || 0}`);
    console.log(`   Products: ${products?.length || 0}`);
  }
}

/**
 * Main migration function
 */
async function migrate() {
  console.log('🚀 Starting migration to Supabase...\n');
  console.log('━'.repeat(50));
  
  await migrateCategories();
  await migrateProducts();
  await verifyMigration();
  
  console.log('\n━'.repeat(50));
  console.log('✨ Migration complete!');
  console.log('\nNext steps:');
  console.log('1. Check your Supabase dashboard to verify the data');
  console.log('2. Test the admin panel locally: npm run dev');
  console.log('3. Deploy to Netlify: git push');
  console.log('\n💡 Tip: You can run this script again to update existing data');
}

// Run migration
migrate().catch(error => {
  console.error('❌ Migration failed:', error);
  process.exit(1);
});
