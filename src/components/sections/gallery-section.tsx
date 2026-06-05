import Image from "next/image";

import { GALLERY_IMAGES } from "@/constants/site";
import type { Dictionary } from "@/types/i18n";

interface GallerySectionProps {
  dictionary: Dictionary;
}

export function GallerySection({ dictionary }: GallerySectionProps) {
  return (
    <section id="gallery" className="section-shell scroll-mt-28 py-18 md:py-24">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="eyebrow">{dictionary.gallery.eyebrow}</p>
          <h2 className="balanced-text max-w-3xl font-serif text-5xl text-foreground sm:text-6xl lg:text-7xl">
            {dictionary.gallery.title}
          </h2>
        </div>
        <p className="max-w-lg text-base leading-7 text-muted-foreground">
          {dictionary.gallery.description}
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="section-card overflow-hidden rounded-[2.2rem] p-3">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[1.7rem]">
            <Image
              src={GALLERY_IMAGES[0].src}
              alt={dictionary.gallery.items[GALLERY_IMAGES[0].id]}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {GALLERY_IMAGES.slice(1).map((image) => (
            <div
              key={image.id}
              className="section-card overflow-hidden rounded-[2.2rem] p-3"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.7rem]">
                <Image
                  src={image.src}
                  alt={dictionary.gallery.items[image.id]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 32vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
