import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaChartPie } from "react-icons/fa";
import { SiSlideshare } from "react-icons/si";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import finance from "../../public/assets/Partner/finance.png";
import people from "../../public/assets/Partner/people.png";
import internet from "../../public/assets/Partner/internet.png";
import self from "../../public/assets/Partner/self.png";
import Subscribe from "../Homepage/Subscribe";
function Partner() {
  const videoPath = "/website-promo.mp4";
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <>
      <div className="bg-white">
        <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80">
          <div className="flex flex-col py-20 xsm:py-10 sm:py-10">
            <p
              className="text-ksl_dark_black font-lato font-bold text-4xl xsm:text-2xl sm:txet-2xl pb-10"
              data-aos="fade-right"
              data-aos-offset="150"
              data-aos-duration="800"
              data-aos-easing="ease-out"
            >
              Ways to earn with us
            </p>
            <div className="flex justify-between xsm:flex-col sm:flex-col">
              <div
                className="flex flex-col w-full"
                data-aos="zoom-in-up"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                <FaChartPie className="text-3xl  text-ksl_dark_red " />
                <p className="text-ksl_dark_black font-lato font-bold text-2xl xsm:text-xl sm:text-xl pt-4 pb-2">
                  Brokerage sharing
                </p>
                <p className="text-ksl_dark_gray font-mulish ">
                  Get a share of the brokerage from each trade your referred
                  client makes.
                </p>
              </div>
              <div className="mx-10 xsm:mx-0 sm:mx-0 xsm:py-5 sm:py-5"></div>
              <div
                className="flex flex-col w-full"
                data-aos="zoom-in-up"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                <SiSlideshare className="text-3xl text-ksl_dark_red " />
                <p className="text-ksl_dark_black font-lato font-bold text-2xl pt-4 pb-2">
                  Referral incentive
                </p>
                <p className="text-ksl_dark_gray font-mulish ">
                  Earn incentives through referrals, the more you refer the more
                  you earn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ksl_dark_yellow_50">
        <div className="px-96 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 py-20 xsm:py-10 sm:py-10">
          <div className="flex justify-between flex-col xsm:flex-col sm:flex-col items-center xsm:items-start sm:items-start">
            <p
              className="text-ksl_dark_black font-lato font-bold text-4xl xsm:text-2xl sm:text-2xl mb-5 "
              data-aos="fade-right"
              data-aos-offset="150"
              data-aos-duration="800"
              data-aos-easing="ease-out"
            >
              Benefits You Get
            </p>
            <p
              className="text-ksl_dark_black font-lato font-bold text-2xl xsm:text-xl sm:text-xl mb-20 xsm:mb-10 sm:mb-10"
              data-aos="fade-in-up"
              data-aos-offset="150"
              data-aos-duration="800"
              data-aos-easing="ease-out"
            >
              Get a glimpse of all the benefits you can enjoy on signing up!
            </p>
            <div
              className="w-4/5 h-auto mb-20 xsm:w-auto sm:w-auto xsm:mb-10 sm:mb-10"
              data-aos="fade-in-up"
              data-aos-offset="150"
              data-aos-duration="800"
              data-aos-easing="ease-out"
            >
              <video
                className="w-full h-auto rounded-3xl"
                controls
                autoPlay
                // play={true}
                loop
                muted
              >
                <source src={videoPath} type="video/mp4" />
              </video>
            </div>
            <div className="flex justify-between xsm:flex-col sm:flex-col w-4/5 xsm:w-full sm:w-full mb-10">
              <div className="flex flex-col">
                <div
                  className="flex flex-row mb-2"
                  data-aos="fade-right"
                  data-aos-offset="150"
                  data-aos-duration="800"
                  data-aos-easing="ease-out"
                >
                  <BsFillClipboard2CheckFill className="my-auto xsm:mt-1 sm:mt-1 text-ksl_dark_red" />
                  <p className="text-ksl_dark_gray font-mulish pl-2 my-auto">
                    KSL Investors Hunting Model
                  </p>
                </div>
                <div
                  className="flex flex-row mb-2"
                  data-aos="fade-right"
                  data-aos-offset="160"
                  data-aos-duration="800"
                  data-aos-easing="ease-out"
                >
                  <BsFillClipboard2CheckFill className="my-auto xsm:mt-1 sm:mt-1 text-ksl_dark_red" />
                  <p className="text-ksl_dark_gray font-mulish pl-2 my-auto">
                    Personalized Branding
                  </p>
                </div>
                <div
                  className="flex flex-row mb-2"
                  data-aos="fade-right"
                  data-aos-offset="170"
                  data-aos-duration="800"
                  data-aos-easing="ease-out"
                >
                  <BsFillClipboard2CheckFill className="my-auto xsm:mt-1 sm:mt-1 text-ksl_dark_red" />
                  <p className="text-ksl_dark_gray font-mulish pl-2 my-auto">
                    Track & help to improve your business growth
                  </p>
                </div>
                <div
                  className="flex flex-row mb-2"
                  data-aos="fade-right"
                  data-aos-offset="180"
                  data-aos-duration="800"
                  data-aos-easing="ease-out"
                >
                  <BsFillClipboard2CheckFill className="my-auto xsm:mt-1 sm:mt-1 text-ksl_dark_red" />
                  <p className="text-ksl_dark_gray font-mulish pl-2 my-auto">
                    Branch Monitoring
                  </p>
                </div>
              </div>
              <div className="mx-10 xsm:hidden sm:hidden"></div>
              <div className="flex flex-col">
                <div
                  className="flex flex-row mb-2"
                  data-aos="fade-right"
                  data-aos-offset="150"
                  data-aos-duration="800"
                  data-aos-easing="ease-out"
                >
                  <BsFillClipboard2CheckFill className="my-auto xsm:mt-1 sm:mt-1 text-ksl_dark_red" />
                  <p className="text-ksl_dark_gray font-mulish pl-2 my-auto">
                    KSL Investors Hunting Model
                  </p>
                </div>
                <div
                  className="flex flex-row mb-2"
                  data-aos="fade-right"
                  data-aos-offset="160"
                  data-aos-duration="800"
                  data-aos-easing="ease-out"
                >
                  <BsFillClipboard2CheckFill className="my-auto xsm:mt-1 sm:mt-1 text-ksl_dark_red" />
                  <p className="text-ksl_dark_gray font-mulish pl-2 my-auto">
                    Personalized Branding
                  </p>
                </div>
                <div
                  className="flex flex-row mb-2"
                  data-aos="fade-right"
                  data-aos-offset="170"
                  data-aos-duration="800"
                  data-aos-easing="ease-out"
                >
                  <BsFillClipboard2CheckFill className="my-auto xsm:mt-1 sm:mt-1 text-ksl_dark_red" />
                  <p className="text-ksl_dark_gray font-mulish pl-2 my-auto">
                    Track & help to improve your business growth
                  </p>
                </div>
                <div
                  className="flex flex-row"
                  data-aos="fade-right"
                  data-aos-offset="180"
                  data-aos-duration="800"
                  data-aos-easing="ease-out"
                >
                  <BsFillClipboard2CheckFill className="my-auto xsm:mt-1 sm:mt-1 text-ksl_dark_red" />
                  <p className="text-ksl_dark_gray font-mulish pl-2 my-auto">
                    Branch Monitoring
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p
                className="text-ksl_light_gray font-mulish text-sm"
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                *These benefits are at the sole discretion of the management and
                can be discontinued or changed at any time
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ksl_light_red">
        <div className="px-96 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10">
          <div className="flex flex-col pt-20 pb-8 xsm:py-10 sm:py-10 w-4/5 mx-auto">
            <p
              className="text-ksl_dark_black font-lato font-bold text-4xl xsm:text-2xl sm:txet-2xl pb-10 text-center"
              data-aos="fade-right"
              data-aos-offset="150"
              data-aos-duration="800"
              data-aos-easing="ease-out"
            >
              People who partner with us
            </p>
            <div className="flex justify-between xsm:flex-col sm:flex-col mb-10">
              <div className="grid grid-cols-2 gap-8 xsm:grid-cols-1 sm:grid-cols-1">
                <div className="p-4 bg-ksl_green rounded-xl">
                  <div className="flex flex-col">
                    <div className="mb-5">
                      <Image
                        src={finance}
                        alt="finance"
                        className="w-20 h-auto rounded-xl"
                        data-aos="fade-left"
                        data-aos-offset="150"
                        data-aos-duration="800"
                        data-aos-easing="ease-out"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p
                        className="font-bold text-2xl mb-1 text-ksl_green_text"
                        data-aos="fade-in-up"
                        data-aos-offset="150"
                        data-aos-duration="800"
                        data-aos-easing="ease-out"
                      >
                        Finance Enthusiast
                      </p>
                      <p
                        className="text-ksl_green_text"
                        data-aos="fade-in-up"
                        data-aos-offset="150"
                        data-aos-duration="800"
                        data-aos-easing="ease-out"
                      >
                        Your interest lies in finance and the stock market. You
                        take great pleasure in guiding others with investment
                        options.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-ksl_red rounded-xl">
                  <div className="flex flex-col">
                    <div className="mb-5">
                      <Image
                        src={internet}
                        alt="internet"
                        className="w-20 h-auto rounded-xl"
                        data-aos="fade-left"
                        data-aos-offset="150"
                        data-aos-duration="800"
                        data-aos-easing="ease-out"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p
                        className="font-bold text-2xl mb-1 text-ksl_red_text"
                        data-aos="fade-in-up"
                        data-aos-offset="150"
                        data-aos-duration="800"
                        data-aos-easing="ease-out"
                      >
                        Internet Influencer
                      </p>
                      <p
                        className="text-ksl_red_text"
                        data-aos="fade-in-up"
                        data-aos-offset="150"
                        data-aos-duration="800"
                        data-aos-easing="ease-out"
                      >
                        Social media is your playground. You have a good number
                        of followers who easily consume all the content you
                        share.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-ksl_orange rounded-xl">
                  <div className="flex flex-col">
                    <div className="mb-5">
                      <Image
                        src={people}
                        alt="people"
                        className="w-20 h-auto rounded-xl"
                        data-aos="fade-left"
                        data-aos-offset="150"
                        data-aos-duration="800"
                        data-aos-easing="ease-out"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p
                        className="font-bold text-2xl mb-1 text-ksl_orange_text"
                        data-aos="fade-in-up"
                        data-aos-offset="150"
                        data-aos-duration="800"
                        data-aos-easing="ease-out"
                      >
                        People Person
                      </p>
                      <p
                        className="text-ksl_orange_text"
                        data-aos="fade-in-up"
                        data-aos-offset="150"
                        data-aos-duration="800"
                        data-aos-easing="ease-out"
                      >
                        People love you! And you love people! So, by default,
                        marketing comes to you, naturally. You can sell, and do
                        it rather well.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-ksl_blue rounded-xl">
                  <div className="flex flex-col">
                    <div className="mb-5">
                      <Image
                        src={self}
                        alt="self"
                        className="w-20 h-auto rounded-xl"
                        data-aos="fade-left"
                        data-aos-offset="150"
                        data-aos-duration="800"
                        data-aos-easing="ease-out"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p
                        className="font-bold text-2xl mb-1 text-ksl_blue_text"
                        data-aos="fade-in-up"
                        data-aos-offset="150"
                        data-aos-duration="800"
                        data-aos-easing="ease-out"
                      >
                        Self Starter
                      </p>
                      <p
                        className="text-ksl_blue_text"
                        data-aos="fade-in-up"
                        data-aos-offset="150"
                        data-aos-duration="800"
                        data-aos-easing="ease-out"
                      >
                        "I'm my own boss", that's your mantra. You just want to
                        earn and grow. The desire is powered by your dedication.
                        And that takes you places!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mb-10 text-ksl_dark_gray font-lato text-center">
              Sounds like you? We’d love to have you onboard!
            </p>
            <div className="mx-auto">
              <button
                className=" px-5 py-2 rounded-3xl text-lg bg-ksl_dark_red text-white texy-center font-bold"
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                Enroll as a Partner
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-ksl_light_red">
        <Subscribe />
      </div>
    </>
  );
}

export default Partner;
