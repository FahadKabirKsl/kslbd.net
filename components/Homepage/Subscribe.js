import React, { useEffect } from "react";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import SubscribeAsset from "../../public/assets/Homepage/Subscribe/subscribe.png";
import AOS from "aos";
function Subscribe() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-ksl_light_red ">
        <div className=" xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80 xsm:min-w-fit sm:min-w-fit">
          <div className=" pt-5 pb-20">
            <div className="border bg-ksl_dark_red rounded-3xl xsm:p-3 sm:p-3">
              <div className="flex justify-between xsm:flex-col sm:flex-col">
                <div className="flex flex-col my-auto px-5 xsm:px-2 sm:px-2">
                  <p
                    className="font-lato font-bold text-text_41 text-white xsm:text-2xl sm:text-2xl"
                    data-aos="zoom-in-right"
                    data-aos-offset="200"
                    data-aos-duration="900"
                    data-aos-easing="ease-out"
                  >
                    Subscribe to our newsletter
                  </p>
                  <p
                    className="font-mulish text-white w-9/12 xsm:w-full sm:w-full tracking-tight text-justify pt-10 pb-5"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="900"
                    data-aos-easing="ease-out"
                  >
                    To get updated news, smart decision making, exclusive offers
                    & opportunities, subscribe to KSL’s newsletter.
                  </p>
                  <form
                    data-aos="fade-in-up"
                    data-aos-offset="220"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <div className="border bg-white rounded-lg flex justify-between w-10/12 xsm:w-full sm:w-full">
                      <input
                        type="text"
                        id="base-input"
                        className="bg-white text-ksl_dark_gray text-sm rounded-lg focus:outline-none block w-full p-3 xsm:p-2 sm:p-2 mx-2"
                        placeholder="Enter Your email address"
                      />
                      <button className="border bg-ksl_dark_red rounded-lg my-auto p-3 xsm:p-2 sm:p-2">
                        <FaTelegramPlane className="text-2xl my-auto text-white" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="xsm:mx-auto">
                  <Image
                    src={SubscribeAsset}
                    alt={SubscribeAsset}
                    className="w-auto h-auto rounded-3xl"
                    data-aos="zoom-in-left"
                    data-aos-offset="250"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
