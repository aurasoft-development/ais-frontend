import Link from "next/link";
import Image from "next/image";
import { Shield, MapPin, Phone, Clock, Truck } from "lucide-react";
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

          {/* New Golden Rectangle (Compact) */}
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-yellow-500/30">
            {/* Header */}
            <div className="bg-black/40 text-white text-center text-[10px] font-bold py-1.5 uppercase tracking-wider backdrop-blur-sm">
              Serving PAN India
            </div>
            {/* Body */}
            <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-4 flex items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

              {/* Left: Truck */}
              <div className="w-1/3 flex justify-center border-r border-black/10 pr-3 relative z-10">
                <Truck className="w-11 h-11 text-white drop-shadow-md" strokeWidth={1.5} fill="currentColor" fillOpacity={0.15} />
              </div>

              {/* Right: Content */}
              <div className="w-2/3 pl-3 text-center text-white relative z-10">
                <div className="text-base font-black italic tracking-wide drop-shadow-sm uppercase leading-none mb-1.5">
                  FAST DELIVERY
                </div>
                {/* Divider */}
                <div className="flex items-center gap-2 mb-1.5 opacity-90">
                  <div className="h-px bg-white/40 flex-1"></div>
                  <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-[8px] font-bold bg-white/10 backdrop-blur-sm">
                    IN
                  </div>
                  <div className="h-px bg-white/40 flex-1"></div>
                </div>
                <div className="text-[10px] font-bold leading-tight opacity-95">
                  Ujjain, Indore, Dewas <br /> Ratlam & Neemuch
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> {/* Closes grid */}
    </div> {/* Closes container */}

    {/* Bottom Bar */}
    <div className="bg-black py-8 border-t border-zinc-900">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Aurasafety Industrial Solutions. All rights reserved.
        </p>
      </div>
    </div>
  </footer>);
};
export default Footer;
