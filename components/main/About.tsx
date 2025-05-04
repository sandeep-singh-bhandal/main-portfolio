"use client";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import {  slideInFromLeft } from "../../utils/motion";
import Journey from "./Journey";

const About = () => {
  return (
    <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-full mx-auto relative z-0">
      <motion.p
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.1)}
        className={styles.sectionSubText}
      >
        Introduction
      </motion.p>
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.3)}
        className={styles.sectionHeadText}
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
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to life!
      </motion.p>

      <Journey />
    </div>
  );
};

export default About;
