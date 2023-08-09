import React, { useEffect, useState } from "react";
// import tw from "tailwind-styled-components";
import Image from "next/image";
import Link from "next/link";

function Media() {
  const [allMedia, setAllMedia] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/media`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const data = await response.json();
        setAllMedia(data);
      } catch (error) {
        console.error("Error fetching booth data:", error);
      }
    };

    fetchMedia();
  }, []);

  return (
    <div className="bg-ksl_light_red pt-20">
      <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80">
        <div>
          <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-6 xsm:gap-4 sm:gap-4">
            {allMedia.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`grid-item p-6 ${index === 0 || (index - 3) % 7 === 0
                    ? "col-span-2 xsm:col-span-1 sm:col-span-1"
                    : ""
                    }`}
                >
                  <h1 className="text-text_36 text-ksl_dark_black font-lato">
                    {item.title.split(" ").slice(0, 10).join(" ")}
                  </h1>
                  <Image
                    src={process.env.NEXT_PUBLIC_BACKEND_URL + "/storage/" + item.image}
                    className="w-auto h-auto rounded-2xl "
                  />
                  <div className="text-ksl_dark_gray bg-white rounded-2xl p-4">
                    <div className="flex flex-col">
                      <p className="text-sm font-mulish">
                        {item.newspaper_name}
                      </p>

                      <h2 className="text-xl font-mulish">
                        {item.newspaper_title.split(" ").slice(0, 10).join(" ")}
                      </h2>
                      <div
                        className="font-mulish text-sm"
                        dangerouslySetInnerHTML={{
                          __html: item.newspaper_description
                            .split(" ")
                            .slice(0, 10)
                            .join(" "),
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;

// className={`text-white bg-ksl_media_${(index % 7) + 1}`}
