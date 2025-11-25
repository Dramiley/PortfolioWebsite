import dynamic from 'next/dynamic';
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

const About = dynamic(() => import("@/components/About").then(mod => mod.About));
const Experience = dynamic(() => import("@/components/Experience").then(mod => mod.Experience));
const Projects = dynamic(() => import("@/components/Projects").then(mod => mod.Projects));
const Skills = dynamic(() => import("@/components/Skills").then(mod => mod.Skills));
const Contact = dynamic(() => import("@/components/Contact").then(mod => mod.Contact));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
