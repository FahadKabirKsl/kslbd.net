import React, { useEffect } from "react";
import AOS from "aos";
function IpoIndex() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      
      <div className="bg-ksl_light_red ">
        <div className="pt-32 pb-2 xsm:pt-40 xsm:pb-20 sm:pt-40 sm:pb-20">
          <div className=" flex justify-center items-center">
            <p
              className=" text-text_41 font-lato font-bold text-center"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-duration="800"
              data-aos-easing="ease-out"
            >
              IPO
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IpoIndex;
