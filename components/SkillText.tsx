"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
} from "@/utils/motion";
import { SkillSectionData } from "@/constants/data";
import { useInView } from "react-intersection-observer";

const SkillText = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      initial="hidden"
      animate={inView?"visible":"hidden"}
      ref={ref}
      className="w-full h-auto flex flex-col items-center justify-center gap-3"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="py-[8px] px-[7px] opacity-[0.9] text-4xl md:text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-500
         to-cyan-500"
      >
        {SkillSectionData.title}
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.9)}
        className="text-[22px] md:text-3xl text-white font-mediumtext-center mb-8 text-center"
      >
        {SkillSectionData.subtitle1}
      </motion.div>
    </motion.div>
  );
};

export default SkillText;
