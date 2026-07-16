// "use client";

// import * as React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import { HERO_DATA } from "@/data/hero";
// import { Button } from "@/components/ui/button";
// import { GradientBlob } from "@/components/shared/GradientBlob";
// import { SocialLinks } from "@/components/shared/SocialLinks";

// export function Hero() {
//   function scrollToId(id: string) {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   }

//   return (
//     <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-24">
//       <GradientBlob className="left-1/4 top-10 z-0 h-72 w-72 bg-violet-500/20" />
//       <GradientBlob className="bottom-10 right-1/4 z-0 h-96 w-96 bg-blue-500/20" />

//       <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 flex select-none items-center justify-center">
//         <span className="whitespace-nowrap text-[18vw] font-extrabold uppercase leading-none tracking-tighter text-foreground/10 sm:text-[15vw] lg:text-[12vw]">
//           {HERO_DATA.backgroundText}
//         </span>
//       </div>

//       <div aria-hidden="true" className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 md:block lg:left-10">
//         <span className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
//           {HERO_DATA.backgroundText}
//         </span>
//       </div>

//       <div className="relative z-30 mx-auto flex w-full max-w-6xl items-center justify-center px-6">
//         <motion.p
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="absolute left-0 top-4 hidden max-w-[220px] text-center text-sm text-muted-foreground md:block md:-left-4 lg:-left-12"
//         >
//           {HERO_DATA.description}
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="absolute right-0 top-4 hidden max-w-[220px] flex-col items-center gap-3 text-center md:flex md:-right-4 lg:-right-12"
//         >
//           <div className="relative h-10 w-24">
//             <Image src={HERO_DATA.facultyLogo} alt="Faculty logo" fill sizes="96px" className="object-contain" />
//           </div>
//           <p className="text-sm text-muted-foreground">{HERO_DATA.degreeText}</p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="relative mx-auto aspect-[4.5/5] w-full max-w-[300px] sm:max-w-[330px]"
//         >
//           <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-blue-500 opacity-60 blur-2xl" />

//           <div className="glass relative h-full w-full overflow-hidden rounded-[2.5rem]">
//             <Image src={HERO_DATA.image} alt="Profile photo" fill priority sizes="(max-width: 640px) 300px, 360px" className="object-cover" />
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="glass absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-sm"
//           >
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
//             </span>
//             Available for work
//           </motion.div>
//         </motion.div>
//       </div>

//       <div className="relative z-30 mt-8 px-6 md:hidden">
//         <p className="text-center text-sm text-muted-foreground">{HERO_DATA.description}</p>
//         <div className="mt-4 flex flex-col items-center gap-2">
//           <div className="relative h-10 w-24">
//             <Image src={HERO_DATA.facultyLogo} alt="Faculty logo" fill sizes="96px" className="object-contain" />
//           </div>
//           <p className="text-center text-sm text-muted-foreground">{HERO_DATA.degreeText}</p>
//         </div>
//       </div>
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.55 }}
//         className="relative z-30 mt-8 text-center text-2xl font-bold tracking-tight text-gradient sm:text-3xl"
//     >
//     Mariem Ben Chikha
// </motion.h2>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         className="relative z-30 mt-10 flex flex-wrap justify-center gap-4"
//       >
//         <Button size="lg" onClick={() => scrollToId("projects")}>
//           {HERO_DATA.ctaPrimary.label}
//         </Button>
//         <Button size="lg" variant="secondary" onClick={() => scrollToId("contact")}>
//           {HERO_DATA.ctaSecondary.label}
//         </Button>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className="absolute bottom-8 right-6 z-30 hidden sm:block lg:right-10"
//       >
//         <SocialLinks />
//       </motion.div>

//       <motion.button
//         onClick={() => scrollToId("about")}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//         aria-label="Scroll to About section"
//         className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
//       >
//         <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
//           <ChevronDown className="h-6 w-6" />
//         </motion.div>
//       </motion.button>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { HERO_DATA } from "@/data/hero";
import { SITE_CONFIG } from "@/constants/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-background pt-16">
      <div className="absolute inset-x-0 bottom-0 top-16">
        <Image
          src={HERO_DATA.image}
          alt={SITE_CONFIG.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"
        />
      </div>

      <div className="relative z-30 mx-auto w-full max-w-6xl flex-1 px-6">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute left-0 top-8 hidden max-w-[220px] text-center text-sm text-white/80 md:block md:-left-4 lg:-left-12"
        >
          {HERO_DATA.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute right-0 top-8 hidden max-w-[220px] flex-col items-center gap-3 text-center md:flex md:-right-4 lg:-right-12"
        >
          <div className="relative h-10 w-24">
            <Image src={HERO_DATA.facultyLogo} alt="Faculty logo" fill sizes="96px" className="object-contain" />
          </div>
          <p className="text-sm text-white/80">{HERO_DATA.degreeText}</p>
        </motion.div>

        <div className="px-6 md:hidden">
          <p className="mt-8 text-center text-sm text-white/80">{HERO_DATA.description}</p>
          <div className="mt-4 flex flex-col items-center gap-2">
            <div className="relative h-10 w-24">
              <Image src={HERO_DATA.facultyLogo} alt="Faculty logo" fill sizes="96px" className="object-contain" />
            </div>
            <p className="text-center text-sm text-white/80">{HERO_DATA.degreeText}</p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-16 flex flex-col items-center gap-6 sm:bottom-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for work
            </div>
            <div className="border border-white/40 px-5 py-2.5">
              <p className="text-sm font-bold uppercase tracking-widest text-white">
                {HERO_DATA.secondaryText}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" onClick={() => scrollToId("projects")}>
              {HERO_DATA.ctaPrimary.label}
            </Button>
            <Button size="lg" variant="secondary" onClick={() => scrollToId("contact")}>
              {HERO_DATA.ctaSecondary.label}
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-6 right-6 z-30 flex items-center gap-2 lg:right-10"
      >
        <a href={SITE_CONFIG.socials.github} target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile" className="glass flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10">
          <Github className="h-4 w-4" />
        </a>
        <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile" className="glass flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10">
          <Linkedin className="h-4 w-4" />
        </a>
        <a href={`mailto:${SITE_CONFIG.author.email}`} aria-label="Send me an email" className="glass flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10">
          <Mail className="h-4 w-4" />
        </a>
        <a href={`tel:${SITE_CONFIG.author.phone}`} aria-label="Call me" className="glass flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10">
          <Phone className="h-4 w-4" />
        </a>
      </motion.div>

      <motion.button
        onClick={() => scrollToId("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full p-2 text-white/70 transition-colors hover:text-white"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}