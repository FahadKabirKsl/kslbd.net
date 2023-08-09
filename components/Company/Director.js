import React from "react";
import Image from "next/image";

function Director({ data }) {
  console.log(data);
  return (
    <>
      <div className="bg-ksl_light_red">
        <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80">
          <div>
            <div className="text-center py-10">
              <p
                className="text-text_41 xsm:text-3xl sm:text-3xl font-lato font-bold pt-10 xsm:mt-28 sm:mt-28"
                data-aos="zoom-in"
                data-aos-offset="210"
                data-aos-duration="1200"
                data-aos-easing="ease-out"
              >
                Leaders Behind the success
              </p>
            </div>
            <p className="font-mulish p-6 xsm:p-3 sm:p-3 text-center text-ksl_dark_gray font-normal">
              Kabir Securities Limited is led by Mohammed Alamgir Kabir. Under
              his foresight and vision, KSL achieved extraordinary success in a
              short time. His leadership, drive, and vision inspired his
              management and executives.
            </p>
          </div>
          <div className="py-10">
            {data.map((director, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row xsm:flex-col sm:flex-col w-full py-5"
                >
                  <div className="flex flex-col xsm:flex-col sm:flex-col w-3/12 xsm:w-full sm:w-full">
                    <div
                      className={`p-6 rounded-3xl from-ksl_light_red_600 via-ksl_light_red_200 to-ksl_light_red ${
                        director.id % 2 === 0
                          ? "bg-gradient-to-l"
                          : "bg-gradient-to-r"
                      }`}
                    >
                      <Image
                        // src={director.image}
                        src={process.env.NEXT_PUBLIC_BACKEND_URL + "/storage/" + director.image}
                        alt={director.image}
                        className="w-auto h-auto rounded-3xl"
                      />
                    </div>
                    <p className="text-text_18 font-semibold text-ksl_dark_black pt-5">
                      {director.employee_name}
                    </p>
                    <p className="text-base font-semibold text-ksl_dark_black">
                      {director.employee_designation}
                    </p>
                  </div>
                  <div className="flex flex-col xsm:flex-col sm:flex-col font-mulish text-ksl_dark_gray font-medium text-justify w-9/12 xsm:w-full sm:w-full xsm:pl-0 sm:pl-0 xsm:pt-5 sm:pt-5 pl-5">
                    <div className="bg-ksl_dark_red text-white text-center w-2/12 xsm:w-1/2 sm:w-1/2 rounded-xl mb-10 ">
                      <p className="font-lato p-2">Message</p>
                    </div>
                    <div
                      className="py-2"
                      dangerouslySetInnerHTML={{
                        __html: director.employee_about,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Director;

// import Rowshan_Ara from "../../public/assets/Company/Rowshan-Ara.png";
// import Alamgir_Kabir from "../../public/assets/Company/Alamgir-Kabir.png";
// import Shadman_Kabir from "../../public/assets/Company/Shadman-Kabir.png";
// import Sabbria_Kabir from "../../public/assets/Company/Sabbria-Kabir.png";
// import ImgBg from "../../public/assets/Company/meggasge-provider-img-bg.png";

// const DirectorTeam = [
//   {
//     id: 1,
//     image: Rowshan_Ara,
//     comments1:
//       "We have a proud history in the capital market of Bangladesh having established our first operation nearly 12 years ago. Our priority always remains our clients, who we believe are at the heart of our existence. We tailor our services to suit local needs and desires and ensure that our clients are always satisfied with us.",
//     comments2:
//       "We always try our level best to comply with business norms and ethics, national laws and ensure that our actions are sound, just and viable. For that reason, we will always be responsive to the needs of our communities, and ultimately our clients.",
//     comments3:
//       "I would like to sincerely thank you, our valued clients, for your continued support in ensuring that we become a leading brokerage house in Bangladesh.",
//     name: "ROWSHAN ARA ALAM",
//     designation: "Chairperson",
//   },
//   {
//     id: 2,
//     image: Alamgir_Kabir,
//     comments1:
//       "Mohammed Alamgir Kabir Honourable Managing Director leads Kabir Securities Limited to new heights with more than two decades of comprehensive experience. He has the capability of out-of-the-box thinking to resolve problems & leading from the forefront of business growth. He has completed his graduation in Commerce. He also owns and is the Chairman of numerous businesses Like Coronet Corporation Ltd, Technocore Bangladesh Ltd (Cloudone), Neocon Technologies Ltd, etc.",
//     comments2:
//       "We take pride in being one of the pioneer Stock Broker Companies in Bangladesh having achieved remarkable growth over the last twelve years and contributing significantly to the development of market of Bangladesh. The Company has attained prominence as a leader in the field of Stock Broker business through competence, competitiveness and attaining with highest quality services to its Clients. We have a long tradition of serving our valued customers to their complete satisfaction through efficient management and excellent workmanship, which we continue to maintain with our untiring efforts.",
//     name: "MOHAMMED ALAMGIR KABIR",
//     designation: "Managing Director",
//   },
//   {
//     id: 3,
//     image: Shadman_Kabir,
//     comments1:
//       "Honorable Deputy Managing Director, Mohammed Shadman Kabir is a passionate leader who provides a modern vision to the company. He completed his graduation from the University of New South Wales, Sydney, Australia, in the field of Accounting and Marketing. He has also pursued an offshore Professional Year from Navitas Professional Australia. Besides being an exuberant leader, he is an Investor and a CFD professional.",
//     comments2:
//       "In the present era of increasing globalization, we at KSL recognize that addressing our customers' needs is crucial to our company's success. Kabir Securities Ltd is a hub to dedicated Investors and with the advanced technology and automation that we are implementing KSL is about to change the face of the industry and create a safe pool for all investors unlike anywhere else. KSL is one of the top renowned brokerage firms in Bangladesh and we hope maintain our position with utmost dignity in the years to come.",
//     comments3:
//       "One that note I'd like to thank our valued investors on behalf of the Board of Directors.",
//     name: "MOHAMMED SHADMAN KABIR",
//     designation: "Deputy Managing Director",
//   },
//   {
//     id: 4,
//     image: Sabbria_Kabir,
//     comments1:
//       "Sabbria Kabir is a potential leader. She is graduating from Taylor's University, Malaysia. Besides being an ambitious individual she has a broader mindset in business.",
//     comments2:
//       "We currently live in a market that is constantly evolving. In this case, we feel that faith is the most important factor in convincing clients to buy our high-quality items. We fully recognize that faith may lead to a Major Victory in a long-term, stronger relationship.",
//     comments3:
//       "Every investment is valuable to us, and it is our primary obligation to secure the success of every investor. Kabir Securities Limited dispersed services, which use cutting-edge technology, are diverse. We will continue to make every attempt to provide excellent service to our valued clients.",
//     name: "SABBRIA KABIR",
//     designation: "Director",
//   },
// ];
