"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/constants/navlinks";
import { SITE_CONFIG } from "@/constants/site";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MobileMenu } from "@/components/navbar/MobileMenu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const isScrolled = useScrollPosition(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-30 transition-all duration-300",
          isScrolled
            ? "glass shadow-sm"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container flex h-16 items-center justify-between pl-6 sm:pl-10 lg:pl-16">
          <a href="#home" className="text-lg font-bold tracking-tight text-gradient">
            {SITE_CONFIG.name}
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {/* {NAV_LINKS.map((link) => (
              
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            ))} */}
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}