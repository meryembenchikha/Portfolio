import type { Experience } from "@/types/experience";

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Frontend Developer Intern",
    company: "Company One",
    companyLogo: "/images/companies/company-1.png",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    location: "Remote",
    description: [
      "Built and maintained reusable React components used across multiple product pages.",
      "Collaborated with designers to implement pixel-perfect, responsive UI from Figma files.",
      "Improved page load performance by optimizing images and lazy-loading components.",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    role: "AI Research Assistant",
    company: "University Lab",
    companyLogo: "/images/companies/company-2.png",
    startDate: "Sep 2024",
    endDate: "Present",
    location: "Sousse, Tunisia",
    description: [
      "Assisted in training and evaluating machine learning models for image classification.",
      "Preprocessed and cleaned large datasets used in academic research papers.",
      "Presented findings during weekly lab meetings and contributed to a published paper.",
    ],
    technologies: ["Python", "TensorFlow", "Pandas"],
  },
];