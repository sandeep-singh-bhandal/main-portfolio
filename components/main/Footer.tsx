"use client";
import React from "react";
import { FooterData } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromBottom } from "@/utils/motion";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      variants={slideInFromBottom(0.1)}
      className="w-8/12 h-full mx-auto rounded-tl-4xl rounded-tr-4xl text-gray-200 pb-6 px-18 pt-14 bg-[#0a0a23]/70 backdrop-blur-xs z-1 border-x-2 border-t-2 border-[#0a0a23] shadow-[0_0_30px_#151546]"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row justify-around flex-wrap">
          <div className="h-auto max-sm:mt-12 flex flex-col justify-start max-w-1/3">
            <span className="font-bold text-[20px]">Sandeep Singh</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              veniam illo soluta omnis numquam in eaque optio delectus,
              similique ut officiis nam culpa?
            </p>
            <div className="flex flex-row my-[15px] w-full gap-4 cursor-pointer hover:text-[#7160d8] transition-all duration-300">
              <Image height={20} width={20} src="/github.svg" alt="src" />
              <Image height={20} width={20} src="/github.svg" alt="src" />
              <Image height={20} width={20} src="/github.svg" alt="src" />
            </div>
          </div>
          <div className="h-auto max-sm:mt-12 flex flex-col items-center justify-start max-w-1/3">
            <span className="font-bold text-[20px]">Quick Links</span>
            <div className="flex flex-col">
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Projects</Link>
              <Link href="/"> Contact</Link>
            </div>
          </div>
          <div className="h-auto max-sm:mt-12 flex flex-col items-center justify-start max-w-1/3">
            <div className="font-bold text-[20px]">Let&apos;s Connect!</div>
            <div className="flex flex-row items-center  cursor-pointer gap-1 hover:text-[#7160d8] transition-all duration-300">
              <div className="flex flex-col">
                <span>phone</span>
                <span>email</span>
                <span>address</span>
              </div>
            </div>
          </div>
          <div className="h-auto max-sm:mt-12 flex flex-col items-center justify-start max-w-1/3">
            <div className="font-bold text-[20px]">Let&apos;s Connect!</div>
            <div className="flex flex-row items-center  cursor-pointer gap-1 hover:text-[#7160d8] transition-all duration-300">
              <div className="flex flex-col">
                <span>phone</span>
                <span>email</span>
                <span>address</span>
              </div>
            </div>
          </div>
        </div>
        

        <div className="text-[15px] max-sm:mt-12">
          &copy; 2025 Sandeep Singh Bhandal | Portolio
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
