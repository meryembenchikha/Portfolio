export interface AboutStat {
  value: string;
  label: string;
}

export interface PartnerLogo {
  name: string;
  logo: string;
}

export interface AboutData {
  paragraphs: string[];
  stats: AboutStat[];
  partners: PartnerLogo[];
  image: string;
}

export const ABOUT_DATA: AboutData = {
  paragraphs: [
    "I'm a Computer Science student passionate about building clean, accessible, and performant web experiences. I love turning complex problems into simple, elegant interfaces.",
    "I've collaborated with universities and organizations on academic and personal projects, bringing the same level of curiosity and attention to detail to every collaboration.",
  ],
  stats: [
    { value: "8+", label: "Projects Completed" },
    { value: "4yrs+", label: "Years of Study" },
    { value: "12+", label: "Certificates Earned" },
  ],
  partners: [
    { name: "University 1", logo: "/images/partners/logo-1.png" },
    { name: "University 2", logo: "/images/partners/logo-2.png" },
    { name: "Company 1", logo: "/images/partners/logo-3.png" },
    // { name: "Company 2", logo: "/images/partners/logo-4.png" },
  ],
  image: "/images/about.jpg",
};