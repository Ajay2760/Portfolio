import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../theme-provider";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Hackathons", id: "hackathons" },
  { label: "Paper Publication", id: "final-year-project" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

// Distance from the top of the viewport that counts as "inside" a section,
// accounting for the fixed navigation bar.
const SCROLL_SPY_OFFSET = 140;

const Navigation = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 50;
      setIsScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy: highlight the section currently under the navigation bar.
  useEffect(() => {
    const handleSpy = () => {
      let current = navItems[0].id;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element && element.getBoundingClientRect().top <= SCROLL_SPY_OFFSET) {
          current = item.id;
        }
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };

    handleSpy();
    window.addEventListener("scroll", handleSpy, { passive: true });
    window.addEventListener("resize", handleSpy);
    return () => {
      window.removeEventListener("scroll", handleSpy);
      window.removeEventListener("resize", handleSpy);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Reflect the choice immediately; the scroll listener keeps it in sync
    // afterwards as the page settles.
    setActiveId(sectionId);
    setIsMenuOpen(false);
  };

  const itemClass = (id: string) =>
    `transition-colors whitespace-nowrap ${
      activeId === id
        ? "text-accent font-medium"
        : "hover:text-primary"
    }`;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-background/80 backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="text-xl font-bold text-accent cursor-pointer whitespace-nowrap"
            onClick={() => scrollToSection("home")}
          >
            Ajay R
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-current={activeId === item.id ? "true" : undefined}
                className={itemClass(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="bg-secondary hover:bg-secondary/80"
            >
              {resolvedTheme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={`text-left py-2 transition-colors ${
                    activeId === item.id
                      ? "text-accent font-medium"
                      : "hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
