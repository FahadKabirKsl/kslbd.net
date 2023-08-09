import React, { useEffect, useState } from "react";
import Image from "next/image";
import Contact_us_hero from "../../../public/assets/Company/contact_us_hero.png";

import AOS from "aos";
import AboutUs from "@/components/Company/AboutUs";
function Index() {
  const [openTab, setOpenTab] = useState(1);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-ksl_light_red">
        <div className="relative">
          <div>
            <Image
              src={Contact_us_hero}
              alt={Contact_us_hero}
              className="w-full h-72 xsm:w-auto sm:w-auto"
            />
          </div>
          <div className="absolute inset-x-0 top-32">
            <p className=" text-text_41 font-lato font-bold text-center ">
              News
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
