import { Play, Award, CheckCircle, Shield } from "lucide-react";

const BrandShowcase = () => {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-red-950/10 dark:via-zinc-900 dark:to-orange-950/10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 font-bold text-sm tracking-wide mb-4 uppercase border border-red-200 dark:border-red-900">
                        <Award className="w-4 h-4" />
                        Authorized Dealer
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        See <span className="text-red-600">Bata Industrials</span> in Action
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Trusted by industries worldwide. Experience world-class safety footwear engineered for the toughest environments.
                    </p>
                </div>

                {/* Video and Info Grid */}
                <div className="grid lg:grid-cols-5 gap-8 items-center max-w-7xl mx-auto">
                    {/* Video Player - Takes more space */}
                    <div className="lg:col-span-3">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 group">
                            {/* Video Container with 16:9 aspect ratio */}
                            <div className="relative w-full pb-[56.25%] bg-black">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/ZQ6l_UusWxA?si=hq5Rsa6jRyl0JpU-"
                                    title="Bata Industrials Safety Shoes"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                            
                            {/* Play Icon Overlay (decorative) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Video Caption */}
                        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                            <Play className="w-4 h-4 text-red-600" />
                            <span>Learn about Bata Industrials' commitment to safety and innovation</span>
                        </div>
                    </div>

                    {/* Information Cards */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Trust Indicators */}
                        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/50 flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-foreground">Authorized Dealer</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        We are an official authorized dealer of Bata Industrials, ensuring 100% genuine products with full warranty support.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/50 flex items-center justify-center flex-shrink-0">
                                    <Award className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-foreground">Global Standards</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Bata Industrials meets international safety standards, trusted by Fortune 500 companies worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Features List */}
                        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-xl p-6 border border-red-200 dark:border-red-900">
                            <h4 className="font-bold text-sm uppercase tracking-wide mb-4 text-foreground flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-red-600" />
                                Why Choose Bata Industrials?
                            </h4>
                            <ul className="space-y-2 text-sm">
                                {[
                                    'Steel toe protection with comfort design',
                                    'Slip-resistant & oil-resistant soles',
                                    'Breathable materials for all-day wear',
                                    'ISO certified manufacturing process'
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandShowcase;
