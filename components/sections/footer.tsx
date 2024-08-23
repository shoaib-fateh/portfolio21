import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "@/components/MagicButton";
import { SocialMedia } from "../reuseable";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 z-[99999] relative text-white"
      id="contact"
    >
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
          style={{
            backgroundImage: "radial-gradient(#150276 -25%, transparent 65%)",
          }}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="md:text-5xl text-4xl font-bold text-white text-center lg:max-w-[45vw]">
          Ready to take{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            your
          </span>{" "}
          digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:shoaibfateh21@yahoo.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Shoaib Fateh
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
