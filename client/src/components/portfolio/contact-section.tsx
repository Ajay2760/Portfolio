import Globe from "@/components/ui/globe";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ajaykpm0157@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8940005533",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kanchipuram, Tamil Nadu, India",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Ajay2760", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ajayr1234/", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/Ajay_0157", label: "X" },
    { icon: Instagram, href: "https://www.instagram.com/_ajay._.17_", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hola, feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Globe */}
            <div className="flex items-center justify-center">
              <Globe />
            </div>

            {/* Right — Let's Connect details */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      onClick={() => window.open(social.href, "_blank")}
                      aria-label={social.label}
                      className="hover:bg-primary hover:text-white transition-colors"
                    >
                      <social.icon className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
