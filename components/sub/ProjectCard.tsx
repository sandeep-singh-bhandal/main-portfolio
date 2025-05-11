"use client";

import {  slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  src: string;
  title: string;
  description: string;
  demoLink: string;
  animationDelay: number;
}

const ProjectCard = ({ src, title, description, demoLink,animationDelay }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      initial="hidden"
      animate={inView?"visible":"hidden"}
      ref={ref}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-96 max-lg:w-9/12 max-sm:w-full cursor-pointer group hover:scale-105 transition-transform duration-500"
      variants={slideInFromBottom(animationDelay)}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="object-cover w-full h-auto"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-cyan-700 text-white rounded-full 
          shadow-lg hover:scale-[102%] transition-transform text-lg font-medium"
        >
          Live Demo <ExternalLink size={20} />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
