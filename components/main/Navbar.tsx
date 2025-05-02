"use client";
import { NavbarData } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        className="px-4 max-sm:px-0 bg-[#110b36]/20"
        isBordered
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link className="font-bold text-inherit text-2xl" href="/">
              {NavbarData.title}
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-20" justify="center">
          {NavbarData.navItems.map((item, index) => (
            <NavbarItem key={index} >
              <Link color="foreground" href={item.link} className="text-lg">
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          {NavbarData.socials.map((item, index) => (
            <NavbarMenuItem key={index} className="hover:scale-110 transition-all duration-300">
              <Link color="foreground" href={item.link}>
                <Image
                  src={item.src}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="h-8 w-8"
                />
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarContent>
        <NavbarMenu className="flex gap-7 justify-center items-center">
          {NavbarData.navItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link className="text-3xl" color="foreground" href={item.link}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute h-full w-full left-0 z-[1] object-cover max-sm:h-3/4 max-sm:-top-52"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video> */}
    </>
  );
};

export default NavBar;
