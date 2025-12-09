"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Send, MessageCircle, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { generalWhatsAppLink } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Create WhatsApp message with form data
        const whatsappMessage = encodeURIComponent(`Hello Aurasafety Industrial Solutions!\n\nName: ${formData.name}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`);
        window.open(`https://wa.me/919111098936?text=${whatsappMessage}`, "_blank");
        toast({
            title: "Message Sent!",
            description: "We've opened WhatsApp for you to send your inquiry directly.",
        });
        setFormData({ name: "", phone: "", message: "" });
        setIsSubmitting(false);
    };
    const contactInfo = [
        {
            icon: MapPin,
            title: "Location",
            content: "Aditya Parisar, New Abhishek Nagar, Nanakheda, Ujjain, 456010",
            subtext: "Serving Ujjain, Indore, Dewas, Ratlam & Neemuch",
        },
        {
            icon: Phone,
            title: "WhatsApp",
            content: "Contact Us on WhatsApp",
            subtext: "Quick response guaranteed",
            link: generalWhatsAppLink,
        },
        {
            icon: Clock,
            title: "Business Hours",
            content: "Mon - Sat: 9:00 AM - 7:00 PM",
            subtext: "Sunday: Closed",
        },
    ];
    return (
        <Layout>
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            Contact Us
                        </span>
                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-primary-foreground/80">
                            Have questions about our products? Need a quote for bulk orders? We're here to help.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                                Send Us a Message
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                        Your Name *
                                    </label>
                                    <Input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your full name" className="w-full" />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                        Phone Number *
                                    </label>
                                    <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Enter your phone number" className="w-full" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                        Message *
                                    </label>
                                    <Textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your requirements..." className="w-full resize-none" />
                                </div>

                                <Button type="submit" variant="accent" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                                    {isSubmitting ? ("Sending...") : (<>
                                        <Send className="w-4 h-4" />
                                        Send Message via WhatsApp
                                    </>)}
                                </Button>
                            </form>

                            {/* Direct WhatsApp CTA */}
                            <div className="mt-8 p-6 bg-muted rounded-xl">
                                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                                    Prefer Direct Contact?
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Click below to chat with us instantly on WhatsApp.
                                </p>
                                <Button variant="whatsapp" size="lg" asChild>
                                    <a href={generalWhatsAppLink} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="w-4 h-4" />
                                        Chat on WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Contact Info & Map */}
                        <div className="space-y-8">
                            {/* Contact Cards */}
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (<div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                        <info.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-lg font-bold text-foreground">
                                            {info.title}
                                        </h3>
                                        {info.link ? (<a href={info.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                            {info.content}
                                        </a>) : (<p className="text-foreground">{info.content}</p>)}
                                        <p className="text-sm text-muted-foreground">{info.subtext}</p>
                                    </div>
                                </div>))}
                            </div>

                            {/* Google Map */}
                            <div className="rounded-xl overflow-hidden border border-border h-[300px] md:h-[400px]">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117452.91654746964!2d75.6922!3d23.1765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00ff23%3A0x7f848b69726e8ddd!2sUjjain%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Aura Safety Location - Ujjain" />
                            </div>

                            {/* Service Areas */}
                            <div className="p-6 bg-accent/10 rounded-xl border border-accent/20">
                                <h3 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-success" />
                                    Service Areas
                                </h3>
                                <p className="text-sm text-foreground mb-3 font-medium">Serving Pan India, with Fast Delivery in:</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Ujjain", "Indore", "Dewas", "Ratlam", "Neemuch"].map((city) => (<span key={city} className="px-3 py-1 bg-card rounded-full text-sm font-medium text-foreground border border-border">
                                        {city}
                                    </span>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
export default Contact;
