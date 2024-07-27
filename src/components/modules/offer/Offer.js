"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Offer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div  className=" mx-16 mt-12">
        <div data-aos="fade-up" data-aos-delay="50" className="flex flex-row gap-x-2">
          <p  className="text-Pinar-SemiBold text-white text-2xl">پیشنهاد</p>
          <p className="text-Pinar-SemiBold text-primary-400 text-2xl">ویژه</p>
        </div>
        <div  className="flex flex-row mt-5 ">
          <div data-aos="fade-up"  data-aos-delay="100">
            <Image src="/image/s4.jpg" width={636} height={450} />
          </div>
          <div className="flex flex-col gap-y-5 mr-7 my-auto">
            <p data-aos="zoom-in" data-aos-delay="150" className="text-3xl text-Pinar-Bold text-white">
              Marvels Spider Man 2
            </p>
            <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-row gap-x-2">
              <Image src="/image/star.png" width={34} height={34} />
              <Image src="/image/star.png" width={34} height={34} />
              <Image src="/image/star.png" width={34} height={34} />
              <Image src="/image/star.png" width={34} height={34} />
              <Image src="/image/star.png" width={34} height={34} />
            </div>
            <p data-aos="zoom-in" data-aos-delay="250" className="text-Pinar-Regular text-base w-96 text-white">
              این سری بازی که این بازی نسخه دوم آن است بسیار محبوب بوده در بین
              بازی های ترند و به وقایع بسیار جذابی می پردازد این بار شاهد لحظات
              بسیار زیبا پیتر پارکر خواهیم بود
            </p>
            <div data-aos="zoom-in" data-aos-delay="300" className="flex flex-row gap-x-3">
              <p className="text-Pinar-Bold line-through text-primary-400 mt-1">
                3.000.000
              </p>
              <p className="text-white text-Pinar-Bold text-2xl">
                1.500.000 تومان
              </p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="350" className="flex flex-row gap-x-5">
              <button className="w-44 h-11 text-white text-Pinar-Medium rounded-xl bg-primary-700 ">
                مشاهده تریلر بازی
              </button>
              <button data-aos="zoom-in" data-aos-delay="400" className="w-44 h-11 text-white text-Pinar-Medium rounded-xl bg-[#AF0707] ">
                اضافه شدن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
