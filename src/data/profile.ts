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
    github: "https://github.com/PLACEHOLDER",
    linkedin: "https://linkedin.com/in/PLACEHOLDER",
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
    school: "PLACEHOLDER University",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startYear: "20XX",
    endYear: "20XX",
    gpa: "",
    details: [
      "Relevant coursework: Data Structures, Algorithms, Databases, ...",
    ],
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
