import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  Code,
  Globe,
  BarChart,
  Rocket,
  Headphones,
} from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Service = ({ title, description, icon }: ServiceProps) => {
  return (
    <Card className="h-full bg-white">
      <CardHeader>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: ServiceProps[];
}

const ServicesSection = ({
  title = "Our Services",
  subtitle = "We provide a wide range of professional services to help your business grow and succeed.",
  services = [
    {
      title: "Business Consulting",
      description:
        "Strategic guidance to optimize your business operations and increase profitability.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
    },
    {
      title: "Web Development",
      description:
        "Custom website solutions built with the latest technologies to enhance your online presence.",
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to reach your target audience and drive conversions.",
      icon: <Globe className="h-6 w-6 text-primary" />,
    },
    {
      title: "Data Analytics",
      description:
        "In-depth analysis of your business data to uncover insights and inform decision-making.",
      icon: <BarChart className="h-6 w-6 text-primary" />,
    },
    {
      title: "Product Innovation",
      description:
        "Creative product development services to bring your ideas to life and stay ahead of competition.",
      icon: <Rocket className="h-6 w-6 text-primary" />,
    },
    {
      title: "Customer Support",
      description:
        "Dedicated support services to ensure your customers receive timely and effective assistance.",
      icon: <Headphones className="h-6 w-6 text-primary" />,
    },
  ],
}: ServicesSectionProps) => {
  return (
    <section id="services" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
