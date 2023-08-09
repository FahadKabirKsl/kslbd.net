import React from "react";
import Image from "next/image";
import Contact_us_hero from "../../../public/assets/Company/contact_us_hero.png";

function ServiceIndex() {
  return (
    <div className="bg-ksl_light_red">
      <div className="relative">
        <div className="">
          <Image src={Contact_us_hero} className="w-full h-60 xsm:w-auto sm:w-auto" />
        </div>
        <div className="absolute inset-x-0 top-32" >
          <p className=" text-text_41 font-lato font-bold text-center">
            Service
          </p>
        </div>
      </div>
      {/* <div className="pt-32 pb-10 xsm:pt-40 xsm:pb-20 sm:pt-40 sm:pb-20">
        <div className=" flex justify-center items-center">
          <p className="xsm:text-2xl sm:text-2xl text-text_41 font-lato font-bold">
            Service
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default ServiceIndex;
