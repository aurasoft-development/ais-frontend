# Quick Start Guide - Admin Panel

## 🚀 Get Started in 3 Steps

### Step 1: Create Environment File

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=aurasafety2026
```

### Step 2: Setup & Run

```bash
# Install dependencies (if not done already)
npm install

# Copy assets to public folder
npm run setup

# Start development server
npm run dev
```

### Step 3: Access Admin Panel

1. Open browser: `http://localhost:3000/admin`
2. Login with your credentials
3. Start managing products and categories!

## 📋 Quick Actions

**Add a Product:**
1. Go to Products tab
2. Fill form (ID, name, description, category)
3. Click "Select Images" → Choose images → Confirm
4. Click "Add Product"

**Add a Category:**
1. Go to Categories tab
2. Fill form (ID, name, emoji icon)
3. Click "Add Category"

**View Products on Website:**
- Homepage: `http://localhost:3000/` (featured products)
- All Products: `http://localhost:3000/products`

## 💡 Tips

- Product IDs should be unique and URL-friendly (e.g., `bata-safety-shoes`)
- Use emojis for category icons (e.g., 👟, 🧤, ⛑️)
- Mark important products as "Featured" to show on homepage
- Select multiple images to create a product gallery

## 📁 Where is Data Stored?

All your products and categories are saved in:
- `public/data/products.json`
- `public/data/categories.json`

You can backup these files or edit them directly!

---

For detailed documentation, see [ADMIN_SETUP.md](./ADMIN_SETUP.md)
