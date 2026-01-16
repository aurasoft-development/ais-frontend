"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

export default function ImageURLInput({ selectedImages = [], onImagesChange, multiple = true }) {
  const [urlInput, setUrlInput] = useState("");
  const { toast } = useToast();

  const isValidURL = (string) => {
    try {
      const url = new URL(string);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (_) {
      return false;
    }
  };

  const handleAddURL = () => {
    const trimmedUrl = urlInput.trim();
    
    if (!trimmedUrl) {
      toast({
        title: "Error",
        description: "Please enter an image URL",
        variant: "destructive",
      });
      return;
    }

    if (!isValidURL(trimmedUrl)) {
      toast({
        title: "Error",
        description: "Please enter a valid URL (starting with http:// or https://)",
        variant: "destructive",
      });
      return;
    }

    if (selectedImages.includes(trimmedUrl)) {
      toast({
        title: "Error",
        description: "This image URL is already added",
        variant: "destructive",
      });
      return;
    }

    if (multiple) {
      onImagesChange([...selectedImages, trimmedUrl]);
    } else {
      onImagesChange([trimmedUrl]);
    }
    
    setUrlInput("");
    toast({
      title: "Success",
      description: "Image URL added successfully",
    });
  };

  const handleRemoveImage = (index) => {
    onImagesChange(selectedImages.filter((_, idx) => idx !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddURL();
    }
  };

  return (
    <div className="space-y-3">
      <Label>Product Images {multiple && "(Multiple)"}</Label>
      
      {/* URL Input */}
      <div className="flex gap-2">
        <Input
          type="url"
          placeholder="Paste image URL here (e.g., https://example.com/image.jpg)"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1"
        />
        <Button type="button" onClick={handleAddURL} size="icon">
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {/* Selected Images Grid */}
      {selectedImages.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4 border rounded-lg bg-muted/20">
          {selectedImages.map((url, idx) => (
            <div key={idx} className="relative group aspect-square border rounded-lg overflow-hidden bg-background">
              <Image
                src={url}
                alt={`Product image ${idx + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(idx)}
                className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                Image {idx + 1}
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedImages.length === 0 && (
        <div className="text-sm text-muted-foreground border-2 border-dashed rounded-lg p-6 text-center">
          No images added yet. Paste image URLs above to add them.
        </div>
      )}
    </div>
  );
}
