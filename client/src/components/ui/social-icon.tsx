import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const ButtonSocialIconDemo = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Ajay2760", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ajayr1234/", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/Ajay_0157", label: "X" },
    { icon: Instagram, href: "https://www.instagram.com/_ajay._.17_", label: "Instagram" },
  ];

  return (
    <div className="flex items-center gap-4 flex-wrap">
      {socialLinks.map((social, index) => (
        <Button
          key={index}
          variant="outline"
          type="button"
          onClick={() => window.open(social.href, "_blank")}
          aria-label={social.label}
          className="rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer h-14 w-14 p-0 dark:border-white/10 dark:hover:bg-white/5 bg-transparent"
        >
          <social.icon className="h-6 w-6" />
        </Button>
      ))}
    </div>
  );
};

export default ButtonSocialIconDemo;
