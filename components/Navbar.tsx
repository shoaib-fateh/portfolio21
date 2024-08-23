"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SocialMedia } from "./reuseable";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleBodyOverflow = () => {
      if (isMenuOpen && typeof window !== "undefined") {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto"; // Reset overflow when unmounting component
    };
  }, [isMenuOpen]);

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[9999999999] px-10">
      <div className="w-[100%] h-full flex flex-row items-center justify-between  m-auto px-[10px] gap-6">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin rounded-[50%]"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Star <br /> Dust
          </span>
        </a>

        <div className=" md:flex  hidden w-[50%] h-auto border border-[#7042f861] bg-[#0300145e]  md:px-[20px] md:py-[10px] md:rounded-full text-gray-200 ">
          <div className="flex md:flex-row md:items-center md:justify-between lg:justify-around w-full gap-5">
            <a className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-purple-500">
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-purple-500"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-purple-500"
            >
              Projects
            </a>
            <a className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-purple-500">
              Contact
            </a>
          </div>
        </div>

        <div className="hidden md:flex md:flex-row md:justify-between  md:gap-5 md:text-gray-200 md:text-[24px]">
          <SocialMedia key="1" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden mt-[-25px]">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-200 focus:outline-none absolute text-right "
          >
            {isMenuOpen ? (
              <FaTimes className="close w-9 h-9 p-1 " />
            ) : (
              <FaBars className="open w-9 h-9 p-1" />
            )}
          </button>
        </div>

        {/* Responsive Menu */}
        {isMenuOpen && (
          <div className="w-full absolute top-[65px] left-0 bg-[#030014] items-center justify-center border border-[#7042f861] rounded-b-lg py-2 px-4 h-screen p-[10%]">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center  shadow-2xl   h-[80%] w-[80%] border border-[gray-200] rounded-3xl p-[10%] gap-9 m-[10%]"
            >
              <li className="bg-gray-100  h-[50px] items-center w-[60%] text-center p-[15px] border border-[fuchsia-900] rounded-3xl">
                <Link
                  href="#about-me"
                  className="cursor-pointer"
                  onClick={handleClick}
                >
                  About me
                </Link>
              </li>
              <li className="bg-gray-100  h-[50px] items-center w-[60%] text-center p-[15px] border border-[fuchsia-900] rounded-3xl">
                <Link
                  href="#skills"
                  className="cursor-pointer mb-2"
                  onClick={handleClick}
                >
                  Skills
                </Link>
              </li>
              <li className="bg-gray-100  h-[50px] items-center w-[60%] text-center p-[15px] border border-[fuchsia-900] rounded-3xl">
                <Link
                  href="#projects"
                  className="cursor-pointer mb-2"
                  onClick={handleClick}
                >
                  Projects
                </Link>
              </li>
              <li className="bg-gray-100  h-[50px] items-center w-[60%] text-center p-[15px] border border-[fuchsia-900] rounded-3xl">
                <Link href="#contact" className="cursor-pointer">
                  Contact
                </Link>
              </li>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-row gap-5 text-gray-200 text-[24px]"
              >
                <SocialMedia />
              </motion.div>
            </motion.ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
