import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my Portfolio",
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
        {/* <StarsCanvas /> */}
        <Navbar />
        {children}
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px] left-0 z-[-1] w-full h-full object-cover"
        >
          <source src="./video-backgrounds/blackhole.webm" type="video/webm" />
        </video>
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
