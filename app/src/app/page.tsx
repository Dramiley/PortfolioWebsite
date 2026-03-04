import dynamic from 'next/dynamic';
import { Hero } from "@/components/Hero";
import { getLatestGitHubActivity } from "@/lib/github";

const WhatIBuild = dynamic(() => import("@/components/WhatIBuild").then(mod => mod.WhatIBuild));
const About = dynamic(() => import("@/components/About").then(mod => mod.About));
const Experience = dynamic(() => import("@/components/Experience").then(mod => mod.Experience));
const Projects = dynamic(() => import("@/components/Projects").then(mod => mod.Projects));
const Skills = dynamic(() => import("@/components/Skills").then(mod => mod.Skills));
const Contact = dynamic(() => import("@/components/Contact").then(mod => mod.Contact));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default async function Home() {
  const github = await getLatestGitHubActivity();

  return (
    <div className="min-h-screen text-foreground font-sans">
      <main>
        <Hero lastPushAt={github.lastPushAt} />
        <WhatIBuild />
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
