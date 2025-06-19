import { Heart, Computer } from "lucide-react";
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
      'GitHub': 'https://github.com/Ajay2760',
      'LinkedIn': 'https://www.linkedin.com/in/ajayr1234/',
      'X': 'https://x.com/Ajay_0157',
      'Instagram': 'https://www.instagram.com/_ajay._.17_'
    };
    
    if (socialUrls[platform]) {
      window.open(socialUrls[platform], '_blank');
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

  const clubsAndSocieties = [
    {
      name: "Youth Red Cross",
      period: "2021 – Present",
      icon: Heart,
      color: "text-red-500",
    },
    {
      name: "CSI - Computer Society of India",
      period: "2021 – Present",
      icon: Computer,
      color: "text-blue-500",
    },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Ajay R</h3>
            <p className="mb-4">
              Full Stack Developer passionate about creating innovative web solutions and learning new technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSocialClick(social.label)}
                  className="hover:text-primary transition-colors p-0 h-auto w-auto"
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Clubs & Societies</h4>
            <ul className="space-y-2 text-sm">
              {clubsAndSocieties.map((club, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <club.icon className={`${club.color} mt-0.5 h-4 w-4 flex-shrink-0`} />
                  <div>
                    <div className="font-medium">{club.name}</div>
                    <div className="text-slate-400">{club.period}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {currentYear} Ajay R. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
