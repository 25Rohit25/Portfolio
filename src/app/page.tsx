import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { CodingProfiles } from "@/components/sections/CodingProfiles";
import { Certificates } from "@/components/sections/Certificates";
import { Experience } from "@/components/sections/Experience";
import { CurrentlyLearning } from "@/components/sections/CurrentlyLearning";
import { BlogOverview } from "@/components/sections/BlogOverview";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Skills />
      <Projects />
      <CodingProfiles />
      <Certificates />
      <Experience />
      <CurrentlyLearning />
      <BlogOverview />
      <Contact />
    </div>
  );
}
