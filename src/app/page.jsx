import Link from "next/link";
import { Shield, Package, Wrench, Truck, Users, ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import TrustBadge from "@/components/TrustBadge";
import Layout from "@/components/layout/Layout";
import { featuredProducts, generalWhatsAppLink } from "@/data/products";

export default function Home() {
    const trustBadges = [
        {
            icon: Shield,
            title: "Authorized Bata Dealer",
            description: "Genuine Bata Industrials products guaranteed",
        },
        {
            icon: Package,
            title: "Bulk Orders Available",
            description: "Special pricing for large quantity orders",
        },
        {
            icon: Wrench,
            title: "Custom PPE Kits",
            description: "Tailored safety solutions for your needs",
        },
        {
            icon: Truck,
            title: "Fast Delivery",
            description: "Fast local delivery across service areas",
        },
        {
            icon: Users,
            title: "On-Site Consultation",
            description: "Expert safety assessment at your location",
        },
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-hero-gradient text-primary-foreground py-16 md:py-24 lg:py-32 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center animate-slide-up">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">Authorized Bata Industrials Dealer</span>
                        </div>

                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                            Your Trusted Partner in{" "}
                            <span className="text-accent">Industrial Safety</span> & PPE Solutions
                        </h1>

                        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                            Complete Fire & Safety Supplies for Factories, Warehouses, Construction Sites & MSMEs
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button variant="hero" size="xl" asChild>
                                <Link href="/products">
                                    View Products
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>
                            <Button variant="heroOutline" size="xl" asChild>
                                <a href={generalWhatsAppLink} target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="w-5 h-5" />
                                    Contact on WhatsApp
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 md:py-16 bg-muted">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                        {trustBadges.map((badge, index) => (<TrustBadge key={index} icon={badge.icon} title={badge.title} description={badge.description} />))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10 md:mb-14">
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            Our Products
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                            Featured Safety Products
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Explore our range of premium industrial safety equipments from trusted brands
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {featuredProducts.slice(0, 8).map((product) => (<ProductCard key={product.id} product={product} />))}
                    </div>

                    <div className="text-center mt-10">
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/products">
                                View All Products
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-12 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        <Truck className="w-10 h-10 text-accent" />
                        <div>
                            <h3 className="font-display text-xl md:text-2xl font-bold">
                                Fast Delivery Across Central India | Serving Pan India
                            </h3>
                            <p className="text-primary-foreground/80 mt-1">
                                Fast delivery in Ujjain, Indore, Dewas, Ratlam & Neemuch
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Snippet */}
            <section className="py-16 md:py-24 bg-muted">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Why Choose Aura Safety?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Aurasafety Industrial Solutions is an authorized dealer of Bata Industrials, offering genuine safety shoes and complete PPE solutions in Ujjain. We supply industrial safety footwear, gloves, helmets, goggles, reflective jackets, and essential workplace safety products for factories, warehouses, construction sites, and MSMEs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button variant="default" size="lg" asChild>
                                <Link href="/about">
                                    Learn More About Us
                                </Link>
                            </Button>
                            <Button variant="accent" size="lg" asChild>
                                <a href={generalWhatsAppLink} target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="w-4 h-4" />
                                    Get in Touch
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
