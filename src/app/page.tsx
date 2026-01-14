import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <WhyUs />
      <Services />
      <Contact />
    </main>
  );
}
