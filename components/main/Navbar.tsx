"use client";
import { NavbarData } from "@/constants/data";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-auto flex justify-center fixed top-0 z-50 px-10 py-1 max-sm:px-0 shadow-2xl shadow-[#2A0E61]/50 bg-[#110b36]">
      <Image
        src="/bars.svg"
        alt="bars"
        height={20}
        width={20}
        className="hidden max-sm:inline-block max-sm:ml-4 mt-0.5"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className="w-full h-full flex flex-row items-center justify-between m-auto p-3">
        <Link
          className="font-bold md:block text-3xl text-white max-sm:ml-1 h-auto w-auto"
          href={"/"}
        >
          {NavbarData.title}
        </Link>

        <div
          className={clsx(
            "h-full w-[500px] flex max-sm:absolute max-sm:left-0 max-sm:top-16 max-sm:h-screen max-sm:w-full backdrop-blur-lg bg-[#03001417] transition-transform duration-300 ease-in-out",
            isOpen ? "max-sm:translate-x-0" : "max-sm:-translate-x-full"
          )}
        >
          <div className="flex gap-20 w-full h-full justify-center items-center text-gray-200 max-sm:flex-col max-sm:gap-8">
            {NavbarData.navItems.map((item, index) => (
              <Link
                className="cursor-pointer text-[21px] max-sm:text-4xl"
                href={item.link}
                key={index}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-5 max-sm:mr-2">
          {NavbarData.socials.map((social, index) => (
            <Image
              src={social.src}
              alt={social.name}
              key={index}
              width={30}
              height={30}
              className="cursor-pointer max-sm:scale-150 hover:scale-110 transition-all max-sm:h-6 min-md:h-8 duration-300"
              onClick={() => window.open(social.link, "_blank")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
