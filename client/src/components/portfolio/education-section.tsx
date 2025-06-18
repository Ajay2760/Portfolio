import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School, Award } from "lucide-react";

const EducationSection = () => {
  const educationData = [
    {
      title: "Bachelor of Information Technology",
      institution: "Sri Venkateswara College of Engineering",
      grade: "CGPA: 7.4/10",
      status: "Current",
      icon: GraduationCap,
      color: "bg-primary",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "SSKV Boys Matriculation Higher Secondary School",
      grade: "Percentage: 76%",
      status: "Completed",
      icon: School,
      color: "bg-accent",
    },
    {
      title: "Secondary School Leaving Certificate (SSLC)",
      institution: "SSKV Boys Matriculation Higher Secondary School",
      grade: "Percentage: 67%",
      status: "Completed",
      icon: Award,
      color: "bg-green-500",
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 ${edu.color} rounded-full flex items-center justify-center`}>
                        <edu.icon className="text-white h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
                      <p className="text-primary font-medium mb-2">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-muted-foreground mb-2 sm:mb-0">{edu.grade}</p>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          edu.status === "Current" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
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

export default EducationSection;
