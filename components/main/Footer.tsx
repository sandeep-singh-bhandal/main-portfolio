import React from "react";
import { FooterData } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FooterData.map((item, index) => (
            <div
              className="min-w-[200px] h-auto max-sm:mt-12 flex flex-col items-center justify-start"
              key={index}
            >
              <div className="font-bold text-lg">{item.title}</div>
              {item.socials.map((social, index) => (
                <p
                  className="flex flex-row items-center my-[15px] cursor-pointer gap-1 hover:text-[#7160d8] transition-all duration-300"
                  key={index}
                >
                  <Image
                    height={20}
                    width={20}
                    src={social.logo}
                    alt={social.name}
                  />
                  <Link
                    className="text-[15px] ml-[6px]"
                    href={social.link}
                    target="_blank"
                    
                  >
                    {social.name}
                  </Link>
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8 mb-4 text-[15px] text-center max-sm:mt-12">
          &copy; 2025 Made with ❤️ by Sandeep Singh Bhandal
        </div>
      </div>
    </div>
  );
};

export default Footer;
