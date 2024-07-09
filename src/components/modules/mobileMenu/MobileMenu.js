"use client";

import React from "react";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";
import Link from "next/link";

function MobileMenu() {
  const close = () => {
    var tl = gsap.timeline();
    tl.to(".titles", {
      opacity: "0",
      duration: 1,
      stagger: 0.2,
      ease: "expo.inOut",
    })
      .to(".mobile-menu", { right: "-100%", duration: 1 })
      .to(".cover", { right: "-100%", duration: 1 }, "-=0.5");
  };
  return (
    <>
      <div className="fixed  z-50 mobile-menu">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row justify-end m-3">
            <IoClose
              id="icon"
              className="text-white text-3xl"
              onClick={close}
            />
          </div>
          <div>
            <ul className="child:text-white flex flex-col justify-center items-center">
              <li className="text-xl my-4 mx-2 text-Pinar-Medium titles">
                <Link href="/">صفحه اصلی</Link>
              </li>
              <li className="text-xl my-4 mx-2 text-Pinar-Medium titles">
                <Link href="/">فروشگاه</Link>
              </li>
              <li className="text-xl my-4 mx-2 text-Pinar-Medium titles">
                <Link href="/">وبلاگ</Link>
              </li>
              <li className="text-xl my-4 mx-2 text-Pinar-Medium titles">
                <Link href="/">درباره ما</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed z-40 cover"></div>
    </>
  );
}

export default MobileMenu;
