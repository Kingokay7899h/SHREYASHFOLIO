import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#", color: "text-blue-400" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "text-blue-300" },
    { icon: Github, label: "GitHub", href: "#", color: "text-gray-300" },
  ];

  return (
    <section id="contact" className="py-20 relative bg-cosmic">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold holographic-text mb-6">
              Let's Create Together
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Ready to bring your next project to life? Let's connect and build something amazing.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <ScrollReveal delay={200}>
              {/* Personal Info */}
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-electric mb-6">Get In Touch</h3>
                
                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-electric/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-electric" />
                    </div>
                    <div>
                      <div className="text-electric font-semibold">Email</div>
                      <div className="text-silver">shreyashdesai60@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-neon/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-neon" />
                    </div>
                    <div>
                      <div className="text-neon font-semibold">Phone</div>
                      <div className="text-silver">+91 7666987026</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-quantum/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-quantum" />
                    </div>
                    <div>
                      <div className="text-quantum font-semibold">Location</div>
                      <div className="text-silver">Shantinagar, Ponda, Goa, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              {/* Social Links */}
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-plasma mb-6">Connect With Me</h3>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-3 p-4 rounded-lg bg-midnight/30 hover:bg-midnight/50 transition-all duration-300"
                    >
                      <social.icon className={`w-6 h-6 ${social.color}`} />
                      <span className={`${social.color} font-semibold`}>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              {/* Quick Stats */}
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-ghost mb-6">Let's Work Together</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-electric mb-1">24h</div>
                    <div className="text-sm text-silver">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon mb-1">100%</div>
                    <div className="text-sm text-silver">Commitment</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Contact Form */}
          <ScrollReveal delay={800}>
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-ghost mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-silver text-sm font-semibold mb-3">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="bg-midnight border-electric/30 text-ghost placeholder-silver/50 focus:border-electric"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-silver text-sm font-semibold mb-3">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-midnight border-electric/30 text-ghost placeholder-silver/50 focus:border-electric"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-silver text-sm font-semibold mb-3">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Collaboration"
                    className="bg-midnight border-electric/30 text-ghost placeholder-silver/50 focus:border-electric"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-silver text-sm font-semibold mb-3">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-midnight border-electric/30 text-ghost placeholder-silver/50 focus:border-electric resize-none"
                    required
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-aurora text-midnight px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 animate-glow"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    asChild
                    className="glass px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 border-electric"
                  >
                    <a href="mailto:shreyashdesai60@gmail.com">
                      Direct Email
                    </a>
                  </Button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Resume Download */}
        <ScrollReveal delay={1000}>
          <div className="text-center mt-16">
            <div className="glass p-8 rounded-xl max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-plasma mb-4">Download Resume</h3>
              <p className="text-silver mb-6">Get a comprehensive overview of my skills and experience</p>
              <Button className="bg-plasma text-midnight px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 animate-glow">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
