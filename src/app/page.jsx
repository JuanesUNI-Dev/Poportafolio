'use client'
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import SoftSkills from "@/components/softskills";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Education from "@/components/study";
//import PortalContainer from "@/components/portalcontainer";
export default function HomePage() {
  return (
    <main>
      {/*<PortalContainer />*/}
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><SoftSkills /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="study"><Education/></section>
      <section id="contact"><Contact /> </section>
      
      
    </main>
  );
}
