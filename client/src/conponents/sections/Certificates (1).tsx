import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Certificates() {
  const certificates = [
    {
      id: "hci",
      title: "Human-Computer Interaction",
      provider: "NPTEL • IIT Madras",
      icon: "🎯",
      color: "electric",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      duration: "12 Weeks",
      grade: "Elite",
      year: "2023",
    },
    {
      id: "sna",
      title: "Social Network Analysis",
      provider: "NPTEL • IIT Madras",
      icon: "🕸️",
      color: "neon",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      duration: "8 Weeks",
      grade: "Elite",
      year: "2023",
    },
    {
      id: "leadership",
      title: "Leadership & Team Management",
      provider: "NPTEL • IIM Bangalore",
      icon: "👑",
      color: "quantum",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      duration: "10 Weeks",
      grade: "Elite",
      year: "2024",
    },
    {
      id: "privacy",
      title: "Privacy & Security in Online Social Media",
      provider: "NPTEL • IIIT Hyderabad",
      icon: "🔐",
      color: "plasma",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      duration: "12 Weeks",
      grade: "Elite",
      year: "2024",
    },
    {
      id: "trading",
      title: "Financial Trading & Analysis",
      provider: "Professional Certification",
      icon: "📈",
      color: "electric",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      duration: "6 Months",
      grade: "Certified",
      year: "2023",
    },
    {
      id: "upcoming",
      title: "More Certifications",
      provider: "Coming Soon",
      icon: "➕",
      color: "silver",
      image: null,
      duration: "TBD",
      grade: "TBD",
      year: "2024",
      isPlaceholder: true,
    },
  ];

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold holographic-text mb-6">
              Achievement Gallery
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Professional certifications and learning milestones
            </p>
          </div>
        </ScrollReveal>
        
        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={index * 100}>
              <div className={`certificate-frame glass p-6 rounded-xl ${cert.isPlaceholder ? 'opacity-50' : ''}`}>
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 bg-${cert.color}/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 animate-glow`}>
                    {cert.icon}
                  </div>
                  <h3 className={`text-xl font-bold text-${cert.color} mb-2`}>{cert.title}</h3>
                  <p className="text-sm text-silver">{cert.provider}</p>
                </div>
                
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-48 object-cover rounded-lg mb-4 opacity-90 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="w-full h-48 bg-midnight rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-silver text-lg">In Progress...</span>
                  </div>
                )}
                
                <div className={`space-y-2 text-sm text-silver ${cert.isPlaceholder ? 'opacity-50' : ''}`}>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="text-electric">{cert.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grade:</span>
                    <span className="text-neon">{cert.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year:</span>
                    <span className="text-plasma">{cert.year}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Achievement Summary */}
        <ScrollReveal delay={600}>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-electric mb-2">5+</div>
              <div className="text-silver">Professional Certificates</div>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-neon mb-2">Elite</div>
              <div className="text-silver">Average Grade</div>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-quantum mb-2">48+</div>
              <div className="text-silver">Weeks of Learning</div>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-plasma mb-2">100%</div>
              <div className="text-silver">Completion Rate</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
