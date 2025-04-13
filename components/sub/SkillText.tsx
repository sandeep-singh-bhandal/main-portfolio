"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <motion.div
        variants={slideInFromTop}
        className="py-[8px] px-[7px] opacity-[0.9] text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500
         to-cyan-500"
      >
        My Skills
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]  max-md:text-[25px]"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-8 text-center"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
