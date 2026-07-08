// Central place for all portfolio content.
// Replace the placeholder values below with real info.

export const profile = {
  name: "Asil Kamepalli",
  title: "Data Engineer",
  tagline:
    "Building reliable data pipelines and infrastructure that turn raw data into something useful.", // one-liner shown under the name
  bio: "PLACEHOLDER: Write 2-3 sentences about yourself — what you do, what you're interested in, and what you're looking for (internship, job, freelance, etc.).",
  location: "PLACEHOLDER: City, State",
  email: "kamepalliasil143@gmail.com",
  links: {
    github: "https://github.com/Asil143",
    linkedin: "https://www.linkedin.com/in/asil-kamepalli-095157197/",
    resume: "", // optional link to a PDF resume
  },
};

export type Education = {
  school: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  gpa?: string;
  details?: string[];
};

export const education: Education[] = [
  {
    school: "Trine University, Angola, Indiana",
    degree: "Master of Science in Information Studies",
    field: "Data Science, Databases, and Analytics",
    startYear: "2022",
    endYear: "2024",
    gpa: "GPA 4.0 / 4.0",
    details: [
      "Coursework: Advanced Database, Data Mining and Data Visualization, Data Science and Big Data, Statistics & Quantitative Methods, Cybersecurity, Network Management",
    ],
  },
  {
    school: "Parul University, Waghodia, Vadodara",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    startYear: "2018",
    endYear: "2022",
    gpa: "CGPA 7.11 / 10",
    details: ["First Class with Distinction"],
  },
  {
    school: "NRI Vidya Junior College, Guntur",
    degree: "Intermediate (MPC — Mathematics, Physics, Chemistry)",
    field: "Board of Intermediate Education, Andhra Pradesh",
    startYear: "2016",
    endYear: "2018",
    gpa: "Grade A (90.6%)",
    details: ["906 / 1000 marks across both years"],
  },
  {
    school: "Basara School, Chaitanyapuri, Guntur",
    degree: "Secondary School Certificate (SSC)",
    field: "Board of Secondary Education, Andhra Pradesh",
    startYear: "2015",
    endYear: "2016",
    gpa: "9.3 / 10",
    details: ["Grade A1 in Mathematics and General Science"],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["TypeScript", "Python", "Java"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "VS Code"] },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "PLACEHOLDER Project One",
    description:
      "Describe what this project does, the problem it solves, and your role in building it.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "",
    github: "",
  },
  {
    title: "PLACEHOLDER Project Two",
    description:
      "Describe what this project does, the problem it solves, and your role in building it.",
    tech: ["Python", "Flask"],
    link: "",
    github: "",
  },
];
