import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Server, Database, Wrench, Cloud } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-primary",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-accent",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Java", level: 85 },
        { name: "Spring Boot", level: 70 },
      ]
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "text-green-500",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "Git/GitHub", level: 85 },
      ]
    },
  ];

  const additionalSkills = [
    {
      title: "Development Tools",
      icon: Wrench,
      color: "text-purple-500",
      skills: ["VS Code", "Figma", "Jupyter Notebook", "JUnit"],
      badgeClass: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
    },
    {
      title: "Learning & Emerging",
      icon: Cloud,
      color: "text-orange-500",
      skills: ["AWS (Beginner)", "OpenCV", "Machine Learning", "REST APIs"],
      badgeClass: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-muted/30 shadow-lg stagger-animation fade-in visible">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <category.icon className={`${category.color} mr-3 h-5 w-5`} />
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="bg-muted rounded-full h-2">
                          <div 
                            className="skill-progress rounded-full"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              '--progress-width': `${skill.level}%`
                            } as React.CSSProperties}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {additionalSkills.map((category, index) => (
              <Card key={index} className="bg-muted/30 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <category.icon className={`${category.color} mr-3 h-5 w-5`} />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className={category.badgeClass}>
                        {skill}
                      </Badge>
                    ))}
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

export default SkillsSection;
