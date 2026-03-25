import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}