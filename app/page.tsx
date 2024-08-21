import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import EncryptionSection from "@/components/sections/encryption";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-20">
        <HeroSection />
        <SkillsSection />
        <EncryptionSection />
      </div>
    </main>
  );
}
