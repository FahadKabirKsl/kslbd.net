import React from "react";
import Image from "next/image";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { FaCalendarAlt } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import Blog1 from "../../public/assets/Homepage/Blog/blog-thumb-financial-literacy.png";
import Blog2 from "../../public/assets/Homepage/Blog/blog-thumb-newcomes.png";
const BlogList = [
  {
    id: 1,
    image: Blog1,
    header: "পুঁজিবাজার এ বিনিয়োগ শিক্ষার প্রয়োজনীয়তা ?",
    date: "20 April, 2022",
    content:
      "অর্থ ও বিনিয়ােগ সংক্রান্ত ধারণা অর্জনের মাধ্যমে সঠিক বিনিয়ােগ সিদ্ধান্ত গ্রহণের জন্য বিনিয়োেগ শিক্ষা অপরিহার্য। ",
  },
  {
    id: 2,
    image: Blog2,
    header: "কিভাবে নবাগত বিনিয়ােগকারী পুঁজিবাজারে বিনিয়ােগ করবেন?",
    date: "20 April, 2022",
    content:
      "আইপিওতে কোন কোম্পানির শেয়ার কিংবা মিউচুয়াল ফান্ডের ইউনিট ক্রয় করতে চাইলে ঐ শেয়ার বা মিউচুয়াল ফান্ডের ন্যূনতম লটের",
  },
  {
    id: 3,
    image: Blog1,
    header: "পুঁজিবাজার এ বিনিয়োগ শিক্ষার প্রয়োজনীয়তা ?",
    date: "20 April, 2022",
    content:
      "অর্থ ও বিনিয়ােগ সংক্রান্ত ধারণা অর্জনের মাধ্যমে সঠিক বিনিয়ােগ সিদ্ধান্ত গ্রহণের জন্য বিনিয়োেগ শিক্ষা অপরিহার্য।",
  },
  {
    id: 4,
    image: Blog2,
    header: "কিভাবে নবাগত বিনিয়ােগকারী পুঁজিবাজারে বিনিয়ােগ করবেন?",
    date: "20 April, 2022",
    content:
      "আইপিওতে কোন কোম্পানির শেয়ার কিংবা মিউচুয়াল ফান্ডের ইউনিট ক্রয় করতে চাইলে ঐ শেয়ার বা মিউচুয়াল ফান্ডের ন্যূনতম লটের",
  },
];

function OurBlog() {
  const handleShareClick = (blog) => {
    const blogLink = "https://example.com/blog/" + blog.id; // Replace with the actual URL of your blog
    navigator.clipboard.writeText(blogLink);
    alert("Link copied! You can now share the blog.");
  };
  const splideOptions = {
    type: "loop",
    perPage: 3,
    autoplay: true,
    pauseOnHover: false,
    speed: 2000,
    interval: 4000,
    arrows: false,
    pagination: false,
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
      <div className="bg-ksl_light_red ">
        <div>
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
                  Our Blog
                </p>
              </div>
              <div className="w-auto pt-10">
                <div>
                  <Splide
                    options={splideOptions}
                    className="px-10 xsm:px-0 sm:px-0  custom-splide "
                  >
                    {BlogList.map((blog, index) => (
                      <SplideSlide key={index}>
                        <div className="rounded-2xl bg-white mx-5">
                          <div className="flex flex-col">
                            <div className="relative">
                              <div>
                                <Image
                                  src={Blog1}
                                  alt={Blog1}
                                  className="w-auto rounded-2xl"
                                  data-aos="fade-up"
                                  data-aos-offset="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-out"
                                />
                              </div>
                              <div className="absolute top-5 left-5">
                                <p
                                  className="bg-ksl_dark_red text-white rounded-2xl p-2"
                                  data-aos="fade-right"
                                  data-aos-offset="200"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-out"
                                >
                                  Stocks
                                </p>
                              </div>
                            </div>
                            <div className="p-6 flex flex-col">
                              <div
                                className="text-xl font-lato font-bold text-ksl_dark_black"
                                data-aos="zoom-in-right"
                                data-aos-offset="200"
                                data-aos-duration="1100"
                                data-aos-easing="ease-out"
                              >
                                {blog.header.split(" ").slice(0, 10).join(" ")}
                              </div>
                              <div
                                className="flex justify-between py-4"
                                data-aos="fade-in"
                                data-aos-offset="210"
                                data-aos-duration="1150"
                                data-aos-easing="ease-out"
                              >
                                <div className="flex flex-row text-lg text-ksl_dark_gray font-mulish font-light">
                                  <FaCalendarAlt className="my-auto text-ksl_dark_red" />
                                  <p className="pl-2 pt-1 font-light">
                                    {blog.date}
                                  </p>
                                </div>
                                <div className="flex flex-row text-lg text-ksl_dark_gray font-mulish">
                                  <FiShare2
                                    className="my-auto text-ksl_dark_red cursor-pointer"
                                    onClick={() => handleShareClick(blog)}
                                  />
                                  <p className="pl-2 pt-1">Share Now</p>
                                </div>
                              </div>
                              <div
                                className="text-base text-ksl_dark_gray font-mulish font-light"
                                data-aos="fade-in"
                                data-aos-offset="220"
                                data-aos-duration="1200"
                                data-aos-easing="ease-out"
                              >
                                {blog.content.split(" ").slice(0, 10).join(" ")}
                                ...
                              </div>
                              <div>
                                <button
                                  className="cursor-pointer text-ksl_dark_red text-lg pt-2 font-mulish font-semibold"
                                  data-aos="fade-right"
                                  data-aos-offset="250"
                                  data-aos-duration="1200"
                                  data-aos-easing="ease-out"
                                >
                                  See full Story
                                </button>
                              </div>
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
      </div>
    </>
  );
}

export default OurBlog;

// export default OurBlog
