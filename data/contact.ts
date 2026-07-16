import type { LucideIcon } from "lucide-react";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: SITE_CONFIG.author.email,
    href: `mailto:${SITE_CONFIG.author.email}`,
    icon: Mail,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Connect with me",
    href: SITE_CONFIG.socials.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "View my code",
    href: SITE_CONFIG.socials.github,
    icon: Github,
    external: true,
  },
  {
    id: "cv",
    label: "Resume",
    value: "Download CV",
    href: "/files/cv.pdf",
    icon: Download,
  },
];