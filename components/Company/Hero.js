import React, { useEffect, useState } from "react";
import Image from "next/image";
import Contact_us_hero from "../../public/assets/Company/contact_us_hero.png";
import AboutUs from "./AboutUs";
import Director from "./Director";
import Team from "./Team";
import AOS from "aos";
import Team2 from "./Team2";
function Hero() {
  const [openTab, setOpenTab] = useState(1);
  const [director, setDirector] = useState([]);
  const [team, setTeam] = useState([]);

  async function fetchEmp() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/employee`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setDirector(
        data.filter((employee) => employee.employee_type === "director")
      );
      setTeam(
        data.filter((employee) => employee.employee_type === "management_team")
      );
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  }

  useEffect(() => {
    fetchEmp();
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-ksl_light_red">
        <div className="relative">
          <div>
            <Image
              src={Contact_us_hero}
              alt="Contact_us_hero"
              className="w-full h-64 xsm:w-auto sm:w-auto"
            />
          </div>
          <div className="absolute inset-x-0 top-32">
            <p className=" text-text_41 font-lato font-bold text-center ">
              Company
            </p>
          </div>
          <div className="absolute inset-x-0 top-56 mt-2 flex justify-center items-center ">
            <ul className="flex justify-center xsm:flex-col sm:flex-col list-none xsm:w-full sm:w-full">
              <li
                className="text-center w-auto my-auto xsm:w-full sm:w-full xsm:px-5 sm:px-5 "
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-out"
              >
                <a
                  className={
                    "py-3 px-6 rounded-lg block font-mulish font-bold text-base " +
                    (openTab === 1
                      ? "text-white bg-ksl_dark_red shadow-customred rounded-lg"
                      : "text-black bg-white hover:bg-ksl_dark_red hover:text-white hover:shadow-customred hover:rounded-lg duration-700")
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
              <li
                className="text-center w-auto my-auto xsm:w-full sm:w-full xsm:px-5 sm:px-5 xsm:my-5 sm:my-5 mx-5 xsm:mx-0 "
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-out"
              >
                <a
                  className={
                    "py-3 px-6 rounded-xl block font-mulish font-bold text-base " +
                    (openTab === 2
                      ? "text-white bg-ksl_dark_red shadow-customred rounded-lg "
                      : "text-black bg-white hover:bg-ksl_dark_red hover:text-white hover:shadow-customred hover:rounded-lg duration-700")
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
              <li
                className="text-center w-auto my-auto xsm:w-full sm:w-full xsm:px-5 sm:px-5 "
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-out"
              >
                <a
                  className={
                    "py-3 px-6 rounded-xl block font-mulish font-bold text-base " +
                    (openTab === 3
                      ? "text-white bg-ksl_dark_red shadow-customred rounded-lg"
                      : "text-black bg-white hover:bg-ksl_dark_red hover:text-white hover:shadow-customred hover:rounded-lg duration-700")
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
        </div>
        <div className="">
          <div className=" flex justify-center">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <AboutUs />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <Director data={director} />
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                {/* <Team2 data={team} /> */}
                <Team data={team} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
