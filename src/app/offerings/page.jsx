"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, MessageCircle, ArrowRight, Play, ZoomIn } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { generalWhatsAppLink } from "@/data/products";

const Offerings = () => {
    const [openBata, setOpenBata] = useState(false);
    const [openAbrigo, setOpenAbrigo] = useState(false);
    const [bataIndex, setBataIndex] = useState(0);
    const [abrigoIndex, setAbrigoIndex] = useState(0);

    const bataImages = [
        "/offerings/bata-1.jpg",
        "/offerings/bata-2.jpg",
        "/offerings/bata-3.jpg",
        "/offerings/bata-4.jpg",
        "/offerings/bata-5.jpg",
        "/offerings/bata-6.jpg",
        "/offerings/bata-7.jpg",
        "/offerings/bata-8.jpg",
        "/offerings/bata-9.jpg",
        "/offerings/bata-10.jpg",
    ];

    const bataVideos = [
        { src: "/offerings/bata-intro.mp4", poster: "/offerings/bata-1.jpg" },
        { src: "/offerings/bata-video-2.mp4", poster: "/offerings/bata-2.jpg" },
        { src: "/offerings/bata-video-3.mp4", poster: "/offerings/bata-3.jpg" },
        { src: "/offerings/bata-video-4.mp4", poster: "/offerings/bata-4.jpg" },
        { src: "/offerings/bata-video-5.mp4", poster: "/offerings/bata-5.jpg" },
    ];

    // Placeholder Abrigo images as extraction failed or provided no distinct images
    const abrigoImages = [
        "/offerings/abrigo-1.jpg",
        "/offerings/abrigo-2.jpg",
        "/offerings/abrigo-3.jpg",
    ];

    return (
        <Layout>
            <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
                    <Image
                        src="/offerings/bata-1.jpg"
                        alt="Background"
                        fill
                        className="object-cover blur-sm scale-110"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up">
                        Premium Safety <span className="text-secondary text-yellow-500">Solutions</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light animate-fade-in-up delay-100">
                        Authorized dealer of globe-leading safety brands. Experience protection without compromise.
                    </p>
                </div>
            </section>

            {/* Bata Section */}
            <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-16">
                        {/* Header Area */}
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 font-bold text-sm tracking-wide mb-6 uppercase">
                                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                                Authorized Dealer
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                                Bata Industrials
                            </h2>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                Engineered for the toughest environments on Earth. Bata Industrials combines cutting-edge technology with comfort-driven design to ensure your workforce stays safe and productive.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="xl" className="h-14 px-8 text-lg gap-3 bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20" asChild>
                                    <a href="/offerings/bata-catalog.pdf" download="Bata-Industrial-Catalogue.pdf" target="_blank" rel="noopener noreferrer">
                                        <Download className="w-5 h-5" />
                                        Download Catalogue
                                    </a>
                                </Button>
                                <Button size="xl" variant="outline" className="h-14 px-8 text-lg gap-3 border-2" asChild>
                                    <a href={generalWhatsAppLink} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="w-5 h-5 text-green-600" />
                                        Get Best Pricing
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Video Gallery Carousel Style (Simple Grid for now) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {bataVideos.map((video, idx) => (
                                <div key={idx} className={`relative group rounded-xl overflow-hidden shadow-xl bg-black aspect-video ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                                    <video
                                        src={video.src}
                                        controls
                                        className="w-full h-full object-cover"
                                        poster={video.poster}
                                    >
                                        Your browser does not support video.
                                    </video>
                                </div>
                            ))}
                        </div>

                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-4 font-display">Product Gallery</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {bataImages.map((src, idx) => (
                                    <div
                                        key={idx}
                                        className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square border border-zinc-200 shadow-sm transition-all hover:shadow-xl hover:scale-105 hover:z-10 bg-white"
                                        onClick={() => { setBataIndex(idx); setOpenBata(true); }}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Bata Product ${idx + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Lightbox
                open={openBata}
                close={() => setOpenBata(false)}
                index={bataIndex}
                slides={bataImages.map(src => ({ src }))}
            />

            {/* Abrigo Section */}
            <section className="py-20 bg-white dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <div>
                                <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm tracking-wide mb-4 uppercase">
                                    Premium Protection
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                                    Abrigo Safety
                                </h2>
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    A complete ecosystem of protective gear designed for the modern industrial athlete. Abrigo products deliver superior ergonomics without sacrificing safety ratings.
                                </p>
                            </div>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['Impact Protection', 'Cut Resistance Level 5', 'High Visibility', 'Ergonomic Fit'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                            <ArrowRight className="w-3 h-3 text-blue-600" />
                                        </div>
                                        <span className="font-medium text-zinc-700">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button size="xl" className="h-14 px-8 text-lg gap-3 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20" asChild>
                                    <a href="/offerings/abrigo-catalog.pdf" download="Abrigo-Catalog.pdf" target="_blank" rel="noopener noreferrer">
                                        <Download className="w-5 h-5" />
                                        Download Catalogue
                                    </a>
                                </Button>
                                <Button size="xl" variant="outline" className="h-14 px-8 text-lg gap-3 border-2" asChild>
                                    <a href={generalWhatsAppLink} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="w-5 h-5 text-green-600" />
                                        Inquire Now
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => { setAbrigoIndex(0); setOpenAbrigo(true); }}>
                                    <Image
                                        src="/offerings/abrigo-1.jpg"
                                        alt="Abrigo Main"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                                        <p className="text-white font-bold text-2xl">Advanced Hand Protection</p>
                                    </div>
                                </div>
                                {abrigoImages.slice(1).map((src, idx) => (
                                    <div
                                        key={idx}
                                        className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                                        onClick={() => { setAbrigoIndex(idx + 1); setOpenAbrigo(true); }}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Abrigo ${idx}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Lightbox
                open={openAbrigo}
                close={() => setOpenAbrigo(false)}
                index={abrigoIndex}
                slides={abrigoImages.map(src => ({ src }))}
            />
        </Layout>
    );
};

export default Offerings;
