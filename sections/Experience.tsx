"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { EXPERIENCES } from "@/data/experience";
import { AnimatedContainer } from "@/components/shared/AnimatedContainer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container relative">
        <AnimatedContainer className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            My Journey
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Hands-on experience gained through internships, research, and real-world projects.
          </p>
        </AnimatedContainer>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-12">
            {EXPERIENCES.map((experience, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={experience.id}
                  className="relative grid grid-cols-1 gap-6 pl-16 md:grid-cols-2 md:gap-x-12 md:pl-0"
                >
                  <div
                    aria-hidden="true"
                    className="absolute left-6 top-1 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2"
                  />

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "md:col-start-1",
                      !isEven && "md:col-start-2 md:row-start-1"
                    )}
                  >
                    <Card className="glass">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <CardTitle>{experience.role}</CardTitle>
                            <CardDescription className="mt-1 flex items-center gap-1.5">
                              {experience.company}
                            </CardDescription>
                          </div>
                          <div className="relative h-10 w-10 shrink-0">
                            <Image
                              src={experience.companyLogo}
                              alt={experience.company}
                              fill
                              sizes="40px"
                              className="object-contain"
                            />
                          </div>
                        </div>

                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {experience.startDate} — {experience.endDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {experience.location}
                          </span>
                        </div>
                      </CardHeader>

                      <CardContent className="flex flex-col gap-4">
                        <ul className="flex flex-col gap-2">
                          {experience.description.map((point, i) => (
                            <li
                              key={i}
                              className="flex gap-2 text-sm text-muted-foreground"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                              {point}
                            </li>
                          ))}
                        </ul>

                        {experience.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}