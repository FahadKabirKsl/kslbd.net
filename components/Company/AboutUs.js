import React from "react";
import Image from "next/image";
import { BsLightbulbFill } from "react-icons/bs";
import AboutPage1 from "../../public/assets/Company/about-page-img-bg.png";
import AboutPage2 from "../../public/assets/Company/about-page-img-bg-1.png";
import TradeTeam1 from "../../public/assets/Company/trading-team.png";
import TradeTeam2 from "../../public/assets/Company/trading-team-1.png";
import Team from "../../public/assets/Company/team.png";
import Mission from "../../public/assets/Company/mission-icon.png";
import Vision from "../../public/assets/Company/vision-icon.png";
import Subscribe from "../Homepage/Subscribe";
function AboutUs() {
  return (
    <>
      <div className="bg-ksl_light_red">
        <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80">
          <div className="text-center py-10">
            <p
              className="text-text_41 xsm:text-3xl sm:text-3xl font-lato font-bold pt-10 xsm:mt-28 sm:mt-28"
              data-aos="zoom-in"
              data-aos-offset="210"
              data-aos-duration="1200"
              data-aos-easing="ease-out"
            >
              About us
            </p>
          </div>
          <div className="bg-white rounded-3xl border-2 border-ksl_dark_red/5">
            <p
              className="font-mulish p-6 xsm:p-3 sm:p-3 text-center text-ksl_dark_gray"
              data-aos="fade-in-up"
              data-aos-offset="230"
              data-aos-duration="1600"
              data-aos-easing="ease-out"
            >
              Kabir Securities Limited (KSL) is a well-known brokerage firm in
              Bangladesh's capital market. We are proud to be the TREC holder of
              Dhaka Stock Exchange (251) & Chittagong Stock Exchange (56).
              Founded in 2005, KSL has maintained a solid reputation since then.
              Our fast growth has been attributed to our highly secure and
              clever transaction mechanism, as well as our efficient workflow
              and exceptional customer service.
            </p>
          </div>

          <div className="pt-16">
            <div className="flex flex-row xsm:flex-col sm:flex-col">
              <div className="relative w-6/12 xsm:w-full sm:w-full">
                <div className="absolute top-0 left-0 rounded-3xl p-4">
                  <Image
                    src={TradeTeam1}
                    className="w-full h-auto  rounded-3xl"
                    data-aos="fade-up"
                    data-aos-offset="230"
                    data-aos-duration="1200"
                    data-aos-easing="ease-out"
                  />
                </div>
                <Image
                  src={AboutPage1}
                  className=" w-full h-auto rounded-t-3xl"
                />
              </div>
              <div className="flex flex-col w-8/12 xsm:w-full sm:w-full my-auto pl-10 xsm:pl-0">
                <p
                  className="text-text_41 xsm:text-3xl sm:text-3xl xsm:pt-5 sm:pt-5 font-lato font-bold"
                  data-aos="fade-right"
                  data-aos-offset="240"
                  data-aos-duration="1200"
                  data-aos-easing="ease-out"
                >
                  The Company
                </p>
                <p
                  className="font-mulish text-justify text-ksl_dark_gray pt-5"
                  data-aos="fade-in-up"
                  data-aos-offset="240"
                  data-aos-duration="1300"
                  data-aos-easing="ease-out"
                >
                  When it comes to the capital market in Bangladesh, one of the
                  most well-known brokerage firms is Kabir Securities Limited
                  (KSL). The company is approved and regulated by the Bangladesh
                  Securities and Exchange Commission (BSEC) as a Full-Service
                  Depository Participant of Central Depository Bangladesh
                  Limited (CDBL). After being formed as a private limited
                  company on April 20, 2005, it commenced operations in July
                  2005. The company's major goal is to provide better stock
                  brokerage services to its consumers. KSL also holds a stock
                  dealer's license, which it employs to handle its investments.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-16">
            <div className="text-center">
              <p
                className="text-text_41 xsm:text-3xl sm:text-3xl font-lato font-bold"
                data-aos="zoom-in"
                data-aos-offset="220"
                data-aos-duration="1200"
                data-aos-easing="ease-out"
              >
                Organizational Goals and Objectives
              </p>
              <p
                className="font-mulish text-ksl_dark_gray py-10"
                data-aos="fade-in-up"
                data-aos-offset="230"
                data-aos-duration="1300"
                data-aos-easing="ease-out"
              >
                Official and operational are two of Kabir Securities Limited's
                objectives. The fundamental goal of Kabir Securities Limited is
                to build a relationship with clients based on mutual
                appreciation and satisfaction. Additionally, Kabir Securities
                Limited's primary goals are as follows.
              </p>
            </div>
            <div className="flex flex-row xsm:flex-col sm:flex-col">
              <div className="flex flex-col w-8/12 xsm:w-full sm:w-full my-auto xsm:pb-5">
                <div
                  className="flex flex-row py-1.5"
                  data-aos="zoom-in-left"
                  data-aos-offset="160"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <div className="my-auto">
                    <BsLightbulbFill className="text-ksl_dark_red " />
                  </div>
                  <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                    Market Share in Brokerage Industry service area
                  </p>
                </div>
                <div
                  className="flex flex-row py-1.5"
                  data-aos="zoom-in-left"
                  data-aos-offset="170"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <div className="my-auto">
                    <BsLightbulbFill className="text-ksl_dark_red " />
                  </div>

                  <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                    Research, Innovation
                  </p>
                </div>
                <div
                  className="flex flex-row py-1.5"
                  data-aos="zoom-in-left"
                  data-aos-offset="180"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <div className="my-auto">
                    <BsLightbulbFill className="text-ksl_dark_red " />
                  </div>

                  <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                    Human Resource Development
                  </p>
                </div>
                <div
                  className="flex flex-row py-1.5"
                  data-aos="zoom-in-left"
                  data-aos-offset="190"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <div className="my-auto">
                    <BsLightbulbFill className="text-ksl_dark_red " />
                  </div>

                  <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                    Financial Strength
                  </p>
                </div>
                <div
                  className="flex flex-row py-1.5"
                  data-aos="zoom-in-left"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <div className="my-auto">
                    <BsLightbulbFill className="text-ksl_dark_red " />
                  </div>

                  <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                    Management Performance Improvement
                  </p>
                </div>
                <div
                  className="flex flex-row py-1.5"
                  data-aos="zoom-in-left"
                  data-aos-offset="210"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <div className="my-auto">
                    <BsLightbulbFill className="text-ksl_dark_red " />
                  </div>

                  <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                    Corporate Social Responsibility
                  </p>
                </div>
                <div className="bg-ksl_light_red_200 flex flex-row xsm:flex-col sm:flex-col mt-10 p-5 rounded-3xl">
                  <div className="my-auto w-1/12 xsm:w-auto sm:w-auto">
                    <Image
                      src={Mission}
                      className="w-auto h-auto"
                      data-aos="fade-right"
                      data-aos-offset="230"
                      data-aos-duration="1200"
                      data-aos-easing="ease-out"
                    />
                  </div>
                  <div className="flex flex-col my-auto w-11/12 xsm:w-auto sm:w-auto px-5 xsm:px-0 sm:px-0 xsm:pt-2 sm:pt-2">
                    <p
                      className="text-xl font-semibold"
                      data-aos="fade-right"
                      data-aos-offset="230"
                      data-aos-duration="1200"
                      data-aos-easing="ease-out"
                    >
                      Our Vision
                    </p>
                    <p
                      className="text-base text-ksl_dark_gray"
                      data-aos="fade-in-up"
                      data-aos-offset="235"
                      data-aos-duration="1300"
                      data-aos-easing="ease-out"
                    >
                      We aspire to be Bangladesh's most investor-focused
                      brokerage firm, and we promise to help everyone become a
                      smart investor.
                    </p>
                  </div>
                </div>
                <div className="bg-ksl_light_red_200 flex flex-row xsm:flex-col sm:flex-col mt-5 p-5 rounded-3xl">
                  <div className="my-auto w-1/12 xsm:w-auto sm:w-auto">
                    <Image
                      src={Vision}
                      className="w-auto h-auto"
                      data-aos="fade-right"
                      data-aos-offset="230"
                      data-aos-duration="1200"
                      data-aos-easing="ease-out"
                    />
                  </div>
                  <div className="flex flex-col my-auto w-11/12 xsm:w-auto sm:w-auto px-5 xsm:px-0 sm:px-0 xsm:pt-2 sm:pt-2">
                    <p
                      className="text-xl font-semibold"
                      data-aos="fade-right"
                      data-aos-offset="230"
                      data-aos-duration="1200"
                      data-aos-easing="ease-out"
                    >
                      Our Mission
                    </p>
                    <p
                      className="text-base text-ksl_dark_gray"
                      data-aos="fade-in-up"
                      data-aos-offset="235"
                      data-aos-duration="1300"
                      data-aos-easing="ease-out"
                    >
                      We just care about one thing: helping our clients achieve
                      their financial goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-6/12 xsm:w-full sm:w-full">
                <div className="absolute top-0 left-0 p-4 rounded-3xl">
                  <Image
                    src={TradeTeam2}
                    className="w-full h-auto  rounded-3xl"
                    data-aos="fade-up"
                    data-aos-offset="230"
                    data-aos-duration="1200"
                    data-aos-easing="ease-out"
                  />
                </div>

                <Image
                  src={AboutPage2}
                  className=" w-full h-auto rounded-b-3xl"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="text-center pt-16">
              <p
                className="text-text_41 xsm:text-3xl sm:text-3xl font-lato font-bold pb-10"
                data-aos="zoom-in"
                data-aos-offset="230"
                data-aos-duration="1200"
                data-aos-easing="ease-out"
              >
                Our Expertise
              </p>
              <div className="flex justify-between xsm:flex-col sm:flex-col">
                <div className="flex flex-col">
                  <div
                    className="flex flex-row py-1.5"
                    data-aos="zoom-in-left"
                    data-aos-offset="160"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <div className="my-auto">
                      <BsLightbulbFill className="text-ksl_dark_red " />
                    </div>
                    <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                      16 Years in the National Market
                    </p>
                  </div>
                  <div
                    className="flex flex-row py-1.5"
                    data-aos="zoom-in-left"
                    data-aos-offset="170"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <div className="my-auto">
                      <BsLightbulbFill className="text-ksl_dark_red " />
                    </div>
                    <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                      41000+ Active Investors
                    </p>
                  </div>
                  <div
                    className="flex flex-row py-1.5"
                    data-aos="zoom-in-left"
                    data-aos-offset="180"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <div className="my-auto">
                      <BsLightbulbFill className="text-ksl_dark_red " />
                    </div>
                    <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                      Dynamic & Passionate Management Team
                    </p>
                  </div>
                  <div
                    className="flex flex-row py-1.5"
                    data-aos="zoom-in-left"
                    data-aos-offset="190"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <div className="my-auto">
                      <BsLightbulbFill className="text-ksl_dark_red " />
                    </div>
                    <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                      1 Corporate Office, 3 Branch Offices, 3 Digital Booth
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div
                    className="flex flex-row py-1.5"
                    data-aos="zoom-in-left"
                    data-aos-offset="160"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <div className="my-auto">
                      <BsLightbulbFill className="text-ksl_dark_red " />
                    </div>
                    <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                      1st & 2nd Position at CSE as a single stock broker from
                      2010 to 2022 onwards
                    </p>
                  </div>
                  <div
                    className="flex flex-row py-1.5"
                    data-aos="zoom-in-left"
                    data-aos-offset="170"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <div className="my-auto">
                      <BsLightbulbFill className="text-ksl_dark_red " />
                    </div>
                    <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                      BDT 10 Crore Paid up Capital
                    </p>
                  </div>
                  <div
                    className="flex flex-row py-1.5"
                    data-aos="zoom-in-left"
                    data-aos-offset="180"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <div className="my-auto">
                      <BsLightbulbFill className="text-ksl_dark_red " />
                    </div>
                    <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                      Well equipped Research and Innovation center
                    </p>
                  </div>
                  <div
                    className="flex flex-row py-1.5"
                    data-aos="zoom-in-left"
                    data-aos-offset="190"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <div className="my-auto">
                      <BsLightbulbFill className="text-ksl_dark_red " />
                    </div>
                    <p className="font-mulish text-base text-justify text-ksl_dark_gray my-auto pl-2">
                      World class Technology Team
                    </p>
                  </div>
                </div>
              </div>
              <div className="oa-bg pt-16">
                <div className="oa-bg-1">
                  <Image
                    src={Team}
                    className="w-auto"
                    data-aos="fade-in-up"
                    data-aos-offset="235"
                    data-aos-duration="1300"
                    data-aos-easing="ease-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <Subscribe />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
