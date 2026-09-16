import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Highlights from "@/components/Highlights";
import Principles from "@/components/Principles";
import BuildAreas from "@/components/BuildAreas";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <BuildAreas />
        <Experience />
        <Skills />
        <CaseStudies />
        <Highlights />
        <Principles />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
