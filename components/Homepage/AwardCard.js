import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Awardimg from "../../public/assets/Homepage/Award/award.png";
const AwardList = [
  {
    id: 1,
    image: Awardimg,
    header: "Awarded 1st in 2013",
  },
  {
    id: 2,
    image: Awardimg,
    header: "Awarded 2nd in 2014",
  },
  {
    id: 3,
    image: Awardimg,
    header: "Awarded 1st in 2015",
  },
  {
    id: 4,
    image: Awardimg,
    header: "Awarded 1st in 2016",
  },
  {
    id: 5,
    image: Awardimg,
    header: "Awarded 1st in 2017",
  },
  {
    id: 6,
    image: Awardimg,
    header: "Awarded 2nd in 2018",
  },
  {
    id: 7,
    image: Awardimg,
    header: "Awarded 2nd in 2019",
  },
  {
    id: 8,
    image: Awardimg,
    header: "Awarded 2nd in 2020",
  },
  {
    id: 9,
    image: Awardimg,
    header: "Awarded 2nd in 2021",
  },
];

function AwardCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showArrows, setShowArrows] = useState(true);
  const [showPagination, setShowPagination] = useState(false);
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setShowArrows(false);
        setShowPagination(true);
        setPerPage(1);
      } else {
        setShowArrows(true);
        setShowPagination(false);
        setPerPage(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const splideOptions = {
    type: "loop",
    perPage: perPage,
    autoplay: true,
    pauseOnHover: false,
    speed: 2000,
    interval: 4000,
    arrows: showArrows,
    pagination: showPagination,
    start: currentSlide,
  };

  return (
    <>
      <div className="bg-white ">
        <div className="achievementsSectionimg ">
          <div className="px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 ">
            <div className="pb-10">
              <div className="flex flex-col text-center">
                <p
                  className="font-mulish font-bold text-text_41 xsm:text-3xl sm:text-3xl"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  Our Awards & Achievements
                </p>
                <p
                  className="font-mulish text-center font-medium pt-5 text-ksl_dark_red"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  As a Single Broker
                </p>
              </div>
              <div className="w-auto pt-10">
                <div className="relative">
                  <Splide
                    options={splideOptions}
                    className="px-10  custom-splide "
                  >
                    {AwardList.map((award, index) => (
                      <SplideSlide key={index}>
                        <div className="p-6 bg-ksl_dark_red rounded-3xl border flex flex-col mx-2 ">
                          <div
                            className=" w-auto h-auto bg-white rounded-full mx-auto p-2 "
                            data-aos="zoom-out"
                            data-aos-offset="250"
                            data-aos-duration="1000"
                            data-aos-easing="ease-out"
                          >
                            <Image
                              src={award.image}
                              alt={award.image}
                              width={50}
                              height={50}
                              className="mx-auto w-auto h-auto"
                            />
                          </div>
                          <h2
                            className="text-text_18 font-lato font-medium text-white text-center mt-2"
                            data-aos="zoom-in"
                            data-aos-offset="250"
                            data-aos-duration="1100"
                            data-aos-easing="ease-out"
                          >
                            {award.header}
                          </h2>
                        </div>
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AwardCard;
