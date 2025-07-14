import { Button } from "@/components/ui/button";
import { ArrowRight, Code } from "lucide-react";

import kk from "@assets/kk.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Account for fixed navigation height
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 doom-hero-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Hi, I'm <span className="text-accent doom-text-glow">Mohammad Kaif</span>
            </h1>
            <div className="text-xl lg:text-2xl text-muted-foreground mb-8 overflow-hidden whitespace-nowrap">
              <span className="typing-animation"> DSA | Tech Explorer </span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Hi I am a second-year engineering student passionate about technology, problem-solving
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="doom-button inline-flex items-center px-8 py-3 rounded-lg transition-all"
              >
                <span>View My Arsenal</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="inline-flex items-center px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-background transition-colors"
              >
                <span>Contact</span>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <img
                src={kk}
                alt="Mohammad Kaif - Professional headshot"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto mt-[60px] mb-[60px] pt-[-4px] pb-[-4px]"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg border-2 border-accent">
                <Code className="text-background text-2xl" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
