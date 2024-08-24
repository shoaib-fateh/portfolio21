import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoaib Fateh - Portfolio",
  description:
    "Shoaib Fateh is a versatile professional with expertise in full-stack development and graphic design, showcasing dynamic web applications and compelling designs.",
  openGraph: {
    title: "Shoaib Fateh - Portfolio",
    description:
      "Versatile professional with expertise in React.js, Next.js, Flutter, and graphic design. Explore Shoaib's portfolio and projects.",
    url: "https://shoaibfateh21.vercel.app/",
    siteName: "Shoaib Fateh's Portfolio",
    images: [
      {
        url: "https://raw.githubusercontent.com/shoaib-fateh/portfolio21/main/preview.png",
        width: 1200,
        height: 630,
        alt: "Shoaib Fateh's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoaib Fateh - Portfolio",
    description:
      "Explore the portfolio of Shoaib Fateh, a professional in web development and graphic design.",
    images: [
      {
        url: "https://raw.githubusercontent.com/shoaib-fateh/portfolio21/main/preview.png",
        width: 1200,
        height: 630,
        alt: "Shoaib Fateh's Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#000113] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-300px] left-0 z-[-1] w-full h-full object-cover"
        >
          <source src="./video-backgrounds/blackhole.webm" type="video/webm" />
        </video>
        <SpeedInsights />
      </body>
    </html>
  );
}
