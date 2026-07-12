import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <LenisProvider>
      <Loader />
      <CustomCursor />
      <Navbar />
      <main className="relative flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </LenisProvider>
  );
}
