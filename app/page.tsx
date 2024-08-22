import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import EncryptionSection from "@/components/sections/encryption";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>******</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
        <HeroSection />
        <SkillsSection />
        <EncryptionSection />
        <Footer />
      </div>
    </main>
  );
}
