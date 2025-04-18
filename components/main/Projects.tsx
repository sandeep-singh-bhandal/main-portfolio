"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { ProjectsData } from "@/constants/data";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const Projects = () => {
  return (
    <section id="projects" className="mt-16 max-sm:mt-32">
      <motion.h1
        initial="hidden"
        animate="visible"
        className="text-6xl max-sm:text-5xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 
      max-md:pt-0 max-md:pb-16 py-20"
        variants={slideInFromLeft(0.7)}
      >
        {ProjectsData.title}
      </motion.h1>
      <div className=" flex flex-wrap justify-center gap-10 px-10">
        {ProjectsData.projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            demoLink={project.link}
            animationDelay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
