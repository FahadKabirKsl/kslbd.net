import React from "react";
import Image from "next/image";
import Link from "next/link";
import FeatureAsset from "../../public/assets/Homepage/Feature/feature_asset.gif";

function Feature() {
  return (
    <>
      <div className="bg-ksl_light_red">
        <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10  px-80">
          <div className="flex xsm:flex-col sm:flex-col justify-between">
            <div className="my-auto w-1/2 xsm:w-full sm:w-full">
              <Image
                src={FeatureAsset}
                alt={FeatureAsset}
                quality={100}
                className="w-full h-auto mx-auto"
                data-aos="fade-up"
                data-aos-offset="250"
                data-aos-duration="1000"
                data-aos-easing="ease-out"
              />
            </div>
            <div className="mx-10"></div>
            <div className="flex flex-col my-auto w-1/2 xsm:w-full sm:w-full xsm:pt-14 sm:pt-14">
              <p
                className="text-ksl_dark_red font-mulish"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                FEATURE
              </p>
              <p
                className="text-ksl_dark_black  text-text_41 xsm:text-3xl sm:text-3xl font-[700] leading-tight py-5"
                data-aos="zoom-in-right"
                data-aos-offset="190"
                data-aos-duration="850"
                data-aos-easing="ease-out"
              >
                The Business is yours, we will take care of the Money.
              </p>
              <p
                className="text-base text-ksl_dark_gray font-mulish font-medium pb-5"
                data-aos="fade-in-up"
                data-aos-offset="210"
                data-aos-duration="950"
                data-aos-easing="ease-out"
              >
                A complete ecosystem of modern investment & a digital platform
                for profitable trading.
              </p>
              <Link
                href="/contact-us"
                data-aos="fade-right"
                data-aos-offset="250"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                <button className="btn ">Get in touch</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
