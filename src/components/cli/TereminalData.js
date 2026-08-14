// =============================================
//   terminalData.js — Nitesh's Terminal Config
// =============================================

export const lexarCoder = {
  name: "Nitesh Pandey",
  email: "niteshpandey3378@gmail.com",
  role: "Full Stack Developer",
  location: "Noida, India",
  project: "My Portfolio",
  type: "Personal Portfolio",
  stack: "React, Node.js, SCSS",
  github: "github.com/lexarCoder",
};

export const welcomeMessage = `
╔═══════════════════════════════════════════════╗
║   Welcome to Nitesh Pandey's Portfolio    ║
║   Full Stack Developer  |  Noida, India   ║
║   Type 'about help' to see all commands   ║
╚═══════════════════════════════════════════════╝
`;

export const terminalCommands = {
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: (...args) => args.join(" "),
  },

  about: {
    description: "Show info about Nitesh, the project, or system.",
    usage: "about [me | project | system | all | help]",
    fn: (sub) => {
      switch (sub) {
        case "user":
          return `
👤  Name     : ${lexarCoder.name}
📧  Email    : ${lexarCoder.email}
💼  Role     : ${lexarCoder.role}
🌍  Location : ${lexarCoder.location}
🚀  Vibe     : Building cool things, one commit at a time
          `;
        case "project":
          return `
🚀  Project  : ${lexarCoder.project}
📁  Type     : ${lexarCoder.type}
🌿  Stack    : ${lexarCoder.stack}
📝  Status   : In active development ✅
          `;
        case "system":
          return `
💻  Platform : ${navigator.platform}
🌐  BrowlexarCoder ${navigator.userAgent.split('/')[0]}
🕒  Time     : ${new Date().toLocaleString()}
🌍  Language : ${navigator.language}
          `;
        case "all":
          return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤  ABOUT ME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Name     : ${lexarCoder.name}
  Email    : ${lexarCoder.email}
  Role     : ${lexarCoder.role}
  Location : ${lexarCoder.location}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀  PROJECT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Name     : ${lexarCoder.project}
  Type     : ${lexarCoder.type}
  Stack    : ${lexarCoder.stack}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💻  SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Platform : ${navigator.platform}
  Time     : ${new Date().toLocaleString()}
  Language : ${navigator.language}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          `;
        case "help":
        default:
          return `
📌  Usage: about [command]

  me       →  Nitesh ke baare mein info
  project  →  Portfolio project details
  system   →  Browser & system info
  all      →  Sab ek saath dekho
  help     →  Yeh menu
          `;
      }
    },
  },

  whoami: {
    description: "Show developer identity.",
    usage: "whoami",
    fn: () => `${lexarCoder.name} — ${lexarCoder.role} @ ${lexarCoder.location}`,
  },

  contact: {
    description: "Show contact info.",
    usage: "contact",
    fn: () => `📧 ${lexarCoder.email}`,
  },

};