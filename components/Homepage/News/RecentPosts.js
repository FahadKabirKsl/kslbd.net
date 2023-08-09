import React from "react";
import Link from "next/link";
import Image from "next/image";
import IPOAsset from "../../../public/assets/Homepage/Ipo/ipoasset.png";
import { FaCalendarDay } from "react-icons/fa";

function RecentPosts({ newsList }) {
  return (
    <>
      <div
        className="py-2 xsm:hidden sm:hidden"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      >
        <div className="bg-white p-6 rounded-lg ">
          <div>
            <Image src={IPOAsset} alt="ipo asset" className="w-auto" />
          </div>
          <div className="text-center">
            <p className="text-base font-medium text-ksl_dark_black pt-5">
              Interested in investing in an IPO?
            </p>
            <p className="text-sm font-normal text-ksl_light_gray pt-1">
              Open A Free Demat + Trading Account
            </p>
            <p className="text-sm  font-normal text-ksl_light_gray">
              Join Our 70 Lakh+ Successful Users.
            </p>
            <div className="pt-5">
              {/* <Link
                      href="/bo-account"
                      className="bg-ksl_dark_red px-5 py-2 text-lg text-white rounded-lg"
                    >
                      Login/ Resgistration
                    </Link> */}
              <button className="bg-ksl_dark_red px-5 py-2 text-lg text-white rounded-lg">
                Login/ Resgistration
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <p className="text-base font-lato font-bold">Recent Posts</p>
        {newsList
          .slice(0, 6)
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((news, index) => (
            <div key={index}>
              <Link href={news.link} className="my-auto">
                <div className="flex flex-row my-3">
                  <div className="w-4/12">
                    <Image
                      src={news.image}
                      alt={news.image}
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="w-8/12 my-auto">
                    <div className="flex flex-col pl-5">
                      <p className="text-ksl_dark_black font-lato text-text_15">
                        {news.header.split(" ").slice(0, 4).join(" ")}
                      </p>
                      <div className="flex flex-row text-ksl_light_gray text-text_14 my-auto pt-1">
                        <div className="my-auto">
                          <FaCalendarDay className=" " />
                        </div>
                        <div className=" pl-3 ">{news.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default RecentPosts;
