import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Twitter, Code2 } from "lucide-react";
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb, 
  SiGit 
} from "react-icons/si";

export default function About() {
  const skills = [
    { name: "Python", icon: SiPython, color: "text-blue-600" },
    { name: "C", icon: Code2, color: "text-blue-700" },
    { name: "C++", icon: Code2, color: "text-blue-800" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "React", icon: SiReact, color: "text-blue-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Git", icon: SiGit, color: "text-red-500" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">My Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 5 years of experience in web development and design, I've worked with 
              startups and established companies to bring their digital visions to life. My 
              passion lies in creating user-centric solutions that are both beautiful and functional.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I believe in the power of clean code, thoughtful design, and continuous learning. 
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open source projects, or hiking in the mountains.
            </p>
            <div className="flex items-center space-x-4">
              <Button className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-accent text-xl transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-accent text-xl transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-accent text-xl transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item p-4 bg-gray-50 rounded-lg text-center cursor-pointer"
                >
                  <skill.icon className={`text-3xl ${skill.color} mb-2 mx-auto`} />
                  <p className="font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
