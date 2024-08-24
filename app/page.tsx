import Head from "next/head";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import EncryptionSection from "@/components/sections/encryption";
import Footer from "@/components/sections/footer";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shoaib Fateh - Full-Stack Developer & Graphic Designer</title>
        <meta
          name="description"
          content="Shoaib Fateh is a versatile professional with expertise in full-stack development and graphic design. With over four years of experience, he excels in creating dynamic web applications and visually appealing designs."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/115332099?v=4"
        />
        <meta property="og:site_name" content="Shoaib Fateh's Portfolio" />
        <meta
          property="og:title"
          content="Shoaib Fateh - Full-Stack Developer & Graphic Designer"
        />
        <meta
          property="og:description"
          content="Versatile professional with a strong background in web development and graphic design. Expertise in React.js, Next.js, Flutter, and Adobe tools."
        />
        <meta property="og:url" content="https://shoaibfateh21.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shoaib Fateh - Full-Stack Developer & Graphic Designer"
        />
        <meta
          name="twitter:description"
          content="Shoaib Fateh, a versatile professional with over four years of experience in web development and graphic design, blending technical skills with artistic vision."
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/115332099?v=4"
        />
      </Head>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <HeroSection />
          <SkillsSection />
          <EncryptionSection />
          <Projects />
          <Footer />
        </div>
      </main>
    </>
  );
}
