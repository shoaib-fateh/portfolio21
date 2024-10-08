"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { SocialMedia } from "../reuseable";

const HeroSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center md:px-20 sm:px-5 mt-40 w-full relative z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto md:text-start text-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] md:ml-0 mx-auto"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">NEXT.JS Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 md:text-6xl text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Presenting
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Top-Quality{" "}
            </span>
            Project Experiences
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Hi there, I&apos;m{" "}
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-xl ">
            Shoaib Fateh
          </b>
          , a dedicated React Developer with a proven track record in building
          robust web applications and dynamic websites
        </motion.p>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="flex flex-row gap-5 text-gray-200 text-[22px] md:ml-0 mx-auto"
        >
          <SocialMedia key="2" />
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full md:flex justify-center items-center hidden"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
