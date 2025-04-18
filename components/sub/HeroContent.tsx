"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { HeroSectionData } from "@/constants/data";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 max-md:px-8 mt-32 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div variants={slideInFromTop(0.5)} className="px-1">
          <h1 className="Welcome-text text-3xl h-[40px]">
            {HeroSectionData.greeting}
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="flex flex-col gap-6 text-6xl md:text-5xl max-md:text-4xl font-bold text-white max-w-[600px] w-auto h-auto "
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              The Best{" "}
            </span>
            project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(1.1)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          {HeroSectionData.description}
        </motion.p>
        <motion.button
          variants={slideInFromLeft(1.4)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-full lg:w-fit max-sm:w-fit px-14 
          hover:scale-[102%] md:mx-auto lg:mx-0"
        >
          {HeroSectionData.buttonTitle}
        </motion.button>
      </div>
      <motion.div
        variants={slideInFromRight(1.7)}
        className="w-full h-full flex justify-center items-center max-md:hidden"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Work Icons"
          height={650}
          width={650}
          className="md:scale-150 lg:scale-100"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
