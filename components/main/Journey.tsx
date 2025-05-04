"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../../constants/data";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../../utils/motion";
import { ExperienceCard } from "../sub/ExperienceCard";

const Journey = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={`${styles.sectionSubText} text-center`}>About Me</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              title={experience.title}
              company_name={experience.company_name}
              iconBg={experience.iconBg}
              date={experience.date}
              points={experience.points}
            />
          ))}
        </VerticalTimeline>
      </div>

      
    </>
  );
};

export default SectionWrapper(Journey, "work");
