import React, { useState } from "react";
import AboutUs from "./AboutUs";
import Director from "./Director";
import Team from "./Team";

function CompanyTabs() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="bg-ksl_light_red ">
        <div className="px-80">
          <ul className="flex justify-center list-none mx-60">
            <li className="text-center w-auto my-auto">
              <a
                className={
                  "py-4 px-6 rounded-xl block font-mulish font-bold text-base " +
                  (openTab === 1
                    ? "text-white bg-ksl_dark_red"
                    : "text-black bg-white hover:bg-ksl_dark_red hover:text-white duration-700")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                href="#link1"
                role="tablist"
              >
                About Us
              </a>
            </li>
            <li className="text-center w-auto my-auto mx-5">
              <a
                className={
                  "py-4 px-6 rounded-xl block font-mulish font-bold text-base " +
                  (openTab === 2
                    ? "text-white bg-ksl_dark_red "
                    : "text-black bg-white hover:bg-ksl_dark_red hover:text-white duration-700")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                href="#link2"
                role="tablist"
              >
                Board of Directors
              </a>
            </li>
            <li className="text-center w-auto my-auto">
              <a
                className={
                  "py-4 px-6 rounded-xl block font-mulish font-bold text-base " +
                  (openTab === 3
                    ? "text-white bg-ksl_dark_red"
                    : "text-black bg-white hover:bg-ksl_dark_red hover:text-white duration-700")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                href="#link3"
                role="tablist"
              >
                Management Team
              </a>
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className=" flex justify-center">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <AboutUs />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <Director />
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <Team />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyTabs;
