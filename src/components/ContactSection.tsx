import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { downloadVCard } from '@/utils/vcard';
import qrImage from '@/assets/aqilqr.png';

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Clock,
  Globe,
  Download
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleDownloadVCard = () => {
    const vCardData = {
      name: 'Ts. Muhammad Aqil Hafizzan',
      title: 'Professional Technologist • IoT & Embedded Systems Expert',
      email: 'aqil.oska@gmail.com',
      phone: '+60 12-242 6746',
      location: 'Juasseh, Malaysia',
      organization: 'Freelance',
      github: 'https://github.com/aqiloska',
      linkedin: 'https://www.linkedin.com/in/ts-muhammad-aqil-hafizzan-3941b0100/',
      tiktok: 'https://tiktok.com/aqilhafizzan',
    };

    downloadVCard(vCardData);

    toast({
      title: "vCard downloaded!",
      description: "Contact information has been saved to your device.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aqil.oska@gmail.com',
      href: 'mailto:aqil.oska@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+60 12-242 6746',
      href: 'tel:+60122426746',
      color: 'text-accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Juasseh, Malaysia',
      href: 'https://maps.google.com/?q=Juasseh,Malaysia',
      color: 'text-cyber-purple'
    },
    {
      icon: Globe,
      label: 'Timezone',
      value: 'GMT+8 (Malaysia)',
      color: 'text-tech-orange'
    }
  ];
  const TiktokIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
          fill="white" />
      </svg>
    );
  };

  const WhatsAppIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
          fill='white' />
      </svg>
    );
  };

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

  const socialLinks = [
    {
      icon: GithubIcon,
      label: 'GitHub',
      href: 'https://github.com/aqiloska',
      color: 'hover:text-primary'
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ts-muhammad-aqil-hafizzan-3941b0100/',
      color: 'hover:text-accent'
    },
    {
      icon: TiktokIcon,
      label: 'TikTok',
      href: 'https://tiktok.com/aqilhafizzan',
      color: 'hover:text-accent'
    },
    {
      icon: WhatsAppIcon,
      label: 'TikTok',
      href: 'https://wa.me/60122426746',
      color: 'hover:text-accent'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-primary"></span>
              <Badge variant="outline" className="text-primary border-primary/20">Let's Connect</Badge>
              <span className="w-12 h-[1px] bg-primary"></span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Ready to</span>
              <br />
              <span className="gradient-text">Collaborate?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects,
              and ways to leverage technology for meaningful impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Contact Info */}
            {/* Contact Details */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>

              <Card className="card-glow border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg tech-border hover:bg-primary/5 transition-smooth">
                      <div className={`p-2 rounded-lg bg-secondary/50 ${info.color}`}>
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-muted-foreground">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="card-glow border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-foreground">Availability</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    I'm currently available for freelance projects and consulting opportunities.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-accent font-medium">Available for new projects</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <Card className="card-glow border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Connect with me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className={`w-full rounded-full border-border/50 hover:border-primary/50 ${social.color} transition-smooth`}
                      asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon />
                      </a>
                    </Button>
                  ))}
                </div>

                <div className="flex gap-4 mb-6">
                  <img
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      borderColor: 'white'
                    }}
                    src={qrImage}
                    alt="Ts. Muhammad Aqil Hafizzan"
                    className="w-200 h-200 mx-auto p-3 object-cover shadow-xl dark:shadow-gray-800"
                  />
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                  onClick={handleDownloadVCard}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download vCard
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;