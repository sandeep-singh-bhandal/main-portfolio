"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../../constants/data";
import { slideInFromBottom } from "../../utils/motion";
import { ExperienceCard } from "../sub/ExperienceCard";
import { useInView } from "react-intersection-observer";

const Journey = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section className="my-24">
      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromBottom(0.3)}
      >
        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideInFromBottom(0.3)}
          className={`${styles.sectionSubText} text-center`}
        >
          About Me
        </motion.p>
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={slideInFromBottom(0.5)}
          className={`${styles.sectionHeadText} text-center`}
        >
          Work Experience.
        </motion.h2>
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
    </section>
  );
};

export default Journey;
