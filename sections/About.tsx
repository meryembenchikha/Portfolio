"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";
import { ABOUT_DATA } from "@/data/about";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container relative">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8 pl-6 sm:pl-10 lg:pl-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 text-muted-foreground"
                >
                <span className="text-sm font-medium uppercase tracking-widest">
                    Get to know me
                </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl"
            >
              Who Am I
            </motion.h2>

            <div className="flex flex-col gap-4">
              {ABOUT_DATA.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="max-w-lg text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              {ABOUT_DATA.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-gradient sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-8"
            >
              {ABOUT_DATA.partners.map((partner) => (
                <div key={partner.name} className="relative h-12 w-32">
                    <Image src={partner.logo} alt={partner.name} fill sizes="128px" className="object-contain" />
                </div>
            ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md"
          >
            <div className="absolute -right-6 -top-6 z-0 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Asterisk className="h-7 w-7" />
            </div>

            <div className="glass relative z-10 h-full w-full overflow-hidden rounded-3xl">
              <Image src={ABOUT_DATA.image} alt="About me photo" fill sizes="(max-width: 768px) 400px, 480px" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}