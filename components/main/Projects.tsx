"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { ProjectsData } from "@/constants/data";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Projects = () => {
  return (
    <>
      <div className="px-10 mt-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.3)}
          className="uppercase text-lg text-center"
        >
          A small collection of
        </motion.div>
        <motion.h1
          initial="hidden"
          animate="visible"
          className="text-6xl max-sm:text-[32px] font-semibold text-[#9253d3] max-md:pt-2 pt-3 text-center"
          variants={slideInFromLeft(0.7)}
        >
          My Recent Projects{" "}
        </motion.h1>
      </div>
      <div className="flex flex-wrap justify-start p-4">
        {ProjectsData.projects.map((item) => (
          <CardContainer className="inter-var" key={item.id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-[#9353d3]/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl px-4 py-1 border  ">
              {/* image */}
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={item.img}
                  height="1000"
                  width="1000"
                  className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              {/* heading */}
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
              >
                {item.title}
              </CardItem>
              {/* description */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.des}
              </CardItem>
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
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
};

export default Projects;
