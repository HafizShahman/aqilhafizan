import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 bg-secondary/10 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">© 2024 Ts. Muhammad Aqil Hafizzan</p>
            <p className="text-sm">Professional Technologist • IoT & Embedded Systems Expert</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Vcard = () => {
  return
}

export default Index;
