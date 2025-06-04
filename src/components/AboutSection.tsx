import React from "react";
import { Card, CardContent } from "./ui/card";

interface AboutSectionProps {
  companyHistory?: string;
  mission?: string;
  vision?: string;
  imageUrl?: string;
  companyName?: string;
}

const AboutSection = ({
  companyHistory = "Founded in 2010, our company has grown from a small startup to an industry leader. We've consistently pushed the boundaries of innovation while maintaining our core values of integrity, excellence, and customer satisfaction.",
  mission = "Our mission is to provide cutting-edge solutions that empower businesses to thrive in the digital age. We are committed to delivering exceptional value through innovative technology and unparalleled service.",
  vision = "We envision a future where technology seamlessly integrates with everyday business operations, making complex processes simple and accessible to all. Our goal is to be at the forefront of this transformation.",
  imageUrl = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  companyName = "Our Company",
}: AboutSectionProps) => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About {companyName}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Our History</h3>
                <p className="text-gray-700 mb-6">{companyHistory}</p>

                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-6">{mission}</p>

                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-700">{vision}</p>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={imageUrl}
                alt="Company Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
