import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Pro Planet: Carbon Footprint Calculator",
      description:
        "Developed a comprehensive mobile application prototype that calculates users' carbon emissions based on their daily habits and lifestyle choices.",
      image:
        "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      features: [
        "Personalized carbon footprint tracking",
        "AI-powered reduction recommendations",
        "Habit-based emission calculations",
        "Interactive user interface design",
      ],
      technologies: ["Figma", "Java", "Mobile Development"],
      techColors: [
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      ],
    },
    {
      title: "Connect: Real-Time Chat Application",
      description:
        "Built a fully responsive real-time chat application with advanced features like user status tracking and typing indicators to enhance user engagement.",
      image:
        "https://i.postimg.cc/wTy36WVw/CONNECT-1.png&auto=format&fit=crop&w=800&h=400",
      features: [
        "Real-time messaging with Socket.io",
        "Dynamic user status indicators",
        "Typing indicators and message delivery",
        "Responsive design across devices",
      ],
      technologies: ["React", "Node.js", "Socket.io", "GitHub"],
      techColors: [
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
        "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
        "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
      ],
    },
    {
      title: "SnapReport: Community-Driven Incident Management Platform",
      description:
        "Built a comprehensive incident reporting and management system that empowers communities to collaboratively identify, track, and resolve local issues through real-time engagement and data-driven insights.",
      image:
        "https://images.unsplash.com/photo-1712935303280-c9bad9e09427?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      features: [
        "Photo-enabled incident submission with smart categorization",
        "Priority-based classification (Critical, High, Medium, Low)",
        "Dynamic charts showing incident trends and patterns",
        "Tag-based filtering with popular tag suggestions",
      ],
      technologies: ["React", "Typescript", "Recharts", "GitHub"],
      techColors: [
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200",
        "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
        "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
      ],
    },
    {
      title: "CryptoTracker: Real-Time Cryptocurrency Dashboard",
      description:
        "Developed a sleek and interactive crypto dashboard for MacV AI’s frontend intern task. The platform offers real-time insights into top cryptocurrencies, allows users to track price trends, and manage a personalized watchlist — all powered by the CoinGecko API.",
      image: "https://postimg.cc/ZvnH09fv&auto=format&fit=crop&w=800&h=400",
      features: [
        "Paginated list of top 50 cryptocurrencies with real-time data",
        "Search and filter functionality for coin name, symbol, market cap, volume, and price change",
        "Detailed coin view with price charts (24h, 7d, 30d, 90d)",
        "Watchlist functionality with localStorage persistence",
        "Responsive UI with graceful loading, error, and empty states",
      ],
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Recharts",
        "CoinGecko API",
      ],
      techColors: [
        "bg-black text-white",
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200",
        "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      ],
    },
  ];

  const handleProjectAction = (action: string, project: any) => {
    if (project.title.includes("Pro Planet")) {
      if (action === "View Code") {
        window.open("https://github.com/Ajay2760/CryptoTracker", "_blank");
      } else if (action === "Live Demo") {
        window.open(
          "https://carbonfootprintcalculator0.netlify.app/",
          "_blank"
        );
      }
    } else if (project.title.includes("Connect")) {
      if (action === "View Code") {
        window.open("https://github.com/Ajay2760/Connect", "_blank");
      } else if (action === "Live Demo") {
        window.open("https://connect-fpzv.onrender.com/", "_blank");
      }
    } else if (project.title.includes("SnapReport")) {
      if (action === "View Code") {
        window.open(
          "https://github.com/Ajay2760/SnapReport-Incident-Report-Manager",
          "_blank"
        );
      } else if (action === "Live Demo") {
        window.open("https://snapreport1.netlify.app/", "_blank");
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="project-card shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
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
                      <Badge
                        key={techIndex}
                        className={project.techColors[techIndex]}
                      >
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
