import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import Link from "next/link";
import Bo from "../../public/assets/Homepage/Hero/gif/Bo.gif";
import Ipo from "../../public/assets/Homepage/Hero/gif/Ipo.gif";
import Market from "../../public/assets/Homepage/Hero/gif/Market.gif";
import Stocks from "../../public/assets/Homepage/Hero/gif/Stocks.gif";
import News from "../../public/assets/Homepage/Hero/gif/News.gif";
import Service from "../../public/assets/Homepage/Hero/gif/Service.gif";

const Services = [
  {
    id: 1,
    imageGif: Bo,
    header: "BO Account",
    link: "/bo-account", // Update with the appropriate URL for BO Account page
  },
  {
    id: 2,
    imageGif: Ipo,
    header: "IPO",
    link: "/ipo", // Update with the appropriate URL for IPO page
  },
  {
    id: 3,
    imageGif: Market,
    header: "Market",
    link: "/market", // Update with the appropriate URL for Market page
  },
  {
    id: 4,
    imageGif: Stocks,
    header: "Stocks",
    link: "/stocks", // Update with the appropriate URL for Stocks page
  },
  {
    id: 5,
    imageGif: Service,
    header: "News",
    link: "/news", // Update with the appropriate URL for News page
  },
  {
    id: 6,
    imageGif: News,
    header: "Service",
    link: "/service", // Update with the appropriate URL for Service page
  },
];

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-ksl_light_red mainimg">
        <div className="px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 pt-40 pb-20 xsm:pt-28 sm:pt-28 xsm:pb-10 sm:pb-10 ">
          <div>
            <div className="flex xsm:flex-col sm:flex-col justify-between">
              <div className="flex flex-col my-auto xsm:w-full sm:w-full w-1/2">
                <p
                  className="text-ksl_dark_red font-mulish"
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-duration="800"
                  data-aos-easing="ease-out"
                >
                  FOR THE JOY OF PEOPLE
                </p>
                <p
                  className="text-ksl_dark_black  text-text_56 xsm:text-3xl sm:text-3xl font-[700] leading-tight pt-5 pb-10"
                  data-aos="zoom-in-right"
                  data-aos-offset="200"
                  data-aos-duration="800"
                  data-aos-easing="ease-out"
                >
                  A smart way to begin
                  <br />
                  <span className="text-ksl_dark_red">investing</span> and make
                  it profitable.
                </p>
                <p
                  className="text-base text-ksl_dark_gray font-mulish font-medium pb-8"
                  data-aos="fade-in-up"
                  data-aos-offset="210"
                  data-aos-duration="850"
                  data-aos-easing="ease-out"
                >
                  KSL makes investing and trade simpler, easier, and convenient.
                  We are here to help you get the most out of your money. Be a
                  <strong> smart</strong> investor with KSL
                </p>
                <Link
                  href="/"
                  data-aos="fade-right"
                  data-aos-offset="250"
                  data-aos-duration="800"
                  data-aos-easing="ease-out"
                >
                  <button className="btn ">Invest Now</button>
                </Link>
              </div>
              <div className="flex justify-center xsm:w-full sm:w-full  xsm:py-5 w-1/2">
                <div className=" w-8/12 xsm:w-full sm:w-full p-6 xsm:p-0 sm:p-0 rounded-xl ">
                  <div className="grid grid-cols-2 gap-8 w-auto xsm:gap-3  xsm:w-full sm:w-full ">
                    {Services.map((service, index) => (
                      <div key={service.id}>
                        <Link
                          href={service.link}
                          passHref
                          className="hover:text-ksl_dark_red  duration-700 "
                        >
                          <div
                            className="flex flex-col bg-white rounded-3xl p-6 h-40 w-40 my-auto service-card"
                            data-aos="zoom-in-up"
                            data-aos-offset="300"
                            data-aos-duration={
                              (index === 0 && "700") ||
                              (index === 1 && "800") ||
                              (index === 2 && "900") ||
                              (index === 3 && "1000") ||
                              (index === 4 && "1100") ||
                              (index === 5 && "1200")
                            }
                            data-aos-easing="ease-in-out"
                          >
                            <Image
                              src={service.imageGif}
                              alt={service.imageGif}
                              // width={200}
                              quality={100}
                              className="w-auto h-16 mx-auto my-auto"
                            />

                            <p className="text-center text-base font-mulish font-bold my-auto ">
                              {service.header}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
