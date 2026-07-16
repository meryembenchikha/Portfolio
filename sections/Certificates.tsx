"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { CERTIFICATES } from "@/data/certificates";
import { AnimatedContainer } from "@/components/shared/AnimatedContainer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function Certificates() {
  return (
    <section id="certificates" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container relative">
        <AnimatedContainer className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Continuous Learning
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Courses and certifications that reflect my commitment to growing as a developer.
          </p>
        </AnimatedContainer>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="glass group cursor-pointer overflow-hidden">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={certificate.image}
                        alt={certificate.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all duration-300 group-hover:bg-background/40 group-hover:opacity-100">
                        <span className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                          View Certificate
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Award className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold leading-snug">
                          {certificate.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {certificate.issuer} · {certificate.date}
                        </p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{certificate.title}</DialogTitle>
                    <DialogDescription>
                      {certificate.issuer} · {certificate.date}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-contain"
                    />
                  </div>

                  {certificate.credentialUrl && (
                    <Button asChild className="w-fit">
                      <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Verify Credential
                      </a>
                    </Button>
                  )}
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}