import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Award, Bot, Coffee } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Programming in Java",
      organization: "NPTEL",
      description: "12-week comprehensive Java programming course with 56 score and 3-4 credit hours",
      year: "2024",
      icon: Coffee,
      color: "bg-orange-500",
      orgColor: "text-orange-500",
      certificateUrl: "https://drive.google.com/file/d/1FcMQcxAD2wL-46YnuqsSfeDXmt7NzrV-/view?usp=sharing",
    },
    {
      title: "Machine Learning",
      organization: "IIT Allahabad",
      description: "Machine learning fundamentals and applications completed in May-June 2023",
      year: "2023",
      icon: Brain,
      color: "bg-blue-500",
      orgColor: "text-blue-500",
      certificateUrl: "https://drive.google.com/file/d/1FcMQcxAD2wL-46YnuqsSfeDXmt7NzrV-/view?usp=drive_link",
    },
    {
      title: "Ethics in the Age of Generative AI",
      organization: "LinkedIn Learning",
      description: "38-minute course covering computer ethics and generative AI principles",
      year: "2023",
      icon: Bot,
      color: "bg-green-500",
      orgColor: "text-green-500",
      certificateUrl: "https://drive.google.com/file/d/1J9gSqwKI5l6wrz6WrFvxExnlMhvSOQ3V/view?usp=sharing",
    },
    {
      title: "Design & Implementation of Human-Computer Interfaces",
      organization: "NPTEL",
      description: "12-week course on HCI design with 63 score and 3-4 credit hours",
      year: "2024",
      icon: Award,
      color: "bg-purple-500",
      orgColor: "text-purple-500",
      certificateUrl: "https://drive.google.com/file/d/1J9gSqwKI5l6wrz6WrFvxExnlMhvSOQ3V/view?usp=sharing",
    },
  ];

  const handleViewCertificate = (certificateUrl: string) => {
    window.open(certificateUrl, '_blank');
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