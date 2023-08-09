import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import Contact_us_hero from "../../../public/assets/Company/contact_us_hero.png";

function Index() {
  
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-ksl_light_red">
      <div className="relative">
        <div className="">
          <Image
            src={Contact_us_hero}
            className="w-full h-60 xsm:w-auto sm:w-auto"
          />
        </div>
        <div className="absolute inset-x-0 top-32">
          <p
            className=" text-text_41 font-lato font-bold text-center"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-duration="800"
            data-aos-easing="ease-out"
          >
            Stocks
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
