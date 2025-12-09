"use client";

import { useState, useMemo } from "react";
import { Search, Filter, X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products, categories } from "@/data/products";

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory = !selectedCategory || product.category === selectedCategory;
            const matchesSearch = !searchQuery ||
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);
    const clearFilters = () => {
        setSelectedCategory(null);
        setSearchQuery("");
    };
    return (
        <Layout>
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Industrial Safety Products
                        </h1>
                        <p className="text-lg text-primary-foreground/80">
                            Complete range of PPE and safety equipment from trusted brands. Contact us for pricing and bulk order discounts.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                    {/* Search and Filter Bar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        {/* Search */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
                        </div>

                        {/* Mobile Filter Toggle */}
                        <Button variant="outline" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
                            <Filter className="w-4 h-4" />
                            Filters
                            {selectedCategory && <span className="ml-2 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">1</span>}
                        </Button>

                        {/* Clear Filters */}
                        {(selectedCategory || searchQuery) && (<Button variant="ghost" onClick={clearFilters} className="shrink-0">
                            <X className="w-4 h-4" />
                            Clear
                        </Button>)}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Filters */}
                        <aside className={`lg:w-64 shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                            <div className="bg-card rounded-xl border border-border p-4 sticky top-24">
                                <h3 className="font-display text-lg font-bold mb-4">Categories</h3>
                                <div className="space-y-2">
                                    <button onClick={() => setSelectedCategory(null)} className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${!selectedCategory
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted text-foreground"}`}>
                                        All Products ({products.length})
                                    </button>
                                    {categories.map((category) => {
                                        const count = products.filter((p) => p.category === category.id).length;
                                        return (<button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm flex items-center gap-2 ${selectedCategory === category.id
                                            ? "bg-primary text-primary-foreground"
                                            : "hover:bg-muted text-foreground"}`}>
                                            <span>{category.icon}</span>
                                            <span className="flex-1">{category.name}</span>
                                            <span className="text-xs opacity-70">({count})</span>
                                        </button>);
                                    })}
                                </div>
                            </div>
                        </aside>

                        {/* Products Grid */}
                        <div className="flex-1">
                            {/* Results Count */}
                            <div className="mb-6 flex items-center justify-between">
                                <p className="text-muted-foreground">
                                    Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
                                    {selectedCategory && (<span> in <span className="font-semibold text-foreground">
                                        {categories.find(c => c.id === selectedCategory)?.name}
                                    </span></span>)}
                                </p>
                            </div>

                            {filteredProducts.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (<ProductCard key={product.id} product={product} />))}
                            </div>) : (<div className="text-center py-16 bg-card rounded-xl border border-border">
                                <p className="text-xl font-semibold text-foreground mb-2">No products found</p>
                                <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                                <Button variant="outline" onClick={clearFilters}>
                                    Clear Filters
                                </Button>
                            </div>)}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
export default Products;
