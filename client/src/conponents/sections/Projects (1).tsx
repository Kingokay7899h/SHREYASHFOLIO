import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Projects() {
  const projects = [
    {
      id: "dams",
      title: "Document Approval Management System",
      description: "Revolutionary digital transformation solution eliminating paperwork in government offices. Features secure document workflows, real-time tracking, and automated approvals.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "electric",
      features: [
        { icon: "📋", title: "Digital Workflows", color: "electric" },
        { icon: "🔒", title: "Secure Processing", color: "neon" },
        { icon: "📊", title: "Analytics Dashboard", color: "plasma" },
        { icon: "⚡", title: "Real-time Updates", color: "quantum" },
      ],
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      stats: [
        { value: "100%", label: "Paperless", color: "electric" },
        { value: "70%", label: "Cost Reduction", color: "neon" },
        { value: "5x", label: "Efficiency", color: "plasma" },
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
      ],
    },
    {
      id: "puregleam",
      title: "PureGleam Dental Clinic",
      description: "Complete digital solution for dental practice management featuring appointment scheduling, patient records, automated email notifications, and responsive design for all devices.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "neon",
      features: [
        { icon: "📅", title: "Smart Scheduling", color: "neon" },
        { icon: "👥", title: "Patient Records", color: "electric" },
        { icon: "📧", title: "Auto Notifications", color: "plasma" },
        { icon: "📱", title: "Responsive Design", color: "quantum" },
      ],
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      stats: [
        { value: "90%", label: "Time Saved", color: "neon" },
        { value: "24/7", label: "Availability", color: "electric" },
        { value: "100%", label: "Responsive", color: "plasma" },
      ],
      screenshots: [
        "https://pixabay.com/get/g457b1444ede526e77f409e248b9bb751eeddbf9ccd1ec58f0320d43f3e25d2e194dafcd21256a1312a8f984c1e124a3f82c4ed900f68c54a911936a76af40447_1280.jpg",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
      ],
    },
    {
      id: "cricket-gear",
      title: "Cricket Gear Hub Mobile App",
      description: "Comprehensive mobile application design for cricket equipment marketplace. Features intuitive navigation, product catalogs, user profiles, and seamless shopping experience.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "quantum",
      features: [
        { icon: "🏏", title: "Product Catalog", color: "quantum" },
        { icon: "🛒", title: "Shopping Cart", color: "electric" },
        { icon: "👤", title: "User Profiles", color: "neon" },
        { icon: "📱", title: "Mobile-First", color: "plasma" },
      ],
      tech: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
      stats: [
        { value: "15+", label: "Screens", color: "quantum" },
        { value: "50+", label: "Components", color: "electric" },
        { value: "3", label: "User Flows", color: "neon" },
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
        "https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
        "https://pixabay.com/get/gc0749a26943cb2646bd01eef751ca5189d5303657295a3b7ae0da34872e1dce9c79f8dd292b5d9800b6e482e05095711faf4f8671a055f0812f41ef8d8cefcf1_1280.jpg",
        "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold holographic-text mb-6">
              Digital Masterpieces
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Transforming ideas into reality through code and creativity
            </p>
          </div>
        </ScrollReveal>
        
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 200}>
            <div className="mb-20">
              <div className="project-card glass p-8 rounded-2xl">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h3 className={`text-3xl md:text-4xl font-bold text-${project.color} mb-6`}>
                      {project.title}
                    </h3>
                    <p className="text-lg text-silver mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Key Features */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className={`bg-midnight p-4 rounded-lg border border-${feature.color}/20`}>
                          <div className="text-2xl mb-2">{feature.icon}</div>
                          <div className={`text-${feature.color} font-semibold`}>{feature.title}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-ghost mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Impact Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className={`text-2xl font-bold text-${stat.color}`}>{stat.value}</div>
                          <div className="text-sm text-silver">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button className={`bg-${project.color} text-midnight px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300`}>
                        Live Demo
                      </Button>
                      <Button variant="outline" className={`glass px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 border-${project.color}`}>
                        View Code
                      </Button>
                    </div>
                  </div>
                  
                  {/* Screenshot Gallery */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      src={project.image}
                      alt={`${project.title} showcase`}
                      className="w-full h-80 object-cover rounded-xl shadow-2xl mb-4"
                    />
                    
                    {/* Screenshot Grid */}
                    <div className="grid grid-cols-4 gap-2">
                      {project.screenshots.map((screenshot, screenshotIndex) => (
                        <img
                          key={screenshotIndex}
                          src={screenshot}
                          alt={`${project.title} screenshot ${screenshotIndex + 1}`}
                          className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer opacity-80 hover:opacity-100"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
