# Admin Panel Setup Guide

This guide explains how to set up and use the admin panel for managing products and categories in your Aura Safety Catalog application.

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=aurasafety2026
```

**Note:** These credentials are used for admin authentication. Change them to secure values in production.

## 📦 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Copy Assets to Public Folder

Before running the app, copy product images from `src/assets` to `public/assets`:

```bash
npm run setup
```

Or manually:

```bash
npm run copy-assets
```

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 🎯 Admin Panel Features

### Accessing the Admin Panel

1. Navigate to `/admin` in your browser
2. Login with credentials from `.env.local`
3. You'll be redirected to the admin dashboard at `/admin/dashboard`

### Managing Categories

**Create a New Category:**
1. Go to the "Categories" tab
2. Fill in:
   - Category ID (e.g., `safety-shoes`)
   - Category Name (e.g., `Safety Shoes & Footwear`)
   - Icon (emoji, e.g., `👟`)
3. Click "Add Category"

**Edit a Category:**
1. Click the edit button (pencil icon) next to the category
2. Update the fields
3. Click "Update Category"

**Delete a Category:**
1. Click the delete button (trash icon)
2. Confirm deletion in the dialog

### Managing Products

**Create a New Product:**
1. Go to the "Products" tab
2. Fill in:
   - Product ID (unique identifier, e.g., `bata-safety-shoes`)
   - Category (select from dropdown)
   - Product Name (e.g., `Bata Safety Shoes`)
   - Description (product details)
3. Click "Select Images" to choose product images:
   - Search for images from your assets folder
   - Click to select multiple images
   - Confirm selection
4. Toggle "Featured Product" if you want it on the homepage
5. Click "Add Product"

**Edit a Product:**
1. Click the edit button next to the product
2. Update fields as needed
3. Click "Update Product"

**Delete a Product:**
1. Click the delete button
2. Confirm deletion

### Image Management

The Image Picker allows you to:
- Browse all images from `src/assets/products` folder
- Search images by name
- Select multiple images for a product
- Preview selected images

## 📁 Data Storage

### JSON Files

All data is stored in JSON files located at:
- `public/data/categories.json` - Category data
- `public/data/products.json` - Product data

### Product Data Structure

```json
{
  "id": "bata-safety-shoes",
  "name": "Bata Safety Shoes",
  "description": "Premium steel toe safety shoes",
  "category": "safety-shoes",
  "images": [
    "/assets/products/Shoes/bata-safety-shoes.jpg",
    "/assets/products/Shoes/bata-safety-shoes-2.jpg"
  ],
  "featured": true
}
```

### Category Data Structure

```json
{
  "id": "safety-shoes",
  "name": "Safety Shoes & Footwear",
  "icon": "👟"
}
```

## 🖼️ Adding New Images

1. Add your image files to `src/assets/products/` folder
   - You can organize them in subdirectories (e.g., `Gloves/`, `Shoes/`)
2. Run the copy script:
   ```bash
   npm run copy-assets
   ```
3. Images will be available in the Image Picker

Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`

## 🚀 Deployment

Before deploying to production:

1. **Update credentials** in `.env.local` to strong, secure values
2. **Run the setup script** to copy assets:
   ```bash
   npm run setup
   ```
3. **Build the application**:
   ```bash
   npm run build
   ```

The build script automatically runs `copy-assets` before building.

## 🔒 Security Notes

- Current authentication is client-side only for simplicity
- For production, consider implementing:
  - Server-side authentication (e.g., NextAuth.js)
  - Environment variables for API keys
  - Role-based access control
  - Secure session management

## 📝 API Routes

The following API routes are available:

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create a new category
- `PUT /api/categories/[id]` - Update a category
- `DELETE /api/categories/[id]` - Delete a category

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `PUT /api/products/[id]` - Update a product
- `DELETE /api/products/[id]` - Delete a product

### Images
- `GET /api/images` - Get list of all available images from assets folder

## 🎨 Frontend Integration

Products and categories are automatically displayed on:
- **Homepage** (`/`) - Featured products
- **Products Page** (`/products`) - All products with filtering

The app automatically loads data from JSON files first, falling back to static data if JSON files are empty.

## 🐛 Troubleshooting

**Images not showing up:**
- Run `npm run copy-assets` to copy images to public folder
- Check that images exist in `src/assets/products/`

**Login not working:**
- Verify `.env.local` file exists in root directory
- Check that variables are named correctly
- Clear browser cache and try again

**Products not appearing:**
- Check `public/data/products.json` file
- Verify product data structure matches the schema
- Check browser console for errors

**API errors:**
- Ensure JSON files have proper permissions
- Check that `public/data/` directory exists
- Look at server console for error messages

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI Components](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
