import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
}

export function GradientBlob({ className }: GradientBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute rounded-full blur-3xl animate-float", className)}
    />
  );
}