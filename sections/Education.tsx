"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/data/education";
import { AnimatedContainer } from "@/components/shared/AnimatedContainer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container relative">
        <AnimatedContainer className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Academic Background
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            The academic path that shaped my knowledge and passion for technology.
          </p>
        </AnimatedContainer>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 h-full w-px bg-border"
          />

          <div className="flex flex-col gap-10">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-6 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground"
                >
                  <GraduationCap className="h-4 w-4" />
                </div>

                <Card className="glass">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <CardTitle>{edu.degree}</CardTitle>
                          {edu.inProgress && (
                            <span className="relative flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-500">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                              </span>
                              In Progress
                            </span>
                          )}
                        </div>
                        <CardDescription className="mt-1">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      {edu.institutionLogo && (
                        <div className="relative h-10 w-10 shrink-0">
                            <Image
                            src={edu.institutionLogo}
                            alt={edu.institution}
                            fill
                            sizes="40px"
                            className="object-contain"
                            />
                        </div>
                        )}
                    </div>

                    <Badge variant="outline" className="mt-2 w-fit">
                      {edu.period}
                    </Badge>
                  </CardHeader>

                  {edu.description && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}