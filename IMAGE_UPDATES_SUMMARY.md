# Image Management Updates

## Overview
Updated the product management system to use image URLs instead of file uploads, with enhanced carousel functionality for better user experience.

## Changes Made

### 1. New Component: ImageURLInput
**File**: `src/components/admin/ImageURLInput.jsx`

- Replaces the file-based ImagePicker component
- Allows pasting image URLs (http/https)
- Supports multiple image URLs per product
- Features:
  - URL validation
  - Add/remove images
  - Visual preview grid
  - Keyboard support (Enter to add)
  - Toast notifications for feedback

### 2. Updated: ProductManager
**File**: `src/components/admin/ProductManager.jsx`

- Replaced `ImagePicker` with `ImageURLInput`
- Now accepts and stores image URLs in the products data

### 3. New Component: ImageCarouselModal
**File**: `src/components/ImageCarouselModal.jsx`

- Full-page modal for viewing product images
- Features:
  - Manual navigation only (no auto-scroll)
  - Previous/Next buttons
  - Keyboard navigation (Arrow keys, Escape to close)
  - Image counter display
  - Thumbnail navigation strip
  - Responsive design

### 4. Enhanced: ProductCard
**File**: `src/components/ProductCard.jsx`

- Converted to client component
- Added hover carousel for multiple images:
  - Shows navigation arrows on hover
  - Displays image counter
  - Smooth image transitions
  - "Click to view full size" hint
- Click to open full-page modal carousel
- Backward compatible (supports both `image` and `images` properties)

## Features

### For Admins
1. **Easy Image Management**: Simply paste image URLs
2. **Multiple Images**: Add as many images as needed per product
3. **Visual Preview**: See all images in a grid before saving
4. **Quick Removal**: Hover and click X to remove any image

### For Users
1. **Hover Preview**: Hover over product cards to browse images
2. **Full-Size View**: Click any product image to open full-screen modal
3. **Manual Navigation**: Control image navigation without auto-scrolling
4. **Keyboard Support**: Use arrow keys to navigate in modal
5. **Image Counter**: Always know which image you're viewing

## Data Structure

Products now support the `images` array property:

```json
{
  "id": "product-id",
  "name": "Product Name",
  "description": "Description",
  "category": "category-id",
  "images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg"
  ],
  "featured": false
}
```

## Usage Instructions

### Adding Products with Images

1. Go to Admin Dashboard
2. Fill in product details
3. Paste image URLs in the "Product Images" section
4. Click the "+" button or press Enter to add each URL
5. Add multiple images by repeating the process
6. Remove images by hovering and clicking the X button
7. Save the product

### Viewing Products

1. Browse the products page
2. Hover over any product card to see image carousel
3. Click on any product image to open full-screen view
4. Navigate images using:
   - Arrow buttons
   - Thumbnail strip at bottom
   - Keyboard arrow keys
5. Press Escape or click X to close modal

## Technical Notes

- Images use `unoptimized` prop for external URLs
- Supports both old (`image`) and new (`images`) data structures
- All components are fully responsive
- No auto-scroll in carousel (manual control only)
- Keyboard accessible
