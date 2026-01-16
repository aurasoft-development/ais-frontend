"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Search, Image as ImageIcon, Check } from "lucide-react";
import Image from "next/image";

export default function ImagePicker({ selectedImages = [], onImagesChange, multiple = true }) {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [tempSelected, setTempSelected] = useState([]);

  useEffect(() => {
    if (open) {
      fetchImages();
      setTempSelected(selectedImages);
    }
  }, [open, selectedImages]);

  const fetchImages = async () => {
    try {
      const res = await fetch("/api/images");
      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    }
  };

  const filteredImages = images.filter((img) =>
    img.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleImage = (imgPath) => {
    if (multiple) {
      setTempSelected((prev) =>
        prev.includes(imgPath)
          ? prev.filter((p) => p !== imgPath)
          : [...prev, imgPath]
      );
    } else {
      setTempSelected([imgPath]);
    }
  };

  const handleConfirm = () => {
    onImagesChange(tempSelected);
    setOpen(false);
  };

  return (
    <>
      <div className="space-y-2">
        <Label>Product Images {multiple && "(Multiple)"}</Label>
        <div className="flex flex-wrap gap-2 mb-2">
          {selectedImages.map((img, idx) => (
            <div key={idx} className="relative w-20 h-20 border rounded overflow-hidden">
              <Image
                src={img}
                alt="Selected"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <Button type="button" variant="outline" onClick={() => setOpen(true)}>
          <ImageIcon className="w-4 h-4 mr-2" />
          {selectedImages.length > 0 ? "Change Images" : "Select Images"}
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
          <div className="p-6 pb-4">
            <DialogHeader>
              <DialogTitle>Select Images from Assets</DialogTitle>
            </DialogHeader>
          </div>

          <div className="flex flex-col gap-4 flex-1 px-6 overflow-hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex-1 overflow-auto border rounded-lg p-4">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {filteredImages.map((imgPath, idx) => {
                  const isSelected = tempSelected.includes(imgPath);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleImage(imgPath)}
                      className={`relative aspect-square border-2 rounded-lg overflow-hidden hover:border-primary transition-all ${
                        isSelected ? "border-primary ring-2 ring-primary" : "border-border"
                      }`}
                    >
                      <Image
                        src={imgPath}
                        alt={imgPath}
                        fill
                        className="object-cover"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                          <div className="bg-primary text-primary-foreground rounded-full p-1">
                            <Check className="w-4 h-4" />
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              {filteredImages.length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  No images found. Make sure images are in src/assets/products folder.
                </p>
              )}
            </div>
          </div>

          <div className="px-6 py-4 border-t bg-muted/10">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Selected: {tempSelected.length} image(s)
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleConfirm}>
                  Confirm Selection
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
