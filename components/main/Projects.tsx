"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { ProjectsData } from "@/constants/data";
import { PinContainer } from "../ui/3d-pin";

const Projects = () => {
  return (
    <div className="p-20 max-md:p-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.3)}
        className="uppercase text-lg"
      >
        A small collection of
      </motion.div>
      <motion.h1
        initial="hidden"
        animate="visible"
        className="text-6xl max-sm:text-4xl font-semibold text-[#9253d3] 
      max-md:pt-2 py-6"
        variants={slideInFromLeft(0.7)}
      >
        My Recent Projects{" "}
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {ProjectsData.projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[24vh] lg:h-[30vh] mb-10">
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

// "use client";
// import React from "react";
// import ProjectCard from "../sub/ProjectCard";
// import { ProjectsData } from "@/constants/data";

// const Projects = () => {
//   return (
//     <section id="projects" className="mt-16 max-sm:mt-32">

//       <div className=" flex flex-wrap justify-center gap-10 px-10">
//         {ProjectsData.projects.map((project, index) => (
//           <ProjectCard
//             key={index}
//             src={project.src}
//             title={project.title}
//             description={project.description}
//             demoLink={project.link}
//             animationDelay={0}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

export default Projects;
