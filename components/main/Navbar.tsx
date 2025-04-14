"use client";
import { Socials } from "@/constants/data";
import Image from "next/image";
import React, { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-auto flex justify-center fixed top-0 z-50 px-10 max-sm:px-0 shadow-lg shadow-[#2A0E61]/50 bg-[#110b36] ">
      <Image src='/bars.svg' alt="bars" height={20} width={20} className="hidden max-sm:inline-block max-sm:ml-2 mt-0.5" onClick={()=>setIsOpen(true)}/>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto p-3">
          <span className="font-bold md:block text-2xl text-gray-300 h-auto w-auto">
            Portfolio
          </span>

        <div className={`h-full w-[500px] flex max-sm:absolute max-sm:left-0 max-sm:top-0 max-sm:h-screen max-sm:w-3/4 backdrop-blur-lg bg-[#03001417] max-sm:${isOpen?"":"hidden"} `}>
          <div className="flex gap-20 w-full h-full justify-center items-center text-gray-200 max-sm:flex-col max-sm:gap-8">
            <a href="#about-me" className="cursor-pointer text-lg max-sm:text-4xl">
              About me
            </a>
            <a href="#skills" className="cursor-pointer text-lg max-sm:text-4xl">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer text-lg max-sm:text-4xl">
              Projects
            </a>
          </div>
          <Image src='/cross.svg' alt="cross" height={20} width={20} onClick={()=>setIsOpen(false)} className="m-6 right-0 absolute hidden max-sm:block"/>
        </div>

        <div className="flex flex-row gap-5 max-sm:gap-0.5">
          {Socials.map((social, index) => (
            <Image
              src={social.src}
              alt={social.name}
              key={index}
              width={30}
              height={30}
              className="cursor-pointer hover:scale-110 transition-all max-sm:h-6 min-md:h-8 duration-300"
              onClick={() => window.open(social.link, "_blank")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
