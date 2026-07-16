"use client";

import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { CONTACT_LINKS } from "@/data/contact";
import { AnimatedContainer } from "@/components/shared/AnimatedContainer";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container relative">
        <AnimatedContainer className="mx-auto max-w-md text-center">
          <div className="flex items-center justify-center gap-4 text-primary">
            <Sparkle className="h-5 w-5" />
            <p className="font-serif text-3xl italic text-foreground sm:text-4xl">
              Let's work together
            </p>
            <Sparkle className="h-5 w-5" />
          </div>

          <div className="mt-10 flex flex-col items-center gap-5">
            {CONTACT_LINKS.map((link, index) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex items-center gap-3 text-base text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>
                    {link.label}:{" "}
                    <span className="underline decoration-primary/40 underline-offset-4 transition-colors group-hover:decoration-primary">
                      {link.value}
                    </span>
                  </span>
                </motion.a>
              );
            })}
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}