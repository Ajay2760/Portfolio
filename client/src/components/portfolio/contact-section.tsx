import Globe from "@/components/ui/globe";
import { Button } from "@/components/ui/button";
import { LocationTag } from "@/components/ui/location-tag";
import ButtonSocialIconDemo from "@/components/ui/social-icon";

const ContactSection = () => {

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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Location</h4>
                  {/* The location tag natively has padding, negative margin can align it visually or we just render it */}
                  <div className="-ml-4 sm:ml-0">
                    <LocationTag city="Kanchipuram" country="Tamilnadu" timezone="IST" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Email</h4>
                  <p className="text-muted-foreground">ajaykpm0157@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Phone</h4>
                  <p className="text-muted-foreground">+91 8940005533</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Status</h4>
                  <p className="text-emerald-500 font-medium">Available for work</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-4">Follow Me</h4>
                <ButtonSocialIconDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
