"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromBottom } from "@/utils/motion";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FiLinkedin, FiGithub } from "react-icons/fi";
const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      variants={slideInFromBottom(0.1)}
      className="w-full xl:w-3/4 h-full mx-auto rounded-tl-4xl rounded-tr-4xl text-gray-200 pb-6 px-14 pt-14 max-md:p-10 bg-[#0a0a23]/60 backdrop-blur-xs z-1 border-x-2 border-t-2 border-[#0a0a23] shadow-[0_0_30px_#151546]"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full h-full flex flex-row flex-wrap justify-around gap-7 max-md:flex-col">
          <div className="h-auto flex flex-col justify-start max-w-1/3 max-md:max-w-full">
            <span className="font-bold text-[27px] mb-1">Sandeep ,</span>
            <p className="text-gray-400">
              I&apos;m Sandeep Singh, a Frontend Developer crafting smooth
              interfaces and occasionally arguing with CSS. <br /><br />
              Thanks for stopping by!
            </p>
            <div className="flex flex-row my-[15px] w-full gap-3 ">
              <FiLinkedin className="h-6 w-6 cursor-pointer hover:text-[#7160d8] hover:scale-110 transition-all duration-300" />
              <FiGithub className="h-6 w-6 cursor-pointer hover:text-[#7160d8] hover:scale-110 transition-all duration-300" />
            </div>
          </div>

          <div className="h-full flex flex-wrap max-w-2/3 max-md:max-w-full justify-around gap-7 max-md:my-5 max-sm:gap-0 max-sm:my-0  max-sm:justify-between">
            <div className="h-auto max-sm:mt-8 flex flex-col justify-start max-w-1/3 max-sm:max-w-1/2">
              <span
                className="font-bold text-[20px] mb-1  text-transparent bg-clip-text bg-gradient-to-r from-purple-500
         to-cyan-500"
              >
                Quick Links
              </span>
              <div className="flex flex-col text-gray-400 gap-2">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/"> Contact</Link>
              </div>
            </div>
            <div className="h-auto max-sm:mt-8 flex flex-col justify-start max-w-1/3 max-sm:max-w-1/2">
              <div
                className="font-bold text-[20px] mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-500
         to-cyan-500"
              >
                Let&apos;s Connect!
              </div>
              <div className="flex flex-row items-center  cursor-pointer gap-1 hover:text-[#7160d8] transition-all duration-300">
                <div className="flex flex-col text-gray-400 gap-2">
                  <span className="flex items-center gap-2">
                    <FaPhoneAlt className="inline-block" />
                    Phone
                  </span>
                  <span className="flex items-center gap-2">
                    <IoIosMail className="inline-block" />
                    Email
                  </span>
                  <span className="flex items-center gap-2 overflow-hidden">
                    <FaLocationDot className="inline-block" />
                    Raipur, Chattisgarh, India
                  </span>
                </div>
              </div>
            </div>
            <div className="h-auto max-sm:mt-8 flex flex-col justify-start max-w-1/3 max-sm:max-w-1/2">
              <div
                className="font-bold text-[20px] mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-500
         to-cyan-500"
              >
                Follow Me
              </div>
              <div className="flex flex-row items-center  cursor-pointer gap-1 hover:text-[#7160d8] transition-all duration-300">
                <div className="flex flex-col text-gray-400 gap-2">
                  <span className="flex items-center gap-2">
                    <Image
                      src="/instagram.svg"
                      alt="linkedin"
                      height={18}
                      width={18}
                      className="inline-block"
                    />
                    _sunny_310
                  </span>
                  <span className="flex items-center gap-2">
                    <Image
                      src="/twitter.svg"
                      alt="linkedin"
                      height={18}
                      width={18}
                      className="inline-block"
                    />
                    _sunny_3_10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[15px] max-sm:mt-12">
          &copy; 2025 Sandeep Singh Bhandal | Portolio
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
