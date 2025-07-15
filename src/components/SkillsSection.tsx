import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Cpu, 
  Database, 
  GraduationCap, 
  Wifi, 
  Zap,
  Code,
  Settings,
  Network,
  CircuitBoard
} from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Artificial Intelligence",
      icon: Brain,
      level: 100,
      color: "text-primary",
      description: "Machine Learning, Deep Learning, Neural Networks",
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn"]
    },
    {
      title: "Internet of Things",
      icon: Wifi,
      level: 95,
      color: "text-accent",
      description: "IoT Architecture, Sensor Integration, Edge Computing",
      technologies: ["MQTT", "CoAP", "LoRaWAN", "Zigbee"]
    },
    {
      title: "Embedded Systems",
      icon: Cpu,
      level: 90,
      color: "text-cyber-purple",
      description: "Microcontrollers, Real-time Systems, Firmware Development",
      technologies: ["ESP32", "Arduino", "Raspberry Pi", "STM32"]
    },
    {
      title: "Database & Backend",
      icon: Database,
      level: 85,
      color: "text-tech-orange",
      description: "Database Design, API Development, Cloud Integration",
      technologies: ["MySQL", "MongoDB", "Node.js", "AWS"]
    },
    {
      title: "Communication Protocols",
      icon: Network,
      level: 85,
      color: "text-neon-green",
      description: "TCP/IP, HTTP, UDP, MQTT, Industrial Protocols",
      technologies: ["Modbus", "CAN", "I2C", "SPI"]
    },
    {
      title: "Development Tools",
      icon: Code,
      level: 85,
      color: "text-primary",
      description: "Programming, Version Control, Testing",
      technologies: ["Python", "C/C++", "JavaScript", "Git"]
    },
    {
      title: "PCB Design",
      icon: CircuitBoard,
      level: 80,
      color: "text-accent",
      description: "Circuit Design, Layout, Prototyping",
      technologies: ["Altium", "KiCad", "Eagle", "Proteus"]
    },
    {
      title: "Research & Teaching",
      icon: GraduationCap,
      level: 80,
      color: "text-cyber-purple",
      description: "Academic Research, Technical Writing, Mentoring",
      technologies: ["LaTeX", "MATLAB", "R", "Statistics"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-secondary/20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-primary"></span>
              <Badge variant="outline" className="text-primary border-primary/20">Technical Skills</Badge>
              <span className="w-12 h-[1px] bg-primary"></span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Comprehensive</span>
              <br />
              <span className="gradient-text">Technical Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With a diverse skill set spanning embedded systems, IoT, AI, and industrial automation, 
              I bring comprehensive technical expertise to every project.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((skill, index) => (
              <Card 
                key={index}
                className="card-glow border-border/50 hover:border-primary/20 transition-smooth group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-secondary/50 ${skill.color} group-hover:scale-110 transition-transform`}>
                      <skill.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{skill.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Skill Level Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Proficiency</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={isVisible ? skill.level : 0} 
                      className="h-2"
                      style={{ 
                        transitionDelay: `${index * 0.1}s`,
                        transitionDuration: '1s'
                      }}
                    />
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-muted-foreground">Technologies:</span>
                    <div className="flex flex-wrap gap-1">
                      {skill.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-secondary/30 hover:bg-secondary/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="card-glow border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </CardContent>
            </Card>
            
            <Card className="card-glow border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            
            <Card className="card-glow border-cyber-purple/20 bg-gradient-to-r from-cyber-purple/5 to-cyber-purple/10">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-cyber-purple mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;