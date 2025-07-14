import { Button } from "@/components/ui/button";
import { ArrowRight, Code } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-secondary to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Hi, I'm <span className="text-accent">Mohammad Kaif</span>
            </h1>
            <div className="text-xl lg:text-2xl text-gray-600 mb-8 overflow-hidden whitespace-nowrap">
              <span className="typing-animation">Full Stack Developer & Designer</span>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I create beautiful, functional digital experiences that solve real problems. 
              Specializing in modern web technologies and user-centered design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>View My Work</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="inline-flex items-center px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors"
              >
                <span>Get In Touch</span>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="Mohammad Kaif - Professional headshot"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <Code className="text-white text-2xl" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
