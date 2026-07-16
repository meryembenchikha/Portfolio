import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Dashboard",
    description:
      "A full-featured admin dashboard for managing products, orders, and customer analytics in real time.",
    image: "/images/projects/project-1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-1",
    featured: true,
  },
  {
    id: "project-2",
    title: "AI Image Classifier",
    description:
      "A deep learning model that classifies images into custom categories, trained with TensorFlow and deployed via a REST API.",
    image: "/images/projects/project-2.jpg",
    technologies: ["Python", "TensorFlow", "REST APIs"],
    githubUrl: "https://github.com/yourusername/project-2",
  },
  {
    id: "project-3",
    title: "Task Management App",
    description:
      "A collaborative task board with drag-and-drop, real-time updates, and team permissions.",
    image: "/images/projects/project-3.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-3",
  },
  {
    id: "project-4",
    title: "Portfolio Website",
    description:
      "This very portfolio — built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    image: "/images/projects/project-4.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
  },
];

export const ALL_TECHNOLOGIES = Array.from(
  new Set(PROJECTS.flatMap((project) => project.technologies))
).sort();