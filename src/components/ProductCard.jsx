import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/products";

const ProductCard = ({ product }) => {
  return (<article className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30">
    {/* Image */}
    <div className="relative aspect-square bg-muted overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Category Badge */}
      <div className="absolute top-3 left-3">
        <span className="bg-primary/90 text-primary-foreground text-xs font-medium px-2 py-1 rounded-md">
          {product.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-4 space-y-3">
      <h3 className="font-display text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {product.description}
      </p>

      {/* CTA Button */}
      <Button variant="whatsapp" className="w-full" asChild>
        <a href={getWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-4 h-4" />
          Contact for Pricing
        </a>
      </Button>
    </div>
  </article>);
};
export default ProductCard;
