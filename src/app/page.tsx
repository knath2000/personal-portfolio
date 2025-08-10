import Background3DClient from "@/components/Background3DClient";
import LowSpecToggle from "@/components/LowSpecToggle";
import HeroCard from "@/components/HeroCard";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import { About, Contact } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";
import { submitContact } from "@/actions/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientBackdrop />
      <Navbar />
      <Background3DClient />
      <main className="relative z-10 min-h-screen p-6">
        <section id="home" className="mx-auto flex min-h-[60vh] items-center justify-center">
          <HeroCard />
        </section>
        <Projects />
        <About />
        <Contact />
        <section className="relative z-10 mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Get in Touch</h2>
          <p className="mt-2 opacity-80">Have a project or idea? Send a message.</p>
          <div className="mt-4">
            <ContactForm action={submitContact} />
          </div>
        </section>
      </main>
      <LowSpecToggle />
    </div>
  );
}

function GradientBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-20 bg-[radial-gradient(60%_60%_at_0%_0%,#7c3aed22,transparent),radial-gradient(40%_40%_at_100%_100%,#06b6d422,transparent)]"
    />
  );
}
