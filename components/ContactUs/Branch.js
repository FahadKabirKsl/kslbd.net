import React, { useEffect, useState } from "react";
import { IoMdCall, IoMdMail } from "react-icons/io";
const Branch = () => {
  const [AllBranches, setBranch] = useState([]);
  async function fetchBranch() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/branch`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setBranch(data);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  }

  useEffect(() => {
    fetchBranch();
  }, []);
  return (
    <>
      <div className="bg-ksl_light_red ">
        <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80">
          <div className="py-10 backdrop-blur-lg">
            <div className="-mt-32 w-4/5 xsm:w-full sm:w-full mx-auto bg-white rounded-3xl p-10">
              <div className="w-full">
                <p className="border mx-auto bg-ksl_dark_red text-white w-2/12 xsm:w-full sm:w-full text-center p-3 rounded-2xl font-lato text-text_18 font-bold">
                  Head Office
                </p>
              </div>
              <p className="text-center font-lato text-text_18 tracking-wide font-bold text-ksl_dark_gray py-5">
                Forum Central (4th, 5th & 7th floor), 21/22 M. M. Ali Road,
                Golpahar Circle, Mehedibag, Chattogram
              </p>
              <div className="flex flex-row justify-center items-center xsm:flex-col sm:flex-col">
                <div>
                  <div className="flex flex-row ">
                    <IoMdCall className="my-auto text-ksl_light_gray" />
                    <p className="my-auto font-mulish text-ksl_light_gray pl-2">
                      +880 241355771-74
                    </p>
                  </div>
                </div>
                <div className="mx-5"></div>
                <div>
                  <div className="flex flex-row">
                    <IoMdMail className="my-auto text-ksl_light_gray" />
                    <p className="my-auto font-mulish text-ksl_light_gray pl-2">
                      info@kslbd.net
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-4 py-10">
            {AllBranches.map((branch,index) => {
              return (
                <div key={index}>
                  <div className="bg-white rounded-3xl p-6">
                    <div className="border text-white bg-ksl_dark_red rounded-xl mx-auto ">
                      <p className="text-center font-lato text-text_18 font-bold p-3">
                        {branch.branch_name}
                      </p>
                    </div>
                    <p className="py-8 text-center font-lato text-text_18 tracking-tight font-bold text-ksl_dark_gray">
                      {branch.branch_address}
                    </p>
                    <div className="w-full flex flex-col justify-center items-center">
                      <div className="flex flex-row">
                        <IoMdCall className="my-auto text-ksl_light_gray" />
                        <p className="my-auto font-mulish text-ksl_light_gray pl-2">
                          {branch.branch_helpline_1}
                        </p>
                      </div>
                      <div className="flex flex-row">
                        <IoMdCall className="my-auto text-ksl_light_gray" />
                        <p className="my-auto font-mulish text-ksl_light_gray pl-2">
                          {branch.branch_helpline_2}
                        </p>
                      </div>
                      <div className="flex flex-row pt-4">
                        <IoMdMail className="my-auto text-ksl_light_gray" />
                        <p className="my-auto font-mulish text-ksl_light_gray pl-2">
                          {branch.branch_email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Branch;
