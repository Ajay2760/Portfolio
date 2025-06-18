import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { SiJava } from "react-icons/si";
import { Brain, Award, Bot } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Java Programming",
      organization: "NPTEL",
      description: "Comprehensive Java programming course covering core concepts and advanced topics",
      year: "2023",
      icon: SiJava,
      color: "bg-orange-500",
      orgColor: "text-orange-500",
    },
    {
      title: "Machine Learning",
      organization: "IIT Allahabad",
      description: "Online certification in machine learning fundamentals and applications",
      year: "2023",
      icon: Brain,
      color: "bg-blue-500",
      orgColor: "text-blue-500",
    },
    {
      title: "Java Foundation",
      organization: "Infosys Springboard",
      description: "Foundation-level Java programming and software development principles",
      year: "2023",
      icon: SiJava,
      color: "bg-green-500",
      orgColor: "text-green-500",
    },
    {
      title: "AI Foundations",
      organization: "Infosys Springboard",
      description: "Foundational concepts in artificial intelligence and its applications",
      year: "2023",
      icon: Bot,
      color: "bg-purple-500",
      orgColor: "text-purple-500",
    },
  ];

  const handleViewCertificate = (title: string) => {
    alert(`Certificate viewing functionality for "${title}" would be implemented with actual certificate links.`);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 ${cert.color} rounded-full flex items-center justify-center`}>
                      <cert.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{cert.title}</h3>
                      <p className={`${cert.orgColor} font-medium`}>{cert.organization}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{cert.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{cert.year}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewCertificate(cert.title)}
                      className="text-primary hover:text-primary"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
