import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import profileImage from '@/assets/profile-image.png';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const titles = [
    'Professional Technologist',
    'IoT Systems Engineer',
    'AI & Embedded Systems Expert',
    'Industrial Innovation Leader'
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= currentTitle.length) {
        setTypedText(currentTitle.substring(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypedText('');
          setIsTyping(true);
        }, 2000);
        clearInterval(typeInterval);
      }
    }, 100);
    
    return () => clearInterval(typeInterval);
  }, [currentTitleIndex]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-background/90">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary))_0%,_transparent_50%)] opacity-10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-mono text-muted-foreground">
                <span className="w-8 h-[1px] bg-primary"></span>
                <span>Welcome to my digital space</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Ts. Muhammad</span>
                <br />
                <span className="gradient-text">Aqil Hafizzan</span>
              </h1>
              
              <div className="h-16 flex items-center">
                <span className="text-xl lg:text-2xl text-muted-foreground">
                  I'm a{' '}
                  <span className="text-primary font-semibold">
                    {typedText}
                    <span className={`inline-block w-0.5 h-6 bg-primary ml-1 ${isTyping ? 'animate-pulse' : ''}`}></span>
                  </span>
                </span>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Certified Professional Technologist specializing in IoT, AI, and embedded systems. 
                I design and implement innovative solutions that drive efficiency and operational excellence in industrial environments.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 glow-effect"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Let's Connect
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    View Portfolio
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full h-[90vh] p-0">
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle className="text-2xl font-bold gradient-text">
                      Portfolio & Design Work
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex-1 p-6 pt-0">
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      height: '0',
                      paddingTop: '56.25%',
                      paddingBottom: '0',
                      boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      willChange: 'transform'
                    }}>
                      <iframe
                        loading="lazy"
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          top: '0',
                          left: '0',
                          border: 'none',
                          padding: '0',
                          margin: '0'
                        }}
                        src="https://www.canva.com/design/DAFpGq4Xrt8/enG7QAXrlS2dZpSAIZ0E3A/view?embed"
                        allowFullScreen
                        allow="fullscreen"
                        title="Portfolio Design"
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            {/* Quick Contact */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+60 12-242 6746</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Juasseh, Malaysia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>aqil.oska@gmail.com</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-2xl"></div>
              
              {/* Profile Image Card */}
              <Card className="relative overflow-hidden rounded-full border-2 border-primary/20 card-glow">
                <img 
                  src={profileImage} 
                  alt="Ts. Muhammad Aqil Hafizzan" 
                  className="w-full h-full object-cover"
                />
              </Card>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center floating-animation">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm font-bold">IoT</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center floating-animation" style={{ animationDelay: '1s' }}>
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent text-xs font-bold">AI</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              <Button size="icon" variant="outline" className="rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/10">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;