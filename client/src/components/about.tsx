import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Twitter, Code2, Trophy, Target, Award, GraduationCap, Star, Medal } from "lucide-react";
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb, 
  SiGit 
} from "react-icons/si";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

  // Problem solving data
  const problemSolvingData = [
    { name: 'LeetCode', value: 100, color: '#FF6B35' },
    { name: 'Other Platforms', value: 105, color: '#4ECDC4' },
  ];

  const platformData = [
    { platform: 'LeetCode', questions: 100, difficulty: 'Mixed' },
    { platform: 'CodeChef', questions: 60, difficulty: 'Medium' },
    { platform: 'Codeforces', questions: 45, difficulty: 'Hard' },
  ];

  const COLORS = ['#FF6B35', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];

  const achievementStats = [
    { label: 'Total Questions', value: '205+', icon: Trophy, color: 'text-yellow-500' },
    { label: 'LeetCode Solved', value: '100', icon: Target, color: 'text-orange-500' },
    { label: 'Success Rate', value: '85%', icon: Award, color: 'text-green-500' },
  ];

  const educationalData = [
    { 
      level: '10th Grade', 
      result: '93%', 
      icon: Star, 
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/50',
      glowColor: 'hover:shadow-yellow-500/50'
    },
    { 
      level: '12th Grade', 
      result: '90%', 
      icon: Medal, 
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/50',
      glowColor: 'hover:shadow-blue-500/50'
    },
    { 
      level: 'College 1st Year', 
      result: '8.4 CGPA', 
      icon: GraduationCap, 
      color: 'text-green-500',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/50',
      glowColor: 'hover:shadow-green-500/50'
    },
  ];

  return (
    <section id="about" className="py-20 doom-about-bg doom-3d-container">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-primary mb-4 doom-text-3d doom-energy-pulse">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto doom-hologram rounded-lg p-4">Solving problems, one algorithm at a time | DSA | Tech Explorer | Code &gt; Talk</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">My Story</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">Hi, I'm KAIF, a second-year engineering student passionate about technology, problem-solving, and building intelligent systems that can make a real difference.  I’m currently pursuing my B.Tech in Computer Science and engineering college at KIET - GHAZIABAD. While my journey hasn’t been perfect, it’s been real — filled with learning, resilience, and a burning drive to grow beyond limitations.  Over the past year, I’ve been diving deep into:  Data Structures & Algorithms (DSA) – solving real-world problems through code.  Web Development – designing interactive and responsive web interfaces.  Artificial Intelligence & Machine Learning – exploring how machines learn, think, and solve human problems.  Despite the challenges, I’m committed to mastering skills that make me relevant, resilient, and remarkable in a future driven by AI and innovation. Currently, I’m working on full-stack AI-integrated projects and preparing myself for high-impact roles in tech.</p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I believe in continuous learning and have solved over 205 DSA problems across 
              various platforms. When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or working on innovative solutions.
            </p>
            <div className="flex items-center space-x-4">
              <Button className="doom-button inline-flex items-center px-6 py-3 rounded-lg transition-all">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/mohammad-kaif-66950427a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent text-xl transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent text-xl transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent text-xl transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-2 gap-4 doom-3d-container">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item doom-3d-card doom-metallic doom-intense-glow p-4 rounded-lg text-center cursor-pointer"
                >
                  <skill.icon className={`text-3xl ${skill.color} mb-2 mx-auto doom-floating`} />
                  <p className="font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Problem Solving Section */}
        <div className="mt-20">
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-3xl font-bold text-primary mb-4">Problem Solving Excellence</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Demonstrating strong algorithmic thinking with 205+ DSA problems solved across multiple platforms
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 relative z-10">
            {achievementStats.map((stat, index) => (
              <div key={index} className="text-center p-6 doom-card rounded-xl">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-background rounded-full shadow-lg mb-4`}>
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Pie Chart */}
            <div className="doom-card p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-primary mb-6 text-center">Questions Distribution</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={problemSolvingData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {problemSolvingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(0, 0%, 8%)', 
                      border: '1px solid hsl(0, 0%, 25%)',
                      borderRadius: '8px',
                      color: 'hsl(0, 0%, 95%)'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ color: 'hsl(0, 0%, 95%)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="doom-card p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-primary mb-6 text-center">Platform-wise Performance</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={platformData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 30%)" />
                  <XAxis dataKey="platform" stroke="hsl(0, 0%, 65%)" />
                  <YAxis stroke="hsl(0, 0%, 65%)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(0, 0%, 8%)', 
                      border: '1px solid hsl(0, 0%, 25%)',
                      borderRadius: '8px',
                      color: 'hsl(0, 0%, 95%)'
                    }}
                  />
                  <Bar dataKey="questions" fill="hsl(120, 100%, 40%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Educational Background Section */}
        <div className="mt-20">
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-3xl font-bold text-primary mb-4 doom-text-3d doom-energy-pulse">Educational Background</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto doom-hologram rounded-lg p-4">
              Academic excellence through consistent performance and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10 doom-3d-container">
            {educationalData.map((edu, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-xl ${edu.bgColor} ${edu.borderColor} border-2 p-6 
                           doom-3d-card doom-metallic doom-intense-glow transition-all duration-300 cursor-pointer group 
                           ${edu.glowColor} hover:shadow-2xl doom-floating`}
                style={{animationDelay: `${index * 0.5}s`}}
              >
                {/* Doom-style sticker effect */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-accent rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-accent rounded-full opacity-15 group-hover:opacity-30 transition-opacity"></div>
                
                {/* Icon with glow effect */}
                <div className={`inline-flex items-center justify-center w-20 h-20 ${edu.color} ${edu.bgColor} 
                                rounded-full shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300
                                group-hover:shadow-2xl`}>
                  <edu.icon size={40} className="group-hover:animate-pulse" />
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {edu.level}
                  </h4>
                  <div className={`text-3xl font-bold ${edu.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {edu.result}
                  </div>
                  <div className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                    Academic Achievement
                  </div>
                </div>

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                               bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
