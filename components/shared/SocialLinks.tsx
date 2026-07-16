import { Github, Linkedin, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
}

type SocialPlatform = keyof typeof SITE_CONFIG.socials;

const SOCIAL_ICON_MAP: Record<SocialPlatform, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
};

const SOCIAL_PLATFORMS = Object.keys(SOCIAL_ICON_MAP) as SocialPlatform[];

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {SOCIAL_PLATFORMS.map((platform) => {
        const Icon = SOCIAL_ICON_MAP[platform];
        const url = SITE_CONFIG.socials[platform];
        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit my ${platform} profile`}
            className="glass flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-white/10"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}