import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Skills() {
  const frontendSkills = [
    { name: "HTML/CSS", icon: "🌐", size: "w-24 h-24", gradient: "from-orange-500 to-red-500", delay: 0 },
    { name: "JavaScript", icon: "⚡", size: "w-32 h-32", gradient: "from-yellow-400 to-orange-500", delay: 1 },
    { name: "React", icon: "⚛️", size: "w-28 h-28", gradient: "from-electric to-blue-400", delay: 2 },
    { name: "jQuery", icon: "📱", size: "w-20 h-20", gradient: "from-blue-600 to-indigo-600", delay: 3 },
    { name: "Bootstrap", icon: "🎨", size: "w-24 h-24", gradient: "from-purple-600 to-quantum", delay: 4 },
  ];

  const backendSkills = [
    { name: "PHP", icon: "🐘", size: "w-36 h-36", gradient: "from-quantum to-purple-700", delay: 0.5 },
    { name: "MySQL", icon: "🗃️", size: "w-28 h-28", gradient: "from-neon to-green-600", delay: 1.5 },
    { name: "Node.js", icon: "📡", size: "w-32 h-32", gradient: "from-green-400 to-neon", delay: 2.5 },
  ];

  const toolsSkills = [
    { name: "Figma", icon: "🎯", size: "w-24 h-24", gradient: "from-pink-500 to-rose-500", delay: 1 },
    { name: "Git", icon: "🔀", size: "w-28 h-28", gradient: "from-gray-700 to-black", delay: 2 },
    { name: "GitHub", icon: "🐙", size: "w-24 h-24", gradient: "from-gray-600 to-gray-800", delay: 3 },
    { name: "UI/UX", icon: "✨", size: "w-32 h-32", gradient: "bg-aurora", delay: 4 },
  ];

  return (
    <section id="skills" className="py-20 relative bg-cosmic">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold holographic-text mb-6">
              Tech Constellation
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Explore my technical universe where each skill shines like a star
            </p>
          </div>
        </ScrollReveal>
        
        {/* Frontend Galaxy */}
        <ScrollReveal delay={200}>
          <div className="relative min-h-[600px] mb-16">
            <h3 className="text-2xl font-bold text-electric mb-8 text-center">Frontend Universe</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
              {frontendSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`skill-planet ${skill.size} bg-gradient-to-br ${skill.gradient} rounded-full flex items-center justify-center text-3xl animate-float cursor-pointer`}
                  style={{ animationDelay: `${skill.delay}s` }}
                  title={skill.name}
                >
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        {/* Backend Galaxy */}
        <ScrollReveal delay={400}>
          <div className="relative min-h-[400px] mb-16">
            <h3 className="text-2xl font-bold text-quantum mb-8 text-center">Backend Solar System</h3>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {backendSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`skill-planet ${skill.size} bg-gradient-to-br ${skill.gradient} rounded-full flex items-center justify-center text-5xl animate-float cursor-pointer`}
                  style={{ animationDelay: `${skill.delay}s` }}
                  title={skill.name}
                >
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        {/* Design & Tools Cluster */}
        <ScrollReveal delay={600}>
          <div className="relative mb-16">
            <h3 className="text-2xl font-bold text-plasma mb-8 text-center">Design & Tools Nebula</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {toolsSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`skill-planet ${skill.size} ${skill.gradient.startsWith('bg-') ? skill.gradient : `bg-gradient-to-br ${skill.gradient}`} rounded-full flex items-center justify-center text-3xl animate-float cursor-pointer`}
                  style={{ animationDelay: `${skill.delay}s` }}
                  title={skill.name}
                >
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        {/* Skill Details */}
        <ScrollReveal delay={800}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold text-electric mb-4">Frontend Mastery</h4>
              <div className="space-y-2 text-silver">
                <div>HTML5 • CSS3 • JavaScript ES6+</div>
                <div>React • jQuery • Bootstrap</div>
                <div>Responsive Design • UI/UX</div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold text-quantum mb-4">Backend Excellence</h4>
              <div className="space-y-2 text-silver">
                <div>PHP • MySQL • Node.js</div>
                <div>Database Design • API Development</div>
                <div>Server Management • Security</div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold text-plasma mb-4">Design & Tools</h4>
              <div className="space-y-2 text-silver">
                <div>Figma • UI/UX Design</div>
                <div>Git • GitHub • Version Control</div>
                <div>Prototyping • Wireframing</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
