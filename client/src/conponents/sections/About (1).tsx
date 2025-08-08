import ScrollReveal from "@/components/animations/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold holographic-text mb-6">
              The Origin Story
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              A journey spanning continents, cultures, and countless lines of code
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <ScrollReveal delay={200}>
              {/* Oman Years */}
              <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-4 h-4 bg-plasma rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-plasma">The Oman Chapter</h3>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  alt="Oman landscape with modern architecture and palm trees"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-silver leading-relaxed">
                  Spent my formative years (age 1-10th grade) in the beautiful Sultanate of Oman, 
                  studying at <span className="text-electric">Indian School Muscat</span>. This international 
                  exposure shaped my global perspective and adaptability.
                </p>
                <div className="mt-4 text-sm text-electric">
                  📍 Indian School Muscat • 2018-2019 • 79.4% CBSE
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              {/* Goa Homecoming */}
              <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-4 h-4 bg-neon rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-neon">The Goa Homecoming</h3>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1587922546307-776227941871?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  alt="Beautiful Goa coastline with palm trees and serene waters"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-silver leading-relaxed">
                  Returned to India for higher secondary education in the coastal paradise of Goa. 
                  Completed my 12th grade at <span className="text-electric">Government Higher Secondary School, Canacona</span>, 
                  preparing for my engineering journey.
                </p>
                <div className="mt-4 text-sm text-electric">
                  📍 Canacona, Goa • 2020-2021 • 69% Goa Board
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              {/* Engineering Excellence */}
              <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-4 h-4 bg-electric rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-electric">Engineering Excellence</h3>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  alt="Modern university campus with students walking"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-silver leading-relaxed">
                  Currently pursuing Computer Engineering at <span className="text-electric">Goa College of Engineering</span> 
                  (2021-2025). Diving deep into algorithms, data structures, web development, and UI/UX design. 
                  Gaining practical experience through internships and personal projects.
                </p>
                <div className="mt-4 text-sm text-electric">
                  📍 Farmagudi, Goa • 2021-2025 • Computer Engineering
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Interactive Journey Map */}
          <ScrollReveal delay={800}>
            <div className="relative">
              <div className="glass p-8 rounded-2xl h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-center mb-8 holographic-text">Journey Timeline</h3>
                
                {/* Timeline Visualization */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-aurora"></div>
                  
                  {/* Timeline Points */}
                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-plasma rounded-full flex items-center justify-center text-2xl animate-glow z-10">
                        🏛️
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-plasma">2019</h4>
                        <p className="text-silver">Completed 10th in Oman</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-neon rounded-full flex items-center justify-center text-2xl animate-glow z-10">
                        🏖️
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-neon">2021</h4>
                        <p className="text-silver">12th Grade in Goa</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-electric rounded-full flex items-center justify-center text-2xl animate-glow z-10">
                        💻
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-electric">2025</h4>
                        <p className="text-silver">Engineering Graduate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
