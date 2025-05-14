import {
    SkillSectionData,
  } from "@/constants/data";
  import React from "react";
  import SkillDataProvider from "../sub/SkillDataProvider";
  import SkillText from "../sub/SkillText";

  
  const Skills = () => {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center h-full relative max-md:px-6"
      >
        <SkillText />
  
        <div className="flex flex-row justify-center flex-wrap gap-10 items-center px-8 mb-10 ">
          {SkillSectionData.Skill_data.map((item, index) => (
            <SkillDataProvider
              key={index}
              src={item.Image}
              width={item.width}
              height={item.height}
              index={index}
            />
          ))}
        </div>
  
        
  
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-full"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;