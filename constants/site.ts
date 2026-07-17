export const SITE_CONFIG = {
  name: "Mariem Ben Chikha",
  title: "Mariem — AI Student & Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, TypeScript, and modern web experiences. Explore my projects, skills, and experience.",
  url: "https://your-portfolio-domain.com",
  ogImage: "/opengraph-image.png",
  keywords: [
    "AI Student & Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Frontend Engineer",
    "Web Developer Portfolio",
  ],
  author: {
  name: "Mariem Ben Chikha",
  email: "meryembenchikha1@gmail.com",
  phone: "+216  99785583",
  
  },
  socials: {
    github: "https://github.com/meryembenchikha",
    linkedin: "https://www.linkedin.com/in/mariembenchikha",
    whatsapp: "https://wa.me/99785583",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;