import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <Gallery />
      <HowItWorks />
      <Categories />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
