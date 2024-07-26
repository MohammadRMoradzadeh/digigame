"use client";
import React from "react";
import Image from "next/image";
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <div className="hidden md:flex flex-col mx-16">
        <div className="flex flex-row justify-between px-3 mt-6 pb-3 border-b border-b-white">
          <div>
            <input
              type="search"
              className="w-64 h-10 border border-white bg-transparent text-white rounded-xl px-2 outline-none text-Pinar-Regular"
              placeholder="جست و جو در دیجی گیم..."
            />
          </div>
          <div>
            <Image src="SVG\Logo.svg" width={110} height={24} />
          </div>
          <div>
            <button className="w-40 h-10 border border-white text-white text-Pinar-Medium rounded-xl hover:bg-white hover:text-BG-700 transition-colors">
              ورود | ثبت نام
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between px-3 mt-2">
          <div className="flex flex-row items-center">
            <CiShoppingBasket className="text-white text-3xl cursor-pointer" />
            <IoIosNotificationsOutline className="text-white text-3xl cursor-pointer" />
          </div>
          <div className="">
            <ul className="flex flex-row items-center justify-end text-white gap-x-4">
              <li>
                <Link
                  className={
                    pathname == "/"
                      ? "text-Pinar-Bold text-xl text-lightBg-500"
                      : "text-Pinar-Regular text-xl"
                  }
                  href="/"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link className={
                    pathname == "/store"
                      ? "text-Pinar-Bold text-xl text-lightBg-500"
                      : "text-Pinar-Regular text-xl"
                  } href="/store">
                  فروشگاه
                </Link>
              </li>
              <li>
                <Link className={
                    pathname == "/blog"
                      ? "text-Pinar-Bold text-xl text-lightBg-500"
                      : "text-Pinar-Regular text-xl"
                  } href="/blog">
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link className={
                    pathname == "/aboutUs"
                      ? "text-Pinar-Bold text-xl text-lightBg-500"
                      : "text-Pinar-Regular text-xl"
                  } href="/aboutUs">
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
