"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Home, AlertTriangle, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);
    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        // Countdown timer
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setIsRedirecting(true);
                    setTimeout(() => router.push("/"), 500);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating circles */}
                <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-spin-slow" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
                {/* Animated Icon */}
                <div className="mb-8 relative">
                    <div className="inline-flex items-center justify-center">
                        {/* Rotating Shield Background */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Shield 
                                className="w-40 h-40 text-primary/10 animate-spin-slow" 
                                strokeWidth={1}
                            />
                        </div>
                        
                        {/* Alert Triangle */}
                        <div className="relative animate-bounce-slow">
                            <AlertTriangle 
                                className="w-24 h-24 text-accent" 
                                strokeWidth={2}
                            />
                        </div>
                    </div>
                </div>

                {/* 404 Title with Animation */}
                <h1 className="font-display text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                    404
                </h1>

                {/* Subtitle */}
                <div className="space-y-2 mb-8">
                    <p className="text-2xl md:text-3xl font-bold text-foreground animate-fade-in-up">
                        Oops! Safety Zone Not Found
                    </p>
                    <p className="text-lg text-muted-foreground animate-fade-in-up delay-100">
                        Looks like you've wandered into an unsafe area. Let's get you back to safety!
                    </p>
                </div>

                {/* Countdown Timer */}
                <div className="mb-8 animate-fade-in-up delay-200">
                    <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 backdrop-blur-sm">
                        <div className="relative">
                            {/* Rotating Circle */}
                            <svg className="w-16 h-16 -rotate-90">
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="28"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                    className="text-zinc-200 dark:text-zinc-700"
                                />
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="28"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray={`${2 * Math.PI * 28}`}
                                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - countdown / 5)}`}
                                    className="text-accent transition-all duration-1000 ease-linear"
                                    strokeLinecap="round"
                                />
                            </svg>
                            {/* Countdown Number */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-bold text-foreground">
                                    {countdown}
                                </span>
                            </div>
                        </div>
                        <div className="text-left">
                            <p className="font-semibold text-foreground">Auto-redirecting...</p>
                            <p className="text-sm text-muted-foreground">Taking you home in {countdown}s</p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                    <Button 
                        size="lg" 
                        className={`gap-2 group ${isRedirecting ? 'animate-pulse' : ''}`}
                        asChild
                    >
                        <Link href="/">
                            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Go Home Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button 
                        size="lg" 
                        variant="outline"
                        asChild
                    >
                        <Link href="/products">
                            <Shield className="w-5 h-5" />
                            Browse Safety Products
                        </Link>
                    </Button>
                </div>

                {/* Bottom Message */}
                <p className="mt-8 text-sm text-muted-foreground animate-fade-in-up delay-400">
                    If you believe this is an error, please{" "}
                    <Link href="/contact" className="text-accent hover:underline font-medium">
                        contact us
                    </Link>
                </p>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                .delay-100 {
                    animation-delay: 0.1s;
                }
                .delay-200 {
                    animation-delay: 0.2s;
                }
                .delay-300 {
                    animation-delay: 0.3s;
                }
                .delay-400 {
                    animation-delay: 0.4s;
                }
                .delay-700 {
                    animation-delay: 0.7s;
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default NotFound;
