"use client";
import React from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { CiShoppingBasket } from "react-icons/ci";
import MobileMenu from "../mobileMenu/MobileMenu";

import gsap from "gsap";

import Image from "next/image";

function MobileNavbar() {
  function show() {
    var tl = gsap.timeline();
    tl.to(".cover", { right: "0", duration: 1 }).to(
      ".mobile-menu",
      { right: "0", duration: 1 },
      "-=0.5"
    ).to(".titles",{opacity:"100", duration: 1 ,stagger:0.2,ease:"expo.inOut"})
  }

  return (
    <>
      <div className="container bg-BG-500 h-14 flex flex-row justify-between items-center md:hidden">
        <div className="flex items-center gap-x-4">
          <div>
            <IoMenu className="text-white text-4xl" onClick={show} />
          </div>
          <div>
            <LuSearch className="text-white text-3xl" />
          </div>
          <div>
            <CiShoppingBasket className="text-white text-3xl" />
          </div>
        </div>
        <div>
          <Image src="SVG\Logo.svg" width={64} height={24} />
        </div>
      </div>
      <MobileMenu />
    </>
  );
}

export default MobileNavbar;
