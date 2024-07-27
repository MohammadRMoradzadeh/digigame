"use client";
import Image from "next/image";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Cartfavorite({ addres, title , delay }) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-delay={delay}
        data-aos-easing="ease-out-quart"
        data-aos-duration="500"
      >
        <div>
          <Image src={addres} width={240} height={300} />
        </div>
        <div className="flex justify-center mt-3">
          <p className="text-white text-xl">{title}</p>
        </div>
      </div>
    </>
  );
}

export default Cartfavorite;
