import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Trophy, Users, Clock, MapPin, Award, Github, ExternalLink } from "lucide-react";

const HackathonSection = () => {
  const hackathons = [
    {
      type: "project",
      title: "ClearGlass — AI-Powered Fraud Detection Platform",
      description:
        "A full-stack financial fraud intelligence platform built with React, Node.js, and PostgreSQL — featuring real-time transaction monitoring, explainable AI, and synthetic data generation.",
      image: "/assets/clearglass.png",
      features: [
        "Built a production-ready fraud detection dashboard with a dark SOC-style UI, displaying live KPIs including fraud rate, total amount at risk, and active alert count",
        "Designed and implemented a contract-first REST API in Express 5 + TypeScript with OpenAPI codegen (Orval) to auto-generate type-safe React Query hooks and Zod validation schemas",
        "Modelled and seeded a PostgreSQL database using Drizzle ORM with tables for transactions, fraud alerts, ML models, synthetic data jobs, and a real-time activity feed",
        "Implemented a fraud scoring engine that factors transaction amount, merchant category, and country of origin to classify transactions as fraud / review / legitimate in real time",
        "Integrated Explainable AI (XAI) on every transaction detail page — a SHAP-style feature contribution chart shows analysts exactly why a transaction was flagged",
        "Showcased 5 ML model comparison metrics (XGBoost, LightGBM, CatBoost, Isolation Forest, Stacking Ensemble) including AUC-ROC, Precision, Recall, F1-Score, and PR-AUC drawn from real research benchmarks",
        "Built a Synthetic Data Lab supporting 5 generation methods (GAN, VAE, SMOTE, ADASYN, Faker) with simulated job lifecycle (queued → running → completed)",
        "Deployed on Replit with a shared reverse proxy routing frontend (/) and API (/api) behind a single HTTPS domain",
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
      github: "https://github.com/Ajay2760/Clear-Glass--Fraud-Detection-Suite",
      demo: "https://fraud-detection-suite--zeusgamer0157.replit.app/"
    },
    {
      type: "event",
      title: "Smart India Hackathon 2023",
      subtitle: "24-Hour National-Level Institute Hackathon",
      location: "Sri Venkateswara College of Engineering, Sriperumbudur",
      description:
        "Collaborated in a high-intensity, 24-hour national hackathon initiative, working alongside a multidisciplinary team to design, prototype, and pitch innovative software solutions for pressing real-world challenges.",
      outcomes: [
        "Brainstormed and developed a full working prototype within the strict 24-hour timeframe.",
        "Gained key insights into rapid application development, collaborative team coordination, and agile pivoting.",
        "Presented and pitched the solution to panel judges, refining product messaging and presentation skills.",
      ],
      technologies: ["React", "Node.js", "Rapid Prototyping", "Team Collaboration"],
      glowColor: "orange" as const,
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
                  <GlowCard
                    key={index}
                    glowColor={item.glowColor}
                    customSize={true}
                    className="bg-muted/30 flex flex-col h-full"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-52 object-cover flex-shrink-0"
                      />
                    )}
                    <div className="p-8 flex flex-col flex-grow space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <Badge className="bg-gradient-to-r from-red-500 to-rose-600 text-white text-xs">
                          Hackathon Project
                        </Badge>
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
                  </GlowCard>
                );
              } else {
                return (
                  <GlowCard
                    key={index}
                    glowColor={item.glowColor}
                    customSize={true}
                    className="bg-muted/30 flex flex-col h-full"
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
                  </GlowCard>
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
