"use client";
import React from "react";
import { motion } from "framer-motion";
import {  slideInFromLeft } from "../utils/motion";
import Journey from "../components/Journey";
import Grid from "../components/Grid"

const About = () => {
  return (
    <div className="px-16 pt-16 max-sm:px-6  max-w-full relative z-0">
      <motion.p
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.1)}
        className="sm:text-[18px] text-[14px] text-[#9353d3] uppercase tracking-wider"
      >
        Introduction
      </motion.p>
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.3)}
        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
      >
        Overview.
      </motion.h2>

      <motion.p
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Next.js. I&apos;m a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to life!
      </motion.p>
      <Grid />
      <Journey />
    </div>
  );
};

export default About;
