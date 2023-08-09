import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import arthashuchack from "../../public/assets/Homepage/Media/arthashuchack.png";
import azadi_logo from "../../public/assets/Homepage/Media/azadi_logo.png";
import dailtstar from "../../public/assets/Homepage/Media/shuprovat.png";
import dailysharebazar from "../../public/assets/Homepage/Media/dailysharebazar.png";
import flogocna from "../../public/assets/Homepage/Media/flogocna.png";
import purbokon from "../../public/assets/Homepage/Media/purbokon.png";
import sharenews from "../../public/assets/Homepage/Media/sharenews.png";
import shuprovat from "../../public/assets/Homepage/Media/shuprovat.png";
import sun from "../../public/assets/Homepage/Media/sun.png";
import the_business_standard from "../../public/assets/Homepage/Media/the_business_standard.png";
const NewsPaper = [
  {
    id: 1,
    image: arthashuchack,
  },
  {
    id: 2,
    image: azadi_logo,
  },
  {
    id: 3,
    image: dailtstar,
  },
  {
    id: 4,
    image: dailysharebazar,
  },
  {
    id: 5,
    image: flogocna,
  },
  {
    id: 6,
    image: purbokon,
  },
  {
    id: 7,
    image: sharenews,
  },
  {
    id: 8,
    image: shuprovat,
  },
  {
    id: 9,
    image: sun,
  },
  {
    id: 10,
    image: the_business_standard,
  },
];

function Media() {
  return (
    <>
      <div className="bg-ksl_light_red">
        <div className="px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 ">
          <div className="py-10">
            <div className="flex flex-col text-center">
              <p
                className="font-mulish font-bold text-text_41 xsm:text-3xl sm:text-3xl"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-out"
              >
                Our Media Partners
              </p>
            </div>
            <div className="pt-10">
              <div
                className="bg-ksl_light_red rounded-3xl marquee-box"
                data-aos="zoom-up"
                data-aos-offset="200"
                data-aos-duration="1100"
                data-aos-easing="ease-out"
              >
                <Marquee>
                  {NewsPaper.map((news, index) => (
                    <div key={index} className="news-partner-box p-5">
                      <Image
                        src={news.image}
                        alt={news.image}
                        className="w-auto my-auto news-partner-img"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Media;
