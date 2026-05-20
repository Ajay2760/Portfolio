import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Trophy, Users, Clock, MapPin, Award } from "lucide-react";

const HackathonSection = () => {
  const hackathon = {
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
  };

  return (
    <section id="hackathons" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathons</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <GlowCard glowColor="orange" customSize={true} className="bg-muted/30">
            <div className="p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{hackathon.title}</h3>
                    <p className="text-primary font-medium">{hackathon.subtitle}</p>
                  </div>
                </div>
                <div>
                  <Badge className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-sm px-4 py-1 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Participant
                  </Badge>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg">
                {hackathon.description}
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="flex items-center gap-3 text-muted-foreground bg-card/50 p-4 rounded-xl border border-border/50">
                  <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">Duration</span>
                    <span className="text-sm font-medium">24 Hours (Intense)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground bg-card/50 p-4 rounded-xl border border-border/50">
                  <Users className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">Role</span>
                    <span className="text-sm font-medium">Full-Stack Developer / Contributor</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground bg-card/50 p-4 rounded-xl border border-border/50">
                  <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">Location</span>
                    <span className="text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap max-w-[200px] block">SVCE Chennai</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  Key Accomplishments & Learnings
                </h4>
                <ul className="space-y-3">
                  {hackathon.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border/50">
                <h4 className="font-semibold mb-3">Core Skills Displayed</h4>
                <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech, techIdx) => (
                    <Badge key={techIdx} variant="secondary" className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-none">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;
