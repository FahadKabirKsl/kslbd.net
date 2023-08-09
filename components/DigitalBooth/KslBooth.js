import React, { useEffect, useState } from "react";
import { IoMdCall, IoMdMail } from "react-icons/io";

const KslBooth = () => {
  const [allBooths, setAllBooths] = useState([]);

  useEffect(() => {
    const fetchBooths = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/booth`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const data = await response.json();
        setAllBooths(data);
      } catch (error) {
        console.error("Error fetching booth data:", error);
      }
    };

    fetchBooths();
  }, []);

  return (
    <div className="bg-ksl_light_red backdrop-blur-lg -mt-20">
      <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80">
        <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-4 py-10">
          {allBooths.map((booth,index) => (
            <div key={index}>
              <div className="bg-white rounded-3xl p-6">
                <div className="border text-white bg-ksl_dark_red rounded-xl mx-auto">
                  <p className="text-center font-lato text-text_18 font-bold p-3">
                    {booth.booth_name}
                  </p>
                </div>
                <p className="py-8 text-center font-lato text-text_18 tracking-tight font-bold text-ksl_dark_gray">
                  {booth.booth_address}
                </p>
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="flex flex-row">
                    <IoMdCall className="my-auto text-ksl_light_gray" />
                    <p className="my-auto font-mulish text-ksl_light_gray pl-2">
                      {booth.booth_helpline}
                    </p>
                  </div>
                  <div className="flex flex-row pt-4">
                    <IoMdMail className="my-auto text-ksl_light_gray" />
                    <p className="my-auto font-mulish text-ksl_light_gray pl-2">
                      {booth.booth_email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KslBooth;
