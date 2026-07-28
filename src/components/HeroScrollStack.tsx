"use client";
import { useEffect, useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { PhotoGallerySection } from "@/components/PhotoGallerySection";

/**
 * Scroll-stack effect: hero is pinned via position:fixed while the
 * PhotoGallerySection slides up over it. Once the gallery fully covers
 * the hero the fixed positioning is released and normal flow resumes.
 *
 * Architecture:
 *   - heroSpacer (100vh)  ← occupies the hero's place in flow
 *   - heroFixed (fixed)   ← the actual hero, pinned to viewport
 *   - PhotoGallerySection ← naturally stacked on top (z-index: 20)
 *
 * The heroFixed is removed from fixed positioning once the gallery
 * has scrolled past the hero spacer (i.e. heroSpacer scrolls out of view).
 */
export function HeroScrollStack() {
  const spacerRef = useRef<HTMLDivElement>(null);
  const heroFixedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spacer = spacerRef.current;
    const heroFixed = heroFixedRef.current;
    if (!spacer || !heroFixed) return;

    function update() {
      if (!spacer || !heroFixed) return;
      const spacerBottom = spacer.getBoundingClientRect().bottom;
      // When spacer's bottom is at or above the viewport top,
      // the gallery has fully covered the hero — release fixed positioning.
      if (spacerBottom <= 0) {
        heroFixed.style.position = "absolute";
        heroFixed.style.top = "0";
      } else {
        heroFixed.style.position = "fixed";
        heroFixed.style.top = "0";
      }
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    /* Outer wrapper: position relative so absolute fallback positions correctly */
    <div style={{ position: "relative" }}>
      {/* Spacer: holds 100vh of space in the document flow for the hero */}
      <div ref={spacerRef} style={{ height: "100vh", pointerEvents: "none" }} aria-hidden="true" />

      {/* Hero: fixed to viewport until the gallery covers it */}
      <div
        ref={heroFixedRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <HeroSection />
      </div>

      {/* Gallery: sits in normal flow above the spacer, z-index above hero */}
      <div style={{ position: "relative", zIndex: 20 }}>
        <PhotoGallerySection />
      </div>
    </div>
  );
}
