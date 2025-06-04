import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  companyName?: string;
  tagline?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  logoUrl?: string;
}

const HeroSection = ({
  companyName = "Acme Corporation",
  tagline = "Building the future, one innovation at a time",
  ctaText = "Learn More",
  ctaLink = "#about",
  backgroundImage = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
  logoUrl = "https://api.dicebear.com/7.x/initials/svg?seed=AC&backgroundColor=0369a1",
}: HeroSectionProps) => {
  return (
    <section
      className="relative h-[600px] w-full flex items-center justify-center bg-gray-900 overflow-hidden"
      style={{ backgroundColor: "#f8fafc" }} // Explicit background color for isolated rendering
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logoUrl}
            alt={`${companyName} logo`}
            className="h-20 w-20 rounded-full bg-white p-2"
          />
        </div>

        {/* Company Name */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {companyName}
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{tagline}</p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          asChild
        >
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
