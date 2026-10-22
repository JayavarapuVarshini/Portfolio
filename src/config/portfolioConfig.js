/**
 * ============================================================================
 * PORTFOLIO CENTRAL CONFIGURATION FILE
 * ============================================================================
 */

export const portfolioConfig = {
  personal: {
    fullName: "Varshini Jayavarapu",
    monogram: "VJ",
    introLabel: "HELLO, I'M",
    bioIntro: "I build useful digital experiences through code, data, and thoughtful problem-solving.",
    phone: "+91 9346361908",
    // Hero image: set a custom path (e.g. "/my-photo.jpg" in public/ or an image URL)
    // If left empty (""), it defaults to the image in src/assets/developer-hero.png
    heroImage: "",

    // Roles cycled in the Hero typing animation
    roles: [
      "Full Stack Developer",
      "Computer Science Student",
      "Java & Spring Boot Builder",
      "Problem Solver"
    ],

    // Four core focus words for the animated illustration
    focusKeywords: [
      { text: "BUILD", position: "top-left" },
      { text: "ANALYZE", position: "top-right" },
      { text: "CREATE", position: "bottom-left" },
      { text: "SOLVE", position: "bottom-right" }
    ],

    // About section details
    about: {
      headline: "Turning ideas into functional, data-informed software.",
      paragraphs: [
        "I'm a Computer Science student passionate about building useful applications, exploring AI/ML, and creating clean user experiences. I enjoy turning ideas into practical solutions through code and continuous learning."
      ],
      quickFacts: [
        { label: "Education", value: "B.Tech in CSE — KL University (CGPA 9.5)" },
        { label: "Focus Areas", value: "Full-Stack Dev, Spring Boot & React" },
        { label: "Core Mindset", value: "Curious Learner & Problem Solver" }
      ]
    },

    // Contact and Social Links
    contact: {
      email: "varshinijayavarapu3@gmail.com",
      emailDisplay: "varshinijayavarapu3@gmail.com",
      phone: "+91 9346361908",
      linkedin: "https://www.linkedin.com/in/jayavarapu-varshini-64313a348/",
      github: "https://github.com/JayavarapuVarshini",
      resumeUrl: "/resume.pdf"
    },

    // Complete Resume Data from Student CV
    resumeData: {
      fullName: "VARSHINI JAYAVARAPU",
      phone: "+91 9346361908",
      email: "varshinijayavarapu3@gmail.com",
      linkedin: "https://www.linkedin.com/in/jayavarapu-varshini-64313a348/",
      github: "https://github.com/JayavarapuVarshini",
      objective: "Computer Science undergraduate at KL University (CGPA 9.5) with strong foundations in Data Structures, Algorithms, and Object-Oriented Programming. Experienced in developing full-stack web applications using Java, Spring Boot, React.js, and MySQL, designing REST APIs, and building scalable backend systems. Passionate about solving real-world engineering problems and continuously improving through coding platforms like LeetCode and CodeChef.",
      education: {
        institution: "K L University",
        location: "Guntur, AP",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        cgpa: "9.5 CGPA",
        period: "Aug. 2024 – May 2028"
      },
      technicalSkills: {
        languages: "C/C++, Java, Python, JavaScript",
        webDevelopment: "HTML5, CSS3, Node.js, React.js, Spring, Spring Boot",
        databases: "MySQL, MongoDB",
        developerTools: "Git, GitHub, VS Code, Postman",
        softSkills: "Communication, Teamwork, Time Management, Problem Solving",
        coreConcepts: "Data structures, OOP, Computer networks, Operating Systems"
      },
      experience: [
        {
          role: "Social Internship – Agriculture",
          bullets: [
            "Collected and analyzed agricultural datasets to identify productivity challenges.",
            "Applied data analysis techniques using Python and Excel to evaluate crop patterns.",
            "Collaborated with multidisciplinary teams to derive insights for improving farming practices.",
            "Presented analytical findings and recommendations."
          ]
        }
      ],
      certifications: [
        "Introduction to Machine Learning — NPTEL",
        "GitHub Copilot Global Certification — GitHub",
        "AWS Cloud Foundations"
      ],
      projects: [
        {
          name: "Handloom Web Application",
          tech: "React, HTML, CSS, JavaScript",
          bullets: [
            "A web application for showcasing handloom products.",
            "Role: Team Lead. Focused on responsive layouts and reusable component architecture."
          ]
        },
        {
          name: "Global Loom Collective",
          tech: "React, HTML, CSS, JavaScript",
          bullets: [
            "A handloom e-commerce concept.",
            "Showcasing artisan craft products with verified web technologies."
          ]
        }
      ],
      languagesSpoken: ["English", "Hindi", "Telugu"]
    }
  },

  // Skills categorized
  skills: {
    programming: [
      { name: "Java", icon: "java" },
      { name: "C/C++", icon: "c" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" }
    ],
    webDevelopment: [
      { name: "Spring Boot", icon: "spring" },
      { name: "React.js", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "HTML5 & CSS3", icon: "html" }
    ],
    databases: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" }
    ],
    tools: [
      { name: "Git & GitHub", icon: "git" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" }
    ],
    additionalInterests: [
      { name: "Data Structures & Algorithms", icon: "dsa" },
      { name: "Machine Learning (NPTEL)", icon: "ml" },
      { name: "AWS Cloud Foundations", icon: "cloud" }
    ]
  },

  // Featured Projects
  projects: [
    {
      id: "handloom-app",
      title: "Handloom Web Application",
      role: "Team Lead",
      status: "In Development",
      shortDescription: "A web application for showcasing handloom products.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      category: "Web Application",
      liveUrl: "",
      githubUrl: "",
      accentColor: "#a78bfa"
    },
    {
      id: "global-loom",
      title: "Global Loom Collective",
      status: "In Development",
      shortDescription: "A handloom e-commerce concept.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      category: "E-Commerce Concept",
      liveUrl: "",
      githubUrl: "",
      accentColor: "#818cf8"
    }
  ]
};
