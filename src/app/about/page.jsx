"use client";

import { Shield, Award, Truck, Users, CheckCircle, Target, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { generalWhatsAppLink } from "@/data/products";

const About = () => {
    const values = [
        {
            icon: Shield,
            title: "Quality Assurance",
            description: "We only supply genuine, certified safety products from authorized manufacturers.",
        },
        {
            icon: Award,
            title: "Authorized Dealer",
            description: "Official Bata Industrials dealer with access to complete product range.",
        },
        {
            icon: Truck,
            title: "Fast Delivery",
            description: "Same-day local delivery across Ujjain and quick shipping to nearby cities.",
        },
        {
            icon: Users,
            title: "Expert Consultation",
            description: "On-site safety assessment and customized PPE recommendations.",
        },
    ];
    const whyChooseUs = [
        "Genuine Bata Industrial products guaranteed",
        "Complete PPE solutions under one roof",
        "Competitive bulk order pricing",
        "Custom safety kits for MSMEs",
        "Reliable stock availability",
        "Expert safety consultation",
        "Fast local delivery service",
        "After-sales support",
    ];
    return (
        <Layout>
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            About Us
                        </span>
                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
                            Your Trusted Partner in Industrial Safety
                        </h1>
                        <p className="text-lg text-primary-foreground/80">
                            Aurasafety Industrial Solutions is committed to protecting workers across Central India with genuine safety products and expert consultation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                                Who We Are
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                                Protecting Workers Since Day One
                            </h2>
                            <div className="prose prose-lg text-muted-foreground space-y-4">
                                <p>
                                    Aurasafety Industrial Solutions is an authorized dealer of Bata Industrials, offering genuine safety shoes and complete PPE solutions in Ujjain. We supply industrial safety footwear, gloves, helmets, goggles, reflective jackets, and essential workplace safety products for factories, warehouses, construction sites, and MSMEs.
                                </p>
                                <p>
                                    With reliable stock, competitive pricing, and fast local delivery across Ujjain, Indore, Dewas, Ratlam, and Neemuch, Aurasafety Industrial Solutions is your trusted partner for industrial protection and authentic Bata safety footwear.
                                </p>
                                <p>
                                    Contact us for bulk orders, customised kits, and on-site consultation. We understand the unique safety challenges faced by different industries and provide tailored solutions.
                                </p>
                            </div>

                            <Button variant="accent" size="lg" className="mt-8" asChild>
                                <a href={generalWhatsAppLink} target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="w-4 h-4" />
                                    Get in Touch
                                </a>
                            </Button>
                        </div>

                        {/* Image/Stats */}
                        <div className="bg-muted rounded-2xl p-8 md:p-12">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-card rounded-xl shadow-sm">
                                    <div className="font-display text-4xl md:text-5xl font-bold text-primary">100+</div>
                                    <p className="text-muted-foreground mt-2">Products Available</p>
                                </div>
                                <div className="text-center p-6 bg-card rounded-xl shadow-sm">
                                    <div className="font-display text-4xl md:text-5xl font-bold text-primary">5</div>
                                    <p className="text-muted-foreground mt-2">Cities Served</p>
                                </div>
                                <div className="text-center p-6 bg-card rounded-xl shadow-sm">
                                    <div className="font-display text-4xl md:text-5xl font-bold text-primary">24h</div>
                                    <p className="text-muted-foreground mt-2">Local Delivery</p>
                                </div>
                                <div className="text-center p-6 bg-card rounded-xl shadow-sm">
                                    <div className="font-display text-4xl md:text-5xl font-bold text-accent">✓</div>
                                    <p className="text-muted-foreground mt-2">Bata Authorized</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-muted">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            Our Values
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                            What We Stand For
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (<div key={index} className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <value.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="font-display text-lg font-bold text-foreground mb-2">
                                {value.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {value.description}
                            </p>
                        </div>))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                                Why Choose Us
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                                The Aurasafety Advantage
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {whyChooseUs.map((item, index) => (<div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                                <CheckCircle className="w-5 h-5 text-success shrink-0" />
                                <span className="text-foreground">{item}</span>
                            </div>))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <Target className="w-12 h-12 text-accent mx-auto mb-6" />
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Our Mission
                        </h2>
                        <p className="text-lg text-primary-foreground/80 leading-relaxed">
                            To make industrial safety accessible and affordable for every worker in Central India. We believe that every employee deserves quality protective equipment, regardless of their company's size or budget.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
export default About;
