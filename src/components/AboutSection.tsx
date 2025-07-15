import { CheckCircle, Award, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Professional Technologist (Ts.)",
      description: "Electrical & Electronics Technology - MBOT (2024)",
      color: "text-primary"
    },
    {
      icon: CheckCircle,
      title: "Graduate Engineer",
      description: "Board of Engineers Malaysia - BEM (2022)",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "IMarEST Member",
      description: "Institute of Marine Engineering, Science & Technology (2022)",
      color: "text-cyber-purple"
    },
    {
      icon: Zap,
      title: "IoT Specialist",
      description: "Industrial & Embedded Systems Expert",
      color: "text-tech-orange"
    }
  ];

  const expertise = [
    "Artificial Intelligence & Machine Learning",
    "Internet of Things (IoT) Solutions",
    "Industrial Internet of Things (IIoT)",
    "Embedded Systems Design",
    "PCB Design & Development",
    "Communication Protocols",
    "Industrial Automation",
    "Research & Development"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-primary"></span>
              <Badge variant="outline" className="text-primary border-primary/20">About Me</Badge>
              <span className="w-12 h-[1px] bg-primary"></span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Innovative Technology</span>
              <br />
              <span className="text-foreground">Professional</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I am a dedicated and certified Professional Technologist with extensive expertise in emerging technologies. 
              My passion lies in designing innovative solutions that bridge the gap between cutting-edge technology and practical industrial applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content - Story */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  My Journey in Technology
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With a strong technical background in electronic IoT systems, I excel in designing and implementing 
                    innovative solutions that drive efficiency and operational performance across various industries.
                  </p>
                  <p>
                    My professional certification as a technologist, combined with hands-on experience in embedded systems 
                    and automation, positions me as a valuable contributor to teams looking to harness the power of technology 
                    to innovate and grow.
                  </p>
                  <p>
                    I specialize in bridging the gap between complex technological concepts and practical, real-world applications, 
                    ensuring that innovative solutions are not only technically sound but also commercially viable and scalable.
                  </p>
                </div>
              </div>

              {/* Expertise Grid */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Core Expertise</h4>
                <div className="grid grid-cols-1 gap-3">
                  {expertise.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg tech-border hover:bg-primary/5 transition-smooth"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Achievements */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Professional Achievements
              </h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="card-glow border-border/50 hover:border-primary/20 transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-secondary/50 ${achievement.color}`}>
                          <achievement.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Info Card */}
              <Card className="card-glow border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Ready to Collaborate?</h4>
                  <p className="text-muted-foreground mb-4">
                    I'm currently available for freelance projects and consulting opportunities 
                    in IoT, AI, and embedded systems development.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-accent font-medium">Available for new projects</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;