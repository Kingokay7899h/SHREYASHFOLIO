export default function Footer() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 bg-midnight border-t border-electric/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-bold holographic-text mb-4">SHREYASH DESAI</div>
          <p className="text-silver mb-6">Computer Engineer • UI/UX Designer • Problem Solver</p>
          
          {/* Footer Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-silver hover:text-electric transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-silver/70 text-sm">
            © 2024 Shreyash Desai. Crafted with passion and precision. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
