/**
 * @file     : profile.config.ts
 * @author   : Nitesh Pandey
 * @role     : Full-Stack Developer — Fresher
 * @location : Noida, India
 * @status   : Open to Opportunities 🚀
 */

// --------------------------------------------------
// 1. IDENTITY
// --------------------------------------------------
const DEVELOPER = {
  name     : "Nitesh Pandey",
  role     : "Full-Stack Developer",
  status   : "Fresher | Open to Opportunities",
  location : "Noida, India",
  remote   : true,
} as const;

// --------------------------------------------------
// 2. TECH STACK
// --------------------------------------------------
const TECH_STACK = {
  frontend : [
    "React.js",    // 90%
    "TailwindCSS", // 85%
    "HTML / CSS",  // 95%
    "JavaScript",  // 85%
  ],
  backend  : [
    "Node.js",     // 80%
    "MongoDB",     // 75%
    "PostgreSQL",  // 70%
    "Docker",      // 65%
  ],
  tools    : ["AWS", "Git", "GitHub", "VS Code"],
} as const;

// --------------------------------------------------
// 3. EDUCATION
// --------------------------------------------------
interface Education {
  degree     : string;
  university : string;
  period     : string;
  status     : string;
  subjects   : string[];
}

const EDUCATION: Education = {
  degree     : "BCA — Bachelor of Computer Applications",
  university : "Sri Dev Suman Uttarakhand University",
  period     : "2022 – 2025",
  status     : "Graduated ✅",
  subjects   : [
    "Data Structures & Algorithms",
    "Web Development",
    "Database Management",
    "Operating Systems",
  ],
};

// --------------------------------------------------
// 4. PROJECTS
// --------------------------------------------------
interface Project {
  name     : string;
  year     : number;
  type     : string;
  stack    : string[];
  features : string[];
}

const PROJECTS: Project[] = [
  {
    name     : "Portfolio 2.0",
    year     : 2025,
    type     : "Personal Project",
    stack    : ["React.js", "SCSS", "Framer Motion", "react-rnd"],
    features : [
      "macOS-style draggable window UI",
      "Dynamic GitHub project cards",
      "Terminal-style profile viewer",
      "Animated dock with magnification",
    ],
  },
];

// --------------------------------------------------
// 5. ACHIEVEMENTS
// --------------------------------------------------
interface Achievement {
  type  : string;
  title : string;
  year  : number;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    type  : "Project",
    title : "Built macOS-style Portfolio with draggable windows",
    year  : 2025,
  },
  {
    type  : "Self-Learning",
    title : "Full-Stack Dev — React, Node, MongoDB, PostgreSQL",
    year  : 2024,
  },
];

// --------------------------------------------------
// EXPORT
// --------------------------------------------------
export default {
  DEVELOPER,
  TECH_STACK,
  EDUCATION,
  PROJECTS,
  ACHIEVEMENTS,
};