import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Experience() {
  const experiences = [
    {
      id: "fluxatic",
      period: "June 2024 - August 2024",
      role: "UI/UX Designer Intern",
      company: "Fluxatic™ Global",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      color: "electric",
      description: [
        "Designed intuitive user interfaces for web applications",
        "Created interactive prototypes using Figma",
        "Collaborated with development teams on implementation",
        "Conducted user research and usability testing",
      ],
      skills: ["Figma", "Prototyping", "User Research", "Team Collaboration"],
      stats: [
        { value: "5+", label: "Projects Designed" },
        { value: "3", label: "Months Duration" },
        { value: "95%", label: "User Satisfaction" },
      ],
    },
    {
      id: "engineering",
      period: "2021 - 2025",
      role: "Computer Engineering Student",
      company: "Goa College of Engineering",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      color: "neon",
      description: [
        "Comprehensive study of Computer Science fundamentals",
        "Hands-on experience with modern programming languages",
        "Active participation in technical projects and competitions",
        "Leadership roles in student technical committees",
      ],
      skills: ["Data Structures", "Algorithms", "Web Development", "Software Engineering"],
      stats: [
        { value: "2021", label: "Started Engineering" },
        { value: "2025", label: "Expected Graduation" },
        { value: "A+", label: "Academic Performance" },
      ],
    },
    {
      id: "education",
      period: "2008 - 2021",
      role: "Academic Foundation",
      company: "International & Indian Education",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      color: "plasma",
      description: [
        "10th Grade: Indian School Muscat, Oman (79.4% CBSE)",
        "12th Grade: Govt. Higher Secondary School, Goa (69%)",
        "Strong foundation in Mathematics and Science",
        "Cross-cultural adaptability and global perspective",
      ],
      skills: ["Academic Excellence", "Cultural Adaptability", "International Exposure", "Leadership"],
      stats: [
        { value: "13", label: "Years Education" },
        { value: "2", label: "Countries" },
        { value: "3", label: "Education Systems" },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative bg-cosmic">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold holographic-text mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Milestones and achievements that shaped my career path
            </p>
          </div>
        </ScrollReveal>
        
        {/* Timeline Visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-aurora"></div>
          
          {/* Experience Cards */}
          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <ScrollReveal key={experience.id} delay={index * 200}>
                <div className="relative">
                  {/* Timeline Node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-${experience.color} rounded-full border-4 border-midnight z-10 animate-pulse`}></div>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={`glass p-8 rounded-xl ${index % 2 === 1 ? 'order-2 md:order-1' : ''}`}>
                      <div className={`text-sm text-${experience.color} font-mono mb-2`}>{experience.period}</div>
                      <h3 className={`text-2xl font-bold text-${experience.color} mb-4`}>{experience.role}</h3>
                      <h4 className="text-xl text-plasma mb-6">{experience.company}</h4>
                      
                      <img
                        src={experience.image}
                        alt={`${experience.company} environment`}
                        className="w-full h-48 object-cover rounded-lg mb-6"
                      />
                      
                      <ul className="space-y-3 text-silver">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className={`w-2 h-2 bg-${experience.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Skills Gained */}
                      <div className="mt-6">
                        <h5 className="text-lg font-bold text-ghost mb-3">Skills Developed</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-midnight/50 text-silver px-3 py-1 rounded-full text-sm border border-silver/20">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Impact Metrics */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                      {experience.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="glass p-6 rounded-xl text-center">
                          <div className={`text-4xl font-bold text-${experience.color} mb-2`}>{stat.value}</div>
                          <div className="text-silver">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
