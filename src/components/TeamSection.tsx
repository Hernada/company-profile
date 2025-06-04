import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio?: string;
  imageUrl?: string;
}

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  teamMembers?: TeamMember[];
}

const TeamSection = ({
  title = "Our Team",
  subtitle = "Meet the talented individuals who make our company great",
  teamMembers = [
    {
      id: 1,
      name: "Jane Smith",
      role: "CEO & Founder",
      bio: "With over 15 years of industry experience, Jane leads our company vision and strategy.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    },
    {
      id: 2,
      name: "John Doe",
      role: "CTO",
      bio: "John oversees all technical aspects and innovations within our organization.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Marketing Director",
      bio: "Sarah brings creative marketing strategies that help us connect with our audience.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Michael's technical expertise ensures our products are built with quality and innovation.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      role: "Customer Success Manager",
      bio: "Emily works tirelessly to ensure our clients receive exceptional support and service.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
    {
      id: 6,
      name: "David Wilson",
      role: "Financial Advisor",
      bio: "David manages our financial strategy to ensure sustainable growth and stability.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
  ],
}: TeamSectionProps) => {
  return (
    <section id="team" className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 mb-6">
                  {member.imageUrl ? (
                    <AvatarImage src={member.imageUrl} alt={member.name} />
                  ) : (
                    <AvatarFallback>
                      {member.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  )}
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                {member.bio && (
                  <p className="text-muted-foreground">{member.bio}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
