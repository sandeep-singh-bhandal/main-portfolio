import Footer from "@/components/Footer";
import Hero from "@/pages/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 max-md:gap-10 ">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
