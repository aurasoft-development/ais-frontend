import safetyShoes from "@/assets/products/safety-shoes.jpg";
import safetyHelmet from "@/assets/products/safety-helmet.jpg";
import safetyGloves from "@/assets/products/safety-gloves.jpg";
import safetyJacket from "@/assets/products/safety-jacket.jpg";
import safetyGoggles from "@/assets/products/safety-goggles.jpg";
import fireExtinguisher from "@/assets/products/fire-extinguisher.jpg";
import nitrileGloves from "@/assets/products/nitrile-gloves.jpg";
import ledWorkLight from "@/assets/products/led-work-light.jpg";
import bataSafetyShoes from "@/assets/products/Shoes/bata-safety-shoes.jpg";
import cutResistantGloves from "@/assets/products/Gloves/cut-resistant-gloves.jpg";
import rigidSafetyHelmet from "@/assets/products/Helmet/rigid-safety-helmet.jpg";
import reflectiveJacket from "@/assets/products/jackets-vests/reflective-jacket.jpg";
import n95Mask from "@/assets/products/masks-caps/n95-mask.jpg";
import bouffantCap from "@/assets/products/masks-caps/bouffant-cap.jpg";
export const categories = [
    { id: "safety-shoes", name: "Safety Shoes & Footwear", icon: "👟" },
    { id: "gloves", name: "Gloves", icon: "🧤" },
    { id: "helmets", name: "Helmets & Head Protection", icon: "⛑️" },
    { id: "masks-caps", name: "Masks, Caps & Wearables", icon: "😷" },
    { id: "jackets-vests", name: "Jackets & Vests", icon: "🦺" },
    { id: "fire-lockout", name: "Fire & Lockout Equipment", icon: "🔥" },
];
export const products = [
    // Safety Shoes & Footwear
    { id: "bata-safety-shoes", name: "Bata Safety Shoes", description: "Premium steel toe safety shoes from authorized Bata dealer", category: "safety-shoes", image: bataSafetyShoes, featured: true },
    { id: "bata-steel-toe", name: "Bata Industrial Safety Shoes — Steel Toe", description: "Heavy-duty steel toe protection for industrial environments", category: "safety-shoes", image: bataSafetyShoes, featured: true },
    { id: "bata-composite-toe", name: "Bata Industrial Safety Shoes — Composite Toe", description: "Lightweight composite toe for maximum comfort and safety", category: "safety-shoes", image: bataSafetyShoes, featured: true },
    { id: "low-ankle-safety-shoe", name: "Low Ankle Safety Shoe", description: "Comfortable low-cut design for everyday industrial use", category: "safety-shoes", image: safetyShoes },
    { id: "udyogi-safety-shoes", name: "Udyogi Safety Shoes", description: "Reliable industrial safety footwear", category: "safety-shoes", image: safetyShoes },
    { id: "allen-cooper-safety", name: "Allen Cooper Safety Shoes", description: "Premium leather safety shoes with durability", category: "safety-shoes", image: safetyShoes },
    { id: "liberty-safety-shoes", name: "Liberty Safety Shoes", description: "Trusted safety footwear for industrial workers", category: "safety-shoes", image: safetyShoes },
    { id: "gravity-safety-shoe", name: "Gravity Safety Shoe", description: "Lightweight yet sturdy safety footwear", category: "safety-shoes", image: safetyShoes },
    { id: "safety-sports-shoes", name: "Safety Sports Shoes", description: "Athletic-style safety shoes for active work", category: "safety-shoes", image: safetyShoes },
    { id: "industrial-safety-shoes", name: "Industrial Safety Shoes", description: "Heavy-duty protection for factory floors", category: "safety-shoes", image: safetyShoes },
    { id: "steel-toe-safety-shoes", name: "Steel Toe Safety Shoes", description: "Classic steel toe protection", category: "safety-shoes", image: safetyShoes },
    { id: "bata-tigre-pvc", name: "Bata Tigre PVC Safety Shoes", description: "Water-resistant PVC safety footwear", category: "safety-shoes", image: safetyShoes },
    { id: "hillson-safety-shoes", name: "Hillson Safety Shoes", description: "Affordable yet reliable safety footwear", category: "safety-shoes", image: safetyShoes },
    { id: "bata-opel-sporty", name: "Bata Opel Sporty Safety Shoes", description: "Sporty design with safety features", category: "safety-shoes", image: safetyShoes },
    { id: "bata-endura-low-cut", name: "Bata Endura Low Cut Safety Shoes", description: "Low-cut design for flexibility", category: "safety-shoes", image: safetyShoes },
    { id: "bata-vigorous-grey", name: "Bata Vigorous Grey Safety Shoes", description: "Stylish grey safety footwear", category: "safety-shoes", image: safetyShoes },
    { id: "bata-zappy", name: "Bata Zappy Safety Shoes", description: "Quick-wear safety shoes", category: "safety-shoes", image: safetyShoes },
    { id: "bata-robust", name: "Bata Robust Safety Shoes", description: "Extra durable construction", category: "safety-shoes", image: safetyShoes },
    { id: "jcb-leather-safety", name: "JCB Leather Safety Shoes", description: "Premium leather with JCB durability", category: "safety-shoes", image: safetyShoes },
    { id: "bata-endura-b-sports", name: "Bata Endura B Sports Safety Shoes", description: "Sports-inspired safety footwear", category: "safety-shoes", image: safetyShoes },
    { id: "bata-endura-oxford", name: "Bata Endura Safety Shoes Oxford", description: "Oxford-style formal safety shoes", category: "safety-shoes", image: safetyShoes },
    { id: "bata-shield-casual", name: "Bata Shield Casual Safety Shoes", description: "Casual look with full protection", category: "safety-shoes", image: safetyShoes },
    { id: "acme-storm-black", name: "Acme Storm Black Leather Safety Shoes", description: "Storm-proof black leather safety", category: "safety-shoes", image: safetyShoes },
    { id: "jcb-safety-footwear", name: "JCB Safety Footwear Shoes", description: "Authentic JCB safety footwear", category: "safety-shoes", image: safetyShoes },
    { id: "bata-zappy-oxford", name: "Safety Shoes Bata Zappy Oxford", description: "Oxford style with Zappy comfort", category: "safety-shoes", image: safetyShoes },
    { id: "sports-safety-shoes", name: "Sports Safety Shoes", description: "Athletic safety for active work", category: "safety-shoes", image: safetyShoes },
    // Gloves
    { id: "cut-resistant-gloves", name: "Cut-Resistant Work Gloves", description: "High-performance cut protection for industrial tasks", category: "gloves", image: cutResistantGloves, featured: true },
    { id: "nitrile-disposable", name: "Nitrile Disposable Gloves (Box)", description: "Premium nitrile gloves for hygiene and protection", category: "gloves", image: nitrileGloves, featured: true },
    { id: "abrigo-hand-gloves", name: "Abrigo Hand Gloves", description: "Multi-purpose industrial hand protection", category: "gloves", image: safetyGloves },
    { id: "yellow-safety-gloves", name: "Yellow Safety Gloves", description: "High-visibility yellow work gloves", category: "gloves", image: safetyGloves },
    { id: "black-cotton-knitted", name: "Black Cotton Knitted Glove", description: "Comfortable cotton knitted gloves", category: "gloves", image: safetyGloves },
    { id: "gray-soft-safety", name: "Gray Soft Safety Gloves", description: "Soft and flexible safety gloves", category: "gloves", image: safetyGloves },
    { id: "frontier-welding", name: "Frontier Red Arc Welding Gloves", description: "Heat-resistant welding protection", category: "gloves", image: safetyGloves },
    { id: "black-leather-hand", name: "Black Safety Leather Hand Gloves", description: "Premium leather hand protection", category: "gloves", image: safetyGloves },
    { id: "11-inch-nitrile", name: "11 Inch Nitrile Gloves", description: "Extended length nitrile protection", category: "gloves", image: nitrileGloves },
    { id: "aerolite-cut-pro", name: "Gray Nylon Aerolite Cut Pro Hand Gloves", description: "Advanced cut-resistant technology", category: "gloves", image: safetyGloves },
    // Helmets & Head Protection
    { id: "rigid-safety-helmet", name: "Industrial Safety Helmet — Rigid", description: "Heavy-duty rigid helmet for construction sites", category: "helmets", image: rigidSafetyHelmet, featured: true },
    { id: "frp-safety-helmet", name: "FRP Safety Helmet", description: "Fiberglass reinforced plastic helmet", category: "helmets", image: safetyHelmet },
    { id: "concord-safety-helmet", name: "Concord Safety Helmet", description: "Premium Concord brand protection", category: "helmets", image: safetyHelmet },
    { id: "yellow-industrial-helmet", name: "Yellow Industrial Safety Helmets", description: "High-visibility yellow hard hats", category: "helmets", image: safetyHelmet },
    { id: "frp-industrial-helmet", name: "FRP Industrial Safety Helmets", description: "Industrial-grade FRP helmets", category: "helmets", image: safetyHelmet },
    { id: "concord-frp-helmet", name: "Concord FRP Safety Helmet", description: "Concord FRP combination", category: "helmets", image: safetyHelmet },
    { id: "non-woven-medical-cap", name: "Non Woven Medical Cap", description: "Disposable medical head covers", category: "helmets", image: safetyHelmet },
    { id: "construction-helmet", name: "Construction Safety Helmet", description: "Site-specific head protection", category: "helmets", image: safetyHelmet },
    { id: "industrial-helmets", name: "Industrial Safety Helmets", description: "General industrial head protection", category: "helmets", image: safetyHelmet },
    // Masks, Caps & Wearables
    { id: "disposable-head-caps", name: "Disposable Head Caps", description: "Hygienic disposable head covers for clean environments", category: "masks-caps", image: bouffantCap, featured: true },
    { id: "n95-mask", name: "Certified N95 Mask", description: "N95 certified respiratory protection", category: "masks-caps", image: n95Mask },
    { id: "bouffant-cap", name: "Disposable Bouffant Cap", description: "Single-use bouffant hair covers", category: "masks-caps", image: bouffantCap },
    // Jackets & Vests
    { id: "reflective-jacket", name: "Reflective Safety Jacket", description: "High-visibility reflective jacket for road safety", category: "jackets-vests", image: reflectiveJacket, featured: true },
    { id: "reflective-vest", name: "Reflective Safety Vest Jacket", description: "Lightweight reflective vest", category: "jackets-vests", image: safetyJacket },
    { id: "construction-jacket", name: "Construction Safety Jackets", description: "Heavy-duty construction wear", category: "jackets-vests", image: safetyJacket },
    { id: "security-jacket", name: "Security Safety Jackets", description: "Professional security wear", category: "jackets-vests", image: safetyJacket },
    { id: "industrial-jacket", name: "Industrial Safety Jacket", description: "All-purpose industrial protection", category: "jackets-vests", image: safetyJacket },
    // Fire & Lockout Equipment
    { id: "led-work-light", name: "Industrial LED Work Light", description: "Bright, durable LED lighting for industrial environments", category: "fire-lockout", image: ledWorkLight, featured: true },
    { id: "msme-ppe-kit", name: "MSME Starter PPE Kit (Custom Bundle)", description: "Complete PPE kit for small businesses", category: "fire-lockout", image: safetyShoes, featured: true },
    { id: "modular-fire-extinguisher", name: "5kg Automatic Modular Fire Extinguisher", description: "Automatic fire suppression system", category: "fire-lockout", image: fireExtinguisher },
    { id: "kanex-abc-extinguisher", name: "1 Kg Kanex ABC Fire Extinguisher", description: "Compact ABC fire extinguisher", category: "fire-lockout", image: fireExtinguisher },
    { id: "loto-lockout-kit", name: "Loto Lockout Kit", description: "Complete lockout tagout kit", category: "fire-lockout", image: ledWorkLight },
    { id: "vinyl-loto-hasp", name: "Vinyl Coated Loto Lockout Hasp ILP003, ILP005", description: "Durable vinyl coated hasps", category: "fire-lockout", image: ledWorkLight },
    // Safety Goggles (additional)
    { id: "safety-goggles", name: "Safety Goggles", description: "Impact-resistant eye protection for industrial use", category: "helmets", image: safetyGoggles, featured: true },
];
export const featuredProducts = products.filter(p => p.featured);
export const getProductsByCategory = (categoryId) => products.filter(p => p.category === categoryId);
export const getWhatsAppLink = (productName) => {
    const message = encodeURIComponent(`Hello Aurasafety Industrial Solutions, I am interested in ${productName}. Please share pricing and availability.`);
    return `https://wa.me/919111098936?text=${message}`;
};
export const generalWhatsAppLink = "https://wa.me/919111098936?text=" + encodeURIComponent("Hello Aurasafety Industrial Solutions, I would like to inquire about your products and services.");
