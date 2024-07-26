"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const Baner = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(".baner",{opacity:0},{opacity:1,duration: 0.5, ease:  "power1.in"}).fromTo(
      ".Banerdescription",
      { x: 500, duration: 1 },
      { x: 0, stagger: 0.2, duration: 2, ease: "expo.out" }
    ).fromTo(
      ".gamebutton",
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "expo.out" },
      "-=1"
    ).fromTo(".gamesection",{y:-150,opacity: 0 },{y:0,opacity: 1, duration: 2, ease: "expo.out",stagger:0.2},"-=3.5");


   
  }, []);
  return (
    <>
      <div className="w-full h-[36.688rem] bg-hero-pattern bg-cover mt-2.5 flex flex-row justify-between px-7 py-9 baner">
        <div className="flex flex-col justify-end">
          <div className="flex flex-col max-w-[25rem] gap-y-4">
            <p id="title" className="text-white text-3xl  Banerdescription">
              Marvels Spider Man 2
            </p>
            <p className="text-white text-base text-Pinar-Medium Banerdescription">
              این سری بازی که این بازی نسخه دوم آن است بسیار محبوب بوده در بین
              بازی های ترند و به وقایع بسیار جذابی می پردازد این بار شاهد لحظات
              بسیار زیبا پیتر پارکر خواهیم بود
            </p>
            <div className="flex flex-row Banerdescription">
              <p className="text-Pinar-Medium text-white ">ژانر:</p>
              <p className="text-Pinar-Medium text-primary-400">
                اکشن ، ماجراجویی ، ابرقهرمانی
              </p>
            </div>
            <p className="text-white text-base text-Pinar-Medium Banerdescription">
              1.500.000 تومان
            </p>
          </div>
          <div className="flex flex-row gap-x-5 mt-6">
            <button className="w-44 h-11 text-white text-Pinar-Medium rounded-xl bg-primary-700 gamebutton">
              مشاهده تریلر بازی
            </button>
            <button className="w-44 h-11 text-white text-Pinar-Medium rounded-xl bg-[#AF0707] gamebutton">
              اضافه شدن به سبد خرید
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex justify-center">
            <p className="text-white text-Pinar-Bold  border-b-4 pb-3 border-white gamesection">
              بخش هایی از بازی
            </p>
          </div>
          <div className="flex flex-col gap-y-3 mt-5">
            <Image className="gamesection" src="/image/s1.jpg" width={210} height={114} />
            <Image className="gamesection" src="/image/s2.jpg" width={210} height={114} />
            <Image className="gamesection" src="/image/s3.jpg" width={210} height={114} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Baner;
