"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromBottom } from "@/utils/motion";
import { FooterData } from "@/constants/data";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { RiBracesFill } from "react-icons/ri";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

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
        <div className="w-full h-full flex flex-row justify-around gap-7 max-[873px]:flex-col">
          <div className="h-auto flex flex-col justify-start max-w-1/3 max-[873px]:max-w-full">
            <span className="font-bold text-[27px] mb-1">
              {React.createElement(FooterData.icon)}
            </span>
            <p className="text-gray-400">
              {FooterData.about} <br />
              <br />
              {FooterData.ending}
            </p>
            <div className="flex flex-row my-[15px] w-full gap-3 ">
              {FooterData.social.map((item, index) => {
                const Icons = item.icon;
                return (
                  <a href={item.link} target="_blank" key={index}>
                    <Icons className="h-6 w-6 cursor-pointer hover:text-[#7160d8] hover:scale-110 transition-all duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="h-full flex flex-wrap max-w-2/3 max-[873px]:max-w-full justify-around gap-7 max-md:my-5 max-sm:gap-0 max-sm:my-0  max-sm:justify-between">
            {FooterData.links.map((items, index) => {
              return (
                <div
                  className="h-auto max-sm:mt-8 flex flex-col justify-start max-w-1/3 max-sm:max-w-1/2"
                  key={index}
                >
                  <span
                    className="font-bold text-[20px] mb-1  text-transparent bg-clip-text bg-gradient-to-r from-purple-500
              to-cyan-500"
                  >
                    {items.heading}
                  </span>
                  <div className="flex flex-col text-gray-400 gap-2">
                    {items.links.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <span className="flex items-center gap-2" key={index}>
                          {item.icon && <Icon />}
                          <Link
                            href={item.href}
                            target={`${
                              item.href.slice(0,1) === "/" ? "" : "_blank"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-[15px] mt-2 max-sm:mt-12">
          &copy; 2025 Sandeep Singh Bhandal | Portolio. All rights reserved.
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
