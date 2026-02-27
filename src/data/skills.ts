export interface TechnicalSkill {
  name: string;
  level: number;
}

export interface Tool {
  name: string;
  icon: string;
}

export const skillsData = {
  technical: [
    { name: "Python", level: 95 },
    { name: "Shell", level: 90 },
    { name: "Bash Scripting", level: 85 },
    { name: "SQL", level: 80 },
    { name: "SQL Server", level: 95 },
    { name: "PostgreSQL", level: 75 },
  ],
  tools: [
    { 
    name: "AWS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
  },
  { 
    name: "GitHub", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
  },
  { 
    name: "Spark", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" 
  },
  { 
    name: "Scikit-learn", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
  },
  { 
    name: "CloudWatch", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
  },
  { 
    name: "IAM", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
  }
  ],
  soft: [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Leadership",
    "Critical Thinking",
  ]
};