"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/products";
import ImageCarouselModal from "@/components/ImageCarouselModal";

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Support both 'image' (single) and 'images' (multiple) properties
  const images = product.images || (product.image ? [product.image] : []);
  const hasMultipleImages = images.length > 1;

  const handlePrevImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <article className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30">
        {/* Image */}
        <div 
          className="relative aspect-square bg-muted overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleImageClick}
        >
          {images.length > 0 ? (
            <Image
              src={images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-muted-foreground">Image not available</div>';
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No image
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-primary/90 text-primary-foreground text-xs font-medium px-2 py-1 rounded-md">
              {product.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </span>
          </div>

          {/* Image Counter Badge */}
          {hasMultipleImages && (
            <div className="absolute top-3 right-3">
              <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-md">
                {currentImageIndex + 1} / {images.length}
              </span>
            </div>
          )}

          {/* Navigation Arrows - Only show on hover if multiple images */}
          {hasMultipleImages && isHovering && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Click to view hint */}
          {isHovering && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs text-center py-2 transition-opacity">
              Click to view full size
            </div>
          )}
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
      </article>

      {/* Full-Page Image Modal */}
      <ImageCarouselModal
        images={images}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialIndex={currentImageIndex}
      />
    </>
  );
};
export default ProductCard;
