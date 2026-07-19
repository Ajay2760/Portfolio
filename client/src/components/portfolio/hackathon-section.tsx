import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BorderGlow from "@/components/ui/BorderGlow";
import { Trophy, Users, Clock, MapPin, Award, Github, ExternalLink } from "lucide-react";
import { GlowTheme } from "@/lib/card-colors";

const HackathonSection = () => {
  interface HackathonItem {
    type: string;
    title: string;
    subtitle?: string;
    description: string;
    image?: string;
    features?: string[];
    technologies: string[];
    techColors?: string[];
    glowColor: GlowTheme;
    badgeText?: string;
    github?: string;
    demo?: string;
    outcomes?: string[];
  }

  const hackathons: HackathonItem[] = [
    {
      type: "project",
      title: "ClearGlass: AI-Powered Fraud Detection Platform",
      description:
        "A full-stack financial fraud intelligence platform built with React, Node.js, and PostgreSQL featuring real-time transaction monitoring, explainable AI, and synthetic data generation.",
      image: "https://i.postimg.cc/nhVrt7dj/Ransomware-Actors-Leverage-Microsoft-Tools-to-Breach-Organizations-Deploy-Black-Basta.jpg",
      features: [
        "SOC-style dashboard: dark UI with live KPIs: fraud rate, total amount at risk, and active alert count.",
        "Contract-first REST API: Express 5 + TypeScript with OpenAPI codegen (Orval) auto-generating type-safe React Query hooks and Zod schemas.",
        "PostgreSQL + Drizzle ORM: modelled and seeded tables for transactions, fraud alerts, ML models, synthetic jobs, and a real-time activity feed.",
        "Fraud scoring engine: classifies transactions as fraud / review / legitimate in real time using amount, merchant category, and country of origin.",
        "Explainable AI (XAI): SHAP-style feature contribution chart on every transaction detail page showing analysts exactly why a flag was raised.",
        "ML model comparison: benchmarks 5 models (XGBoost, LightGBM, CatBoost, Isolation Forest, Stacking Ensemble) across AUC-ROC, Precision, Recall, F1, and PR-AUC.",
        "Synthetic Data Lab: supports GAN, VAE, SMOTE, ADASYN, and Faker with a simulated job lifecycle (queued → running → completed).",
        "Replit deployment: reverse proxy routes frontend (/) and API (/api) behind a single HTTPS domain.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Wouter",
        "Recharts",
        "TanStack Query",
        "Express 5",
        "Drizzle ORM",
        "PostgreSQL",
        "Zod",
        "OpenAPI",
        "pnpm Workspaces"
      ],
      techColors: [
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        "bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200",
        "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
        "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
        "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
        "bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200",
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
        "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200",
        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
        "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200",
        "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
      ],
      glowColor: "red" as const,
      badgeText: "Complyance Hackathon",
      github: "https://github.com/Ajay2760/Clear-Glass--Fraud-Detection-Suite",
      demo: "https://fraud-detection-suite--zeusgamer0157.replit.app/"
    },
    {
      type: "project",
      title: "Pro Planet: Carbon Footprint Calculator",
      subtitle: "Smart India Hackathon 2023 (SVCE Chennai)",
      description:
        "Developed a comprehensive sustainability platform and mobile application prototype during the 24-hour national hackathon, designed to calculate, track, and reduce users' daily carbon emissions based on habits.",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      features: [
        "Collaborated in a high-intensity, 24-hour national hackathon initiative, leading frontend prototyping and logic development.",
        "Designed personalized carbon footprint tracking based on daily habits and lifestyle choices.",
        "Implemented AI-powered reduction recommendations to suggest actionable sustainability steps.",
        "Built an intuitive, mobile-responsive prototype with interactive user interface elements.",
      ],
      technologies: ["React", "Java", "Figma", "Team Collaboration"],
      techColors: [
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
        "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
      ],
      glowColor: "green" as const,
      badgeText: "SIH Hackathon 2023",
      github: "https://github.com/Ajay2760/Carbon-footprint-calculator",
      demo: "https://carbonfootprintcalculator0.netlify.app/"
    }
  ];

  const handleAction = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="hackathons" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathons</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {hackathons.map((item, index) => {
              if (item.type === "project") {
                return (
                  <BorderGlow
                    key={index}
                    theme={item.glowColor}
                    className="flex flex-col h-full w-full"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-52 object-cover flex-shrink-0"
                      />
                    )}
                    <div className="p-8 flex flex-col flex-grow space-y-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <Badge className="bg-gradient-to-r from-red-500 to-rose-600 text-white text-xs">
                            {item.badgeText || "Hackathon Project"}
                          </Badge>
                        </div>
                        {item.subtitle && (
                          <p className="text-xs text-primary font-medium">{item.subtitle}</p>
                        )}
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        <span className="text-sm font-semibold block text-primary">Key Highlights:</span>
                        <ul className="text-xs text-muted-foreground space-y-1.5 list-disc list-inside">
                          {item.features?.map((feature, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-sm font-semibold block mb-2 text-primary">Tech Stack:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech, techIdx) => (
                            <Badge
                              key={techIdx}
                              className={`${item.techColors?.[techIdx]} text-[10px] py-0 px-2`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4 pt-4 mt-auto border-t border-border/50">
                        {item.github && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleAction(item.github!)}
                            className="text-primary hover:text-primary flex-1 text-xs"
                          >
                            <Github className="mr-1.5 h-3.5 w-3.5" />
                            View Code
                          </Button>
                        )}
                        {item.demo && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleAction(item.demo!)}
                            className="text-accent hover:text-accent flex-1 text-xs"
                          >
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </BorderGlow>
                );
              } else {
                return (
                  <BorderGlow
                    key={index}
                    theme={item.glowColor}
                    className="flex flex-col h-full w-full"
                  >
                    <div className="p-8 flex flex-col flex-grow space-y-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500">
                            <Trophy className="h-7 w-7" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-xs text-primary font-medium">{item.subtitle}</p>
                          </div>
                        </div>
                        <div>
                          <Badge className="bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs px-3 py-0.5 flex items-center gap-1.5">
                            <Award className="h-3.5 w-3.5" />
                            Participant
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="flex items-center gap-2 text-muted-foreground bg-card/50 p-3 rounded-xl border border-border/50">
                          <Clock className="h-4 w-4 text-orange-500 flex-shrink-0" />
                          <div>
                            <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">Duration</span>
                            <span className="text-xs font-medium">24 Hours</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground bg-card/50 p-3 rounded-xl border border-border/50">
                          <Users className="h-4 w-4 text-orange-500 flex-shrink-0" />
                          <div>
                            <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">Role</span>
                            <span className="text-xs font-medium">Developer</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground bg-card/50 p-3 rounded-xl border border-border/50">
                          <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0" />
                          <div>
                            <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">Location</span>
                            <span className="text-xs font-medium text-ellipsis overflow-hidden whitespace-nowrap block max-w-[80px]">SVCE Chennai</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="text-sm font-semibold block text-orange-500">Achievements:</span>
                        <ul className="space-y-1.5">
                          {item.outcomes?.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs">
                              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border/50 mt-auto">
                        <span className="text-sm font-semibold block mb-2 text-orange-500">Core Skills Displayed:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech, techIdx) => (
                            <Badge key={techIdx} variant="secondary" className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-none text-[10px] py-0 px-2">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </BorderGlow>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;
