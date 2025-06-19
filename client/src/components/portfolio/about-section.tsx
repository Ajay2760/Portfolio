import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const details = [
    { label: "Location", value: "Kanchipuram, India" },
    { label: "Email", value: "ajaykpm0157@gmail.com" },
    { label: "Phone", value: "+91 8940005533" },
    { label: "Status", value: "Available for work", highlight: true },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/profile-photo.jpg"
                alt="Ajay R - Professional Developer"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Passionate Developer from Kanchipuram, India
              </h3>
              <p className="text-lg mb-6 leading-relaxed text-muted-foreground">
                With a Bachelor's degree in Information Technology and a strong
                foundation in web development, I specialize in creating dynamic,
                responsive applications that solve real-world problems. My
                journey in tech has been driven by curiosity and a desire to
                build meaningful digital experiences.
              </p>
              <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
                From face detection algorithms to real-time chat applications, I
                enjoy tackling diverse challenges that push the boundaries of
                what's possible with modern web technologies.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {details.map((detail, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-2">{detail.label}</h4>
                    <p
                      className={
                        detail.highlight
                          ? "text-green-500 font-medium"
                          : "text-muted-foreground"
                      }
                    >
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
