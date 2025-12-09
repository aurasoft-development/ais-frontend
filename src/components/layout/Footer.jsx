import Link from "next/link";
import Image from "next/image";
import { Shield, MapPin, Phone, Clock } from "lucide-react";
import { generalWhatsAppLink } from "@/data/products";
const Footer = () => {
  return (<footer className="bg-zinc-950 text-zinc-100 border-t border-zinc-800">
    {/* Main Footer */}
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <div className="bg-white/5 p-2 rounded-lg backdrop-blur-sm inline-block border border-white/10">
              <div className="relative h-12 w-48">
                <Image
                  src="/logo.png"
                  alt="Aura Safety"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
          </Link>

          <p className="text-sm text-zinc-400 leading-relaxed">
            Authorized Bata Industrials dealer offering genuine safety shoes and complete PPE solutions in Ujjain and surrounding regions.
          </p>
          <div className="flex items-center gap-2 text-accent font-semibold">
            <span className="text-sm">✓ Authorized Bata Dealer</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (<li key={link.path}>
              <Link href={link.path} className="text-zinc-400 hover:text-accent transition-colors text-sm">
                {link.name}
              </Link>
            </li>))}
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h4 className="font-display text-lg font-bold mb-4 text-white">Categories</h4>
          <ul className="space-y-2">
            {[
              "Safety Shoes & Footwear",
              "Gloves",
              "Helmets & Head Protection",
              "Jackets & Vests",
              "Fire Equipment",
            ].map((category) => (<li key={category}>
              <Link href="/products" className="text-zinc-400 hover:text-accent transition-colors text-sm">
                {category}
              </Link>
            </li>))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display text-lg font-bold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm text-zinc-400">
                Aditya Parisar, New Abhishek Nagar, Nanakheda, Ujjain, 456010
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <a href={generalWhatsAppLink} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-accent transition-colors">
                WhatsApp: Contact Us
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm text-zinc-400">
                Mon - Sat: 9:00 AM - 7:00 PM
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Service Areas Strip */}
    <div className="bg-accent text-accent-foreground py-3 border-y border-yellow-600/20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-medium">
          🚚 Serving Pan India | Fast Delivery in Ujjain, Indore, Dewas, Ratlam & Neemuch
        </p>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="bg-black py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Aurasafety Industrial Solutions. All rights reserved.
        </p>
      </div>
    </div>
  </footer>);
};
export default Footer;
