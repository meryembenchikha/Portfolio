export const SITE_CONFIG = {
  name: "Mariem Ben Chikha",
  title: "Mariem — Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, TypeScript, and modern web experiences. Explore my projects, skills, and experience.",
  url: "https://your-portfolio-domain.com",
  ogImage: "/opengraph-image.png",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Frontend Engineer",
    "Web Developer Portfolio",
  ],
  author: {
  name: "Mariem Ben Chikha",
  email: "meryembenchikha1@gmail.com",
  phone: "+216 00 000 000",
  twitter: "@yourhandle",
  },
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername",
    youtube: "https://youtube.com/@yourusername",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;