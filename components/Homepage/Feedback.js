import React, { useState } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { ImQuotesRight, ImStarFull, ImStarHalf } from "react-icons/im";
import Sabid from "../../public/assets/Homepage/Feedback/sabid.png";
import Ziaur from "../../public/assets/Homepage/Feedback/ziaur.png";
const FeedbackList = [
  {
    id: 1,
    image: Sabid,
    name: "Sabid Hasan Nabil",
    content:
      "I have never been this confident about the stock market. KSL unbelievably made my investment turn into a double in no time. If you are checking this out, probably you should think of it right now and do investment in the perfect stock marketplace.",
    rating: "4",
  },
  {
    id: 2,
    image: Ziaur,
    name: "Ziaur Rahman",
    content:
      "Literally, I have checked many stock brokerages and KSL is the best. In this modern age of technology, this fintech innovative solution makes investment result into a precious sum. I highly recommend and as well as inviting all newbie investors to get connected with KSL.",
    rating: "4.5",
  },
  {
    id: 3,
    image: Sabid,
    name: "Sabid Hasan Nabil",
    content:
      "I have never been this confident about the stock market. KSL unbelievably made my investment turn into a double in no time. If you are checking this out, probably you should think of it right now and do investment in the perfect stock marketplace.",
    rating: "4",
  },
  {
    id: 4,
    image: Ziaur,
    name: "Ziaur Rahman",
    content:
      "Literally, I have checked many stock brokerages and KSL is the best. In this modern age of technology, this fintech innovative solution makes investment result into a precious sum. I highly recommend and as well as inviting all newbie investors to get connected with KSL.",
    rating: "4.5",
  },
];

function Feedback() {
  const splideOptions = {
    type: "loop",
    perPage: 2,
    autoplay: true,
    pauseOnHover: false,
    speed: 2000,
    interval: 4000,
    arrows: false,
    pagination: true,
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      1024: {
        perPage: 3,
      },
    },
  };

  return (
    <>
      <div className="bg-white">
        <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10  px-80">
          <div className="py-10">
            <div className="flex flex-col text-center">
              <p
                className="font-mulish font-bold text-text_41 xsm:text-3xl sm:text-3xl"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-out"
              >
                Our Valuable Clients Saying
              </p>
              <p
                className="font-mulish text-center font-medium pt-5 text-ksl_dark_gray"
                data-aos="fade-in-up"
                data-aos-offset="210"
                data-aos-duration="1200"
                data-aos-easing="ease-out"
              >
                KSL is opening doors to make the money work for you! It's your
                high time to get along with the right path and be a successful
                trader. Let’s check out what our loving clients say.
              </p>
            </div>
            <div className="w-auto">
              <div>
                <Splide
                  options={splideOptions}
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  {FeedbackList.map((feed, index) => (
                    <SplideSlide key={index}>
                      <div className="py-10 h-full">
                        <div className="flex flex-col p-6 bg-white rounded-3xl service-card mx-5 h-full">
                          <div className="flex justify-between pb-5">
                            <div className="flex flex-row my-auto">
                              <div>
                                <Image
                                  src={feed.image}
                                  alt={feed.image}
                                  width={50}
                                  height={50}
                                  className="w-auto h-auto rounded-full"
                                  data-aos="fade-right"
                                  data-aos-offset="210"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-out"
                                />
                              </div>
                              <div className="flex flex-col pl-5">
                                <p
                                  className="text-text_18 font-lato font-medium text-ksl_drak_black mt-2"
                                  data-aos="fade-right"
                                  data-aos-offset="210"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-out"
                                >
                                  {feed.name}
                                </p>
                                <div
                                  className="flex justify-start"
                                  data-aos="fade-right"
                                  data-aos-offset="210"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-out"
                                >
                                  {Array.from(
                                    { length: Math.floor(feed.rating) },
                                    (_, index) => (
                                      <ImStarFull
                                        key={index}
                                        className="w-4 h-4 text-ksl_dark_yellow"
                                      />
                                    )
                                  )}
                                  {feed.rating % 1 !== 0 && (
                                    <ImStarHalf className="w-4 h-4 text-ksl_dark_yellow" />
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="my-auto">
                              <ImQuotesRight
                                className="text-gray-100 text-7xl xsm:text-3xl"
                                data-aos="fade-in-up"
                                data-aos-offset="210"
                                data-aos-duration="1100"
                                data-aos-easing="ease-out"
                              />
                            </div>
                          </div>

                          <div>
                            <p
                              className="font-lato  text-base text-ksl_light_gray text-justify"
                              data-aos="fade-in-up"
                              data-aos-offset="220"
                              data-aos-duration="1100"
                              data-aos-easing="ease-out"
                            >
                              "{feed.content}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
