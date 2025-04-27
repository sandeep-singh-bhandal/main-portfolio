import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 max-md:gap-10 ">
        <Navbar />
        <Hero />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
