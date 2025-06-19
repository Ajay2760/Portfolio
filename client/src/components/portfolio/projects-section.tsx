import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Pro Planet: Carbon Footprint Calculator",
      description: "Developed a comprehensive mobile application prototype that calculates users' carbon emissions based on their daily habits and lifestyle choices.",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      features: [
        "Personalized carbon footprint tracking",
        "AI-powered reduction recommendations",
        "Habit-based emission calculations",
        "Interactive user interface design",
      ],
      technologies: ["Figma", "Java", "Mobile Development"],
      techColors: [
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      ]
    },
    {
      title: "Connect: Real-Time Chat Application",
      description: "Built a fully responsive real-time chat application with advanced features like user status tracking and typing indicators to enhance user engagement.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      features: [
        "Real-time messaging with Socket.io",
        "Dynamic user status indicators",
        "Typing indicators and message delivery",
        "Responsive design across devices",
      ],
      technologies: ["React", "Node.js", "Socket.io", "GitHub Actions"],
      techColors: [
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
        "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
        "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
      ]
    },
  ];

  const handleProjectAction = (action: string, project: any) => {
    if (project.title.includes("Pro Planet")) {
      if (action === "View Code") {
        window.open("https://github.com/Ajay2760/Carbon-footprint-calculator", "_blank");
      } else if (action === "Live Demo") {
        window.open("https://carbonfootprintcalculator0.netlify.app/", "_blank");
      }
    } else if (project.title.includes("Connect")) {
      if (action === "View Code") {
        window.open("https://github.com/Ajay2760/Connect", "_blank");
      } else if (action === "Live Demo") {
        window.open("https://connect-fpzv.onrender.com/", "_blank");
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card shadow-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className={project.techColors[techIndex]}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleProjectAction("View Code", project)}
                      className="text-primary hover:text-primary"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleProjectAction("Live Demo", project)}
                      className="text-accent hover:text-accent"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
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

export default ProjectsSection;
