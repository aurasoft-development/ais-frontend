// Client-side data loader for products and categories
// This fetches from the API routes which read from JSON files

export async function fetchCategories() {
  try {
    const res = await fetch("/api/categories", { cache: "no-store" });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
  
  // Fallback to static data
  const { categories } = await import("@/data/products");
  return categories;
}

export async function fetchProducts() {
  try {
    const res = await fetch("/api/products", { cache: "no-store" });
    if (res.ok) {
      const products = await res.json();
      // Ensure both images array and single image property exist for compatibility
      return products.map(product => ({
        ...product,
        images: product.images || (product.image ? [product.image] : []),
        image: product.images?.[0] || product.image,
      }));
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  
  // Fallback to static data
  const { products } = await import("@/data/products");
  return products;
}

export async function fetchFeaturedProducts() {
  const products = await fetchProducts();
  return products.filter(p => p.featured);
}
