// export interface HeroData {
//   backgroundText: string;
//   description: string;
//   image: string;
//   facultyLogo: string;
//   degreeText: string;
//   ctaPrimary: { label: string; href: string };
//   ctaSecondary: { label: string; href: string };
// }

// export const HERO_DATA: HeroData = {
//   backgroundText: "STUDENT ON AI",
//   description:
//     "I build fast, accessible, and beautifully crafted web experiences using modern tools like Next.js, TypeScript, and Tailwind CSS.",
//   image: "/images/profile.jpg",
//   facultyLogo: "/images/logo_issat.png",
//   degreeText: "Bachelor's in Computer Science, Master's in SPI (2nd year)",
//   ctaPrimary: { label: "View My Work", href: "#projects" },
//   ctaSecondary: { label: "Get In Touch", href: "#contact" },
// };






export interface HeroData {
  secondaryText: string;
  description: string;
  image: string;
  facultyLogo: string;
  degreeText: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export const HERO_DATA: HeroData = {
  secondaryText: "Student on AI",
  description:
    "I build fast, accessible, and beautifully crafted web experiences using modern tools like Next.js, TypeScript, and Tailwind CSS.",
  image: "/images/profile.jpg",
  facultyLogo: "/images/logo_issat.png",
  degreeText: "Bachelor's in Computer Science, Master's in SPI (2nd year)",
  ctaPrimary: { label: "View My Work", href: "#projects" },
  ctaSecondary: { label: "Get In Touch", href: "#contact" },
};






