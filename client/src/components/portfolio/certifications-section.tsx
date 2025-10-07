import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Award, Bot, Coffee } from "lucide-react";
import { FaReact } from "react-icons/fa";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Programming in Java",
      organization: "NPTEL",
      description:
        "12-week comprehensive Java programming course with high level concepts",
      year: "2024",
      icon: Coffee,
      color: "bg-orange-500",
      orgColor: "text-orange-500",
      certificateUrl:
        "https://drive.google.com/file/d/1hU7uTjXo4CjQ-_QeG_26leY0iBvl0atx/view",
    },
    {
      title: "React JS Developer",
      organization: "OneRoadMap",
      description: "React JS Completion Certification by OneRoadMap",
      year: "2025",
      icon: FaReact,
      color: "bg-blue-500",
      orgColor: "text-blue-500",
      certificateUrl:
        "https://oneroadmap.io/skills/react/certificate/CERT-378E7CDE",
    },
    {
      title: "Ethics in the Age of Generative AI",
      organization: "LinkedIn Learning",
      description:
        "Course covering computer ethics and generative AI principles",
      year: "2023",
      icon: Bot,
      color: "bg-green-500",
      orgColor: "text-green-500",
      certificateUrl:
        "https://drive.google.com/file/d/1J9gSqwKI5l6wrz6WrFvxExnlMhvSOQ3V/view",
    },
    {
      title: "Design & Implementation of Human-Computer Interfaces",
      organization: "NPTEL",
      description:
        "12-week course on HCI design and Understanding about Human Interaction with Computers",
      year: "2024",
      icon: Award,
      color: "bg-purple-500",
      orgColor: "text-purple-500",
      certificateUrl:
        "https://drive.google.com/file/d/1ykZHP9Oa33UZs0ZTcjLSb92oFN77NOaa/view",
    },
  ];

  const handleViewCertificate = (certificateUrl: string) => {
    window.open(certificateUrl, "_blank");
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-12 h-12 ${cert.color} rounded-full flex items-center justify-center`}
                    >
                      <cert.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{cert.title}</h3>
                      <p className={`${cert.orgColor} font-medium`}>
                        {cert.organization}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    {cert.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {cert.year}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewCertificate(cert.certificateUrl)}
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
