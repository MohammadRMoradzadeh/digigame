"use client";
import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import Cartfavorite from "../cartFavorite/Cartfavorite";

function Favorites() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="mx-16 mt-12">
        <div className="relative">
          <Image
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-easing="ease-out-quart"
            data-aos-duration="500"
            className="z-50"
            src="/image/polygon.png"
            width={80}
            height={80}
          />
          <p
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-easing="ease-out-quart"
            data-aos-duration="500"
            className="absolute top-7 text-white text-Pinar-SemiBold mr-3 text-3xl"
          >
            محبوب ترین ها
          </p>
        </div>
        <div className="flex flex-row mt-7 gap-x-7">
          <Cartfavorite addres="/image/god.png" title="God Of War : Ragnarok" delay={200}/>
          <Cartfavorite addres="/image/Uncharted.png" title="Uncharted 4: A Thief’s End" delay={300}/>
          <Cartfavorite addres="/image/Elden-Ring.png" title="Elden Ring" delay={400}/>
          <Cartfavorite addres="/image/Mortal-Kombat.png" title="Mortal Kombat 11"  delay={500}/>
          <Cartfavorite addres="/image/Red-Dead.png" title="Red Dead Redemption 2" delay={600}/>
        </div>
      </div>
    </>
  );
}

export default Favorites;
