import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const DesignPortfolioSection = () => {
  return (
    <section id="designs" className="py-20 bg-muted/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              UI/UX Design Portfolio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of creative design works, prototypes, and case studies
              focused on user-centered design and visual storytelling.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <Card className="shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              alt="Design Portfolio"
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-3">
                Ajay's UI/UX Design Portfolio
              </h3>
              <p className="text-muted-foreground mb-4">
                Explore a range of user interface and experience designs—from
                product redesigns to interactive mobile-first prototypes.
                Created using Figma and guided by UX principles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200">
                  Figma
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                  Wireframing
                </Badge>
                <Badge className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                  Prototyping
                </Badge>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open("https://www.figma.com/@ajay2760", "_blank")
                  }
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Figma
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://ajay-r-uiux-design-portfolio.super.site/",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DesignPortfolioSection;
