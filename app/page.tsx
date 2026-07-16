import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Certificates } from "@/sections/Certificates";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />

      {/* <Footer /> */}
    </main>
  );
}