import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Wrench, Lightbulb } from "lucide-react";

const ExperienceSection = () => {
  const mainExperience = {
    title: "Machine Learning Intern",
    company: "RETECH Solutions Pvt Ltd",
    location: "Chennai, India",
    year: "2023",
    achievements: [
      "Implemented face detection algorithms using OpenCV in Jupyter Notebooks",
      "Built and optimized basic classification models for face recognition systems",
      "Gained hands-on exposure to model training, testing, and evaluation processes",
    ],
  };

  const workshops = [
    {
      title: "Build Your Own Drone Workshop",
      description: "Two-day national workshop on drone building and technology",
      institution: "Sri Venkateswara College of Engineering",
      icon: Wrench,
      color: "text-accent",
    },
    {
      title: "Design Thinking Workshop",
      description: "Intensive workshop covering ideation frameworks for product design",
      institution: "Sri Venkateswara College of Engineering",
      icon: Lightbulb,
      color: "text-yellow-500",
    },
  ];



  return (
    <section id="experience" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {/* Main Internship */}
            <Card className="bg-muted/30 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{mainExperience.title}</h3>
                    <p className="text-primary font-medium mb-2">{mainExperience.company}</p>
                    <p className="text-muted-foreground">{mainExperience.location}</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Badge className="bg-accent text-white">{mainExperience.year}</Badge>
                  </div>
                </div>
                <ul className="space-y-3">
                  {mainExperience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Workshops */}
            <div className="grid md:grid-cols-2 gap-8">
              {workshops.map((workshop, index) => (
                <Card key={index} className="bg-muted/30 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <workshop.icon className={`${workshop.color} text-xl`} />
                      <h3 className="text-lg font-semibold">{workshop.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">{workshop.description}</p>
                    <p className={`text-sm ${workshop.color}`}>{workshop.institution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
