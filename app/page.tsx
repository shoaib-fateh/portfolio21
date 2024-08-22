import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import EncryptionSection from "@/components/sections/encryption";
import Footer from "@/components/sections/footer";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <HeroSection />
        <SkillsSection />
        <EncryptionSection />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
