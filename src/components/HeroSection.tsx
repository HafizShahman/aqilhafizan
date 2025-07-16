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

    const GithubIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          fill='white' />
      </svg>

    );
  };

  const LinkedinIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
          fill='white' />
      </svg>
    );
  };
  
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
                <GithubIcon  />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/10">
                <LinkedinIcon  />
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