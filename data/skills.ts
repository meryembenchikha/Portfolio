import type { LucideIcon } from "lucide-react";
import { Code2, Server, Wrench, BrainCircuit } from "lucide-react";

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    skills: ["Next.js", "React JS", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS","Material UI","Responsive Design","Flexbox","CSS Grid","Media Queries" ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: ["PHP", "Laravel", "REST APIs", "MYSQL", "PostgreSQL", "XAMPP" ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Docker","Postman", "Vercel", "Figma","Canva"],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    icon: BrainCircuit,
    skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
  },
];