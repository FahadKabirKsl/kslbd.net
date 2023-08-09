import React from "react";
import Image from "next/image";
import { RiHeartAddFill } from "react-icons/ri";
import NinjaAsset from "../../public/assets/Homepage/Ninja/ninja_asset.png";
import NinjaApp from "../../public/assets/Homepage/Ninja/ninja.png";

function Ninja() {
  return (
    <>
      <div className="bg-ksl_light_red">
        <div className=" xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10  px-80 py-10">
          <div className="app-section-bg ">
            <div className="w-full ninjaassetimg">
              <div className="flex xsm:flex-col justify-between xsm:rounded-3xl sm:rounded-3xl p-5 ">
                <div className="flex flex-col my-auto font-lato text-white w-full  pl-5 xsm:pl-0">
                  <p
                    className="text-text_41 font-lato xsm:text-2xl sm:text-2xl text-left font-bold pb-4"
                    data-aos="zoom-in-right"
                    data-aos-offset="200"
                    data-aos-duration="800"
                    data-aos-easing="ease-out"
                  >
                    Ninja - your AI Assistant
                  </p>
                  <p
                    className="text-text_18 font-lato xsm:text-base sm:text-base font-medium pb-4 leading-none"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="800"
                    data-aos-easing="ease-out"
                  >
                    First ever Artificially Intelligent Chatbot in Bangladesh
                    Capital Market introduced by Kabir Securities Limited.
                  </p>
                  <p
                    className="font-mulish text-base xsm:text-sm sm:text-sm font-normal pb-4"
                    data-aos="fade-in-up"
                    data-aos-offset="210"
                    data-aos-duration="900"
                    data-aos-easing="ease-out"
                  >
                    Ninja is here to help you invest and trade smartly. It
                    understands both English and Banglish.
                  </p>
                  <div className="font-mulish text-base xsm:text-sm sm:text-sm font-normal flex flex-col">
                    <p
                      className="flex flex-row pb-1"
                      data-aos="fade-right"
                      data-aos-offset="210"
                      data-aos-duration="900"
                      data-aos-easing="ease-out"
                    >
                      <RiHeartAddFill className="my-auto text-xl " />
                      <span className="ml-2">I want to open a bo account</span>
                    </p>
                    <p
                      className="flex flex-row pb-1"
                      data-aos="fade-right"
                      data-aos-offset="220"
                      data-aos-duration="900"
                      data-aos-easing="ease-out"
                    >
                      <RiHeartAddFill className="my-auto text-xl " />
                      <span className="ml-2">
                        Bo account transfer kore ksl e ante chacci
                      </span>
                    </p>
                    <p
                      className="flex flex-row pb-1"
                      data-aos="fade-right"
                      data-aos-offset="230"
                      data-aos-duration="900"
                      data-aos-easing="ease-out"
                    >
                      <RiHeartAddFill className="my-auto text-xl " />
                      <span className="ml-2">What is the current IPO</span>
                    </p>
                    <p
                      className="flex flex-row "
                      data-aos="fade-right"
                      data-aos-offset="240"
                      data-aos-duration="900"
                      data-aos-easing="ease-out"
                    >
                      <RiHeartAddFill className="my-auto text-xl " />
                      <span className="ml-2">Shamne ki ki IPO ashbe</span>
                    </p>
                  </div>
                </div>
                <div className="w-full  flex justify-center">
                  <Image
                    src={NinjaApp}
                    alt={NinjaApp}
                    className="w-auto  h-auto app-img"
                    data-aos="fade-up"
                    data-aos-offset="300"
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

export default Ninja;
