import { Download, MessageCircle, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generalWhatsAppLink } from "@/data/products";

const OfferingsSection = () => {
    const offerings = [
        {
            id: "bata",
            badge: "Authorized Dealer",
            badgeColor: "bg-red-100 text-red-700 border-red-200",
            iconColor: "text-red-600",
            title: "Bata Industrials",
            description: "Engineered for the toughest environments on Earth. Bata Industrials combines cutting-edge technology with comfort-driven design to ensure your workforce stays safe and productive.",
            catalogLink: "/offerings/bata-catalog.pdf",
            catalogName: "Bata-Industrial-Catalogue.pdf",
            primaryColor: "bg-red-600 hover:bg-red-700 shadow-red-600/20",
            gradient: "from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20"
        },
        {
            id: "abrigo",
            badge: "Premium Protection",
            badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
            iconColor: "text-blue-600",
            title: "Abrigo Safety",
            description: "A complete ecosystem of protective gear designed for the modern industrial athlete. Abrigo products deliver superior ergonomics without sacrificing safety ratings.",
            features: ['Impact Protection', 'Cut Resistance Level 5', 'High Visibility', 'Ergonomic Fit'],
            catalogLink: "/offerings/abrigo-catalog.pdf",
            catalogName: "Abrigo-Catalog.pdf",
            primaryColor: "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20",
            gradient: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20"
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-wide mb-4 uppercase border border-accent/20">
                        <Award className="w-4 h-4" />
                        Premium Brands
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Our <span className="text-accent">Offerings</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Authorized dealer of globe-leading safety brands. Experience protection without compromise.
                    </p>
                </div>

                {/* Offerings Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {offerings.map((offering, index) => (
                        <div 
                            key={offering.id}
                            className={`group relative bg-gradient-to-br ${offering.gradient} border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
                        >
                            {/* Decorative Element */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                            
                            <div className="relative z-10 space-y-6">
                                {/* Badge */}
                                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${offering.badgeColor} font-bold text-xs tracking-wide uppercase border`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${offering.iconColor} bg-current animate-pulse`} />
                                    {offering.badge}
                                </div>

                                {/* Title */}
                                <div>
                                    <h3 className="font-display text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
                                        {offering.title}
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                        {offering.description}
                                    </p>
                                </div>

                                {/* Features (Abrigo only) */}
                                {offering.features && (
                                    <div className="grid grid-cols-2 gap-2">
                                        {offering.features.map((feature) => (
                                            <div 
                                                key={feature} 
                                                className="flex items-center gap-2 p-2 rounded-lg bg-white/60 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-sm"
                                            >
                                                <div className={`w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0`}>
                                                    <ArrowRight className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="font-medium text-xs text-zinc-700 dark:text-zinc-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                    <Button 
                                        size="lg" 
                                        className={`${offering.primaryColor} shadow-lg flex-1 group/btn`}
                                        asChild
                                    >
                                        <a 
                                            href={offering.catalogLink} 
                                            download={offering.catalogName} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <Download className="w-4 h-4 group-hover/btn:animate-bounce" />
                                            Download Catalogue
                                        </a>
                                    </Button>
                                    <Button 
                                        size="lg" 
                                        variant="outline" 
                                        className="border-2 flex-1 group/btn"
                                        asChild
                                    >
                                        <a 
                                            href={generalWhatsAppLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <MessageCircle className="w-4 h-4 text-green-600 group-hover/btn:scale-110 transition-transform" />
                                            {offering.id === "bata" ? "Get Best Pricing" : "Inquire Now"}
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-sm text-muted-foreground mb-4">
                        Need help finding the right safety equipment for your business?
                    </p>
                    <Button variant="default" size="lg" asChild>
                        <a href={generalWhatsAppLink} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-4 h-4" />
                            Contact Our Safety Experts
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default OfferingsSection;
