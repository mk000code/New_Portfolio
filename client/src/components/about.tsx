import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Twitter, Code2, Trophy, Target, Award } from "lucide-react";
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
    { name: 'Other Platforms', value: 150, color: '#4ECDC4' },
  ];

  const platformData = [
    { platform: 'LeetCode', questions: 100, difficulty: 'Mixed' },
    { platform: 'CodeChef', questions: 60, difficulty: 'Medium' },
    { platform: 'Codeforces', questions: 45, difficulty: 'Hard' },
    { platform: 'HackerRank', questions: 35, difficulty: 'Easy' },
    { platform: 'GeeksforGeeks', questions: 10, difficulty: 'Mixed' },
  ];

  const COLORS = ['#FF6B35', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];

  const achievementStats = [
    { label: 'Total Questions', value: '250+', icon: Trophy, color: 'text-yellow-500' },
    { label: 'LeetCode Solved', value: '100', icon: Target, color: 'text-orange-500' },
    { label: 'Success Rate', value: '85%', icon: Award, color: 'text-green-500' },
  ];

  return (
    <section id="about" className="py-20 doom-about-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">My Story</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As a passionate developer from Ghaziabad, Delhi-NCR, I specialize in creating 
              efficient solutions through strong problem-solving skills and modern web technologies. 
              My journey in programming has been driven by a love for algorithmic thinking and 
              building scalable applications.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I believe in continuous learning and have solved over 250 DSA problems across 
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
                  href="#"
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

        {/* Problem Solving Section */}
        <div className="mt-20">
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-3xl font-bold text-primary mb-4">Problem Solving Excellence</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Demonstrating strong algorithmic thinking with 250+ DSA problems solved across multiple platforms
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
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="doom-card p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-primary mb-6 text-center">Platform-wise Performance</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={platformData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="platform" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="questions" fill="hsl(120, 100%, 40%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
