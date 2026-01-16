// Utility to load products and categories from JSON files
// Falls back to static data if JSON files don't exist

export async function loadCategories() {
  try {
    const response = await fetch("/data/categories.json", {
      cache: "no-store",
    });
    
    if (response.ok) {
      const jsonCategories = await response.json();
      if (jsonCategories && jsonCategories.length > 0) {
        return jsonCategories;
      }
    }
  } catch (error) {
    console.error("Error loading categories from JSON:", error);
  }

  // Fallback to static categories
  const { categories } = await import("@/data/products");
  return categories;
}

export async function loadProducts() {
  try {
    const response = await fetch("/data/products.json", {
      cache: "no-store",
    });
    
    if (response.ok) {
      const jsonProducts = await response.json();
      if (jsonProducts && jsonProducts.length > 0) {
        // Map images array to single image for backward compatibility
        return jsonProducts.map(product => ({
          ...product,
          image: product.images?.[0] || product.image,
        }));
      }
    }
  } catch (error) {
    console.error("Error loading products from JSON:", error);
  }

  // Fallback to static products
  const { products } = await import("@/data/products");
  return products;
}

export async function loadFeaturedProducts() {
  const products = await loadProducts();
  return products.filter(p => p.featured);
}

export function getProductsByCategory(products, categoryId) {
  return products.filter(p => p.category === categoryId);
}
