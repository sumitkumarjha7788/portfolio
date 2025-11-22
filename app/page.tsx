import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ContactForm />

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10">
        <p>© {new Date().getFullYear()} Sumit Kumar Jha. All rights reserved.</p>
      </footer>
    </main>
  );
}
