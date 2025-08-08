import { ChevronDown, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cosmic">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <ScrollReveal>
            {/* Professional Avatar */}
            <div className="mb-8 relative inline-block">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                alt="Shreyash Desai - Professional headshot"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto animate-glow object-cover border-4 border-electric"
              />
              <div className="absolute inset-0 rounded-full bg-aurora opacity-20 animate-pulse"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            {/* Main Title */}
            <h1 className="text-4xl md:text-7xl font-bold mb-6 holographic-text animate-float">
              SHREYASH DESAI
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            {/* Typewriter Subtitle */}
            <div className="text-xl md:text-3xl text-silver mb-8 h-12">
              <span className="typewriter">
                Computer Engineer • Designer • Innovator • Problem Solver
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            {/* Location & Education */}
            <div className="text-lg md:text-xl text-electric mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Goa, India
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Goa College of Engineering
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            {/* Journey Highlight */}
            <p className="text-lg text-silver mb-12 max-w-3xl mx-auto leading-relaxed">
              Final-year Computer Engineering student with a unique international perspective, 
              having grown up in <span className="text-plasma">Oman</span> and now pursuing innovation in 
              <span className="text-neon"> India</span>. Passionate about bridging creativity and technology.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={scrollToProjects}
                className="bg-aurora text-midnight px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 animate-glow"
              >
                View My Work
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="glass px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 border-electric"
              >
                Get In Touch
              </Button>
            </div>
          </ScrollReveal>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-electric" />
          </div>
        </div>
      </div>
    </section>
  );
}
