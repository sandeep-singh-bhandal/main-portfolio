import HeroContent from "@/components/HeroContent";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
        <section className="relative flex flex-col h-full w-full mt-10">
          <HeroContent />
          <Skills />
        </section>
    </main>
  );
}
