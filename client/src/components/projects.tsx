import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projectsData } from "@/lib/projects-data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 doom-projects-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-green-600/10 to-green-400/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-green-400/20 to-green-500/20 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-green-600/20 to-green-700/20 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-green-300/20 to-green-400/20 rounded-full opacity-30 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-primary mb-4">Working on Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Currently developing exciting projects across web development and programming
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card rounded-xl shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="text-accent hover:text-blue-700 transition-colors inline-flex items-center"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-accent hover:text-blue-700 transition-colors inline-flex items-center"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 relative z-10">
          <div className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-background rounded-lg shadow-lg">
            <span>More Projects Coming Soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
