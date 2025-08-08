export const PERSONAL_INFO = {
  name: "Shreyash Desai",
  title: "Computer Engineer & UI/UX Designer",
  email: "shreyashdesai60@gmail.com",
  phone: "+91 7666987026",
  location: "Shantinagar, Ponda, Goa, India",
  tagline: "Computer Engineer • Designer • Innovator • Problem Solver",
  description: "Final-year Computer Engineering student with a unique international perspective, having grown up in Oman and now pursuing innovation in India. Passionate about bridging creativity and technology.",
} as const;

export const EDUCATION = {
  college: {
    name: "Goa College of Engineering",
    degree: "Computer Engineering",
    period: "2021-2025",
    location: "Farmagudi, Goa",
  },
  twelfth: {
    name: "Government Higher Secondary School",
    grade: "69% Goa Board",
    period: "2020-2021",
    location: "Canacona, Goa",
  },
  tenth: {
    name: "Indian School Muscat",
    grade: "79.4% CBSE",
    period: "2018-2019",
    location: "Oman",
  },
} as const;

export const EXPERIENCE = {
  internship: {
    role: "UI/UX Designer Intern",
    company: "Fluxatic™ Global",
    period: "June 2024 - August 2024",
    type: "Internship",
  },
} as const;

export const SKILLS = {
  frontend: ["HTML5", "CSS3", "JavaScript ES6+", "React", "jQuery", "Bootstrap"],
  backend: ["PHP", "MySQL", "Node.js"],
  design: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
  tools: ["Git", "GitHub", "Version Control"],
} as const;

export const COLORS = {
  midnight: "#0B0F1A",
  electric: "#00F5FF",
  quantum: "#8B5CF6",
  plasma: "#FFD700",
  ghost: "#FAFBFC",
  silver: "#94A3B8",
  neon: "#10B981",
  crimson: "#EF4444",
} as const;
