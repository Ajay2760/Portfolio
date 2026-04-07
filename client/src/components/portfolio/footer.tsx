import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSocialClick = (platform: string) => {
    const socialUrls: { [key: string]: string } = {
      GitHub: "https://github.com/Ajay2760",
      LinkedIn: "https://www.linkedin.com/in/ajayr1234/",
      X: "https://x.com/Ajay_0157",
      Instagram: "https://www.instagram.com/_ajay._.17_",
    };
    if (socialUrls[platform]) {
      window.open(socialUrls[platform], "_blank");
    }
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: FaXTwitter, label: "X" },
    { icon: Instagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Ajay R</h3>
            <p className="mb-4 text-muted-foreground">
              Web Developer passionate about creating innovative web solutions
              and learning new technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSocialClick(social.label)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Ajay R. All rights reserved by me. Built with
            passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
