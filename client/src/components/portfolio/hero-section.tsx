import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Web Developer & Tech Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1bibCMwunH2MuJsnLsu6CZPKFK5gzVd2P/view?usp=sharing";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in visible">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Ajay R</span>
          </h1>
          <div className="text-xl md:text-2xl mb-8 h-8">
            <span className="typing-animation">{displayText}</span>
          </div>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            Aspiring Web Developer with hands-on experience in building
            responsive web applications using modern technologies. Passionate
            about creating user-friendly experiences with performance and
            scalability in mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
