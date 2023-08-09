import React from "react";
import Image from "next/image";
import comment from "../../public/assets/Career/comment.png";
import assesment from "../../public/assets/Career/assessment.png";
import calender from "../../public/assets/Career/calendar_today.png";
import folder from "../../public/assets/Career/folder.png";
import careerAsset from "../../public/assets/Career/job.png";
import search from "../../public/assets/Career/search.png";
import hire from "../../public/assets/Career/hire.png";
import Subscribe from "../Homepage/Subscribe";
function Career() {
  return (
    <>
      <div className="bg-ksl_light_red ">
        <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80">
          <div className="py-10 backdrop-blur-lg">
            <div
              className="-mt-32 w-4/5 xsm:w-full sm:w-full mx-auto bg-white rounded-3xl p-10 xsm:px-5 sm:px-5"
              data-aos="zoom-in"
              data-aos-offset="210"
              data-aos-duration="1200"
              data-aos-easing="ease-out"
            >
              <div className="w-full">
                <p className="border mx-auto bg-ksl_dark_red text-white w-2/12 xsm:w-full sm:w-full text-center p-3 rounded-2xl font-lato text-text_18 font-bold">
                  What we do
                </p>
              </div>
              <p className="text-center xsm:text-start sm:text-start font-lato text-ksl_dark_gray py-5">
                Powered by millions of dreams, hopes and aspirations, India
                today is brimming with potential. At NSE, we are driven by this
                ambition that makes India charge ahead and take a more prominent
                place on the global stage. We aim to catalyze India's growth
                story by creating investment opportunities, enabling access and
                empowering our stakeholders. We work harder, smarter and faster
                to deliver impact across the investment ecosystem. In a world
                that changes shape by the second, we constantly reinvent
                ourselves to redefine the future.
              </p>
            </div>
          </div>
          <div className="py-10">
            <div
              className="flex justify-between xsm:flex-col sm:flex-col font-lato"
              data-aos="zoom-in"
              data-aos-offset="220"
              data-aos-duration="1200"
              data-aos-easing="ease-out"
            >
              <p className="text-text_41 font-semibold w-1/2 xsm:w-full sm:w-full">
                Benefit of <br />{" "}
                <span className="text-ksl_dark_red">Working at KSL BD</span>
              </p>
              <p className="text-ksl_light_gray w-1/2 xsm:w-full sm:w-full my-auto">
                We will also facilitate the business marketing of these products
                with our SEO experts so that they become a ready-to-use website
                and help sell a product from the company
              </p>
            </div>
          </div>
          <div className="py-10">
            <div className="grid grid-cols-4 xsm:grid-cols-1 gap-6">
              <div
                className="bg-white p-6 rounded-lg hover:bg-ksl_dark_red hover:text-white duration-700"
                data-aos="zoom-in"
                data-aos-offset="230"
                data-aos-duration="1200"
                data-aos-easing="ease-out"
              >
                <div className="flex flex-col font-lato">
                  <div>
                    <Image
                      src={comment}
                      alt="comment img"
                      width={50}
                      height={50}
                      className=" bg-ksl_light_red p-3.5 rounded-lg"
                    />
                  </div>
                  <h2 className="text-lg py-2">Team Message</h2>
                  <p className="text-text_14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="bg-white p-6 rounded-lg hover:bg-ksl_dark_red hover:text-white duration-700"
                data-aos="zoom-in"
                data-aos-offset="240"
                data-aos-duration="1200"
                data-aos-easing="ease-out"
              >
                <div className="flex flex-col font-lato">
                  <div>
                    <Image
                      src={assesment}
                      alt="assesment img"
                      width={50}
                      height={50}
                      className=" bg-ksl_light_red p-3.5 rounded-lg"
                    />
                  </div>
                  <h2 className="text-lg py-2">Project Management</h2>
                  <p className="text-text_14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="bg-white p-6 rounded-lg hover:bg-ksl_dark_red hover:text-white duration-700"
                data-aos="zoom-in"
                data-aos-offset="250"
                data-aos-duration="1200"
                data-aos-easing="ease-out"
              >
                <div className="flex flex-col font-lato">
                  <div>
                    <Image
                      src={calender}
                      alt="calender img"
                      width={50}
                      height={50}
                      className=" bg-ksl_light_red p-3.5 rounded-lg"
                    />
                  </div>
                  <h2 className="text-lg py-2">Tasks Scheduling</h2>
                  <p className="text-text_14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div
                className="bg-white p-6 rounded-lg hover:bg-ksl_dark_red hover:text-white duration-700"
                data-aos="zoom-in"
                data-aos-offset="260"
                data-aos-duration="1200"
                data-aos-easing="ease-out"
              >
                <div className="flex flex-col font-lato">
                  <div>
                    <Image
                      src={folder}
                      alt="folder img"
                      width={50}
                      height={50}
                      className=" bg-ksl_light_red p-3.5 rounded-lg"
                    />
                  </div>
                  <h2 className="text-lg py-2">File Manager</h2>
                  <p className="text-text_14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1  gap-6">
              <div
                className="row-span-2 xsm:row-span-1 sm:row-span-1"
                data-aos="fade-right"
                data-aos-offset="210"
                data-aos-duration="1200"
                data-aos-easing="ease-out"
              >
                <div>
                  <Image
                    src={careerAsset}
                    alt="careed asset"
                    className="w-auto"
                  />
                </div>
              </div>
              <div
                className="bg-white p-6 rounded-lg"
                data-aos="zoom-in"
                data-aos-offset="220"
                data-aos-duration="1200"
                data-aos-easing="ease-out"
              >
                <div className="flex flex-row xsm:flex-col sm:flex-col font-lato">
                  <div>
                    <Image
                      src={search}
                      alt="search img"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="flex flex-col w-full px-2 xsm:px-0 sm:px-0">
                    <h2 className="text-lg py-2">Junior Excutive Officer</h2>
                    <p className="text-text_14">
                      KSL introduced Short Term margin Loan (STML) for our
                      clients for Zero interest rate. This is the most popular
                      services of KSL which was designed for clients who wants
                      to boost up their purchase power for a short period of
                      time.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white p-6 rounded-lg"
                data-aos="zoom-in"
                data-aos-offset="230"
                data-aos-duration="1200"
                data-aos-easing="ease-out"
              >
                <div className="flex flex-row xsm:flex-col sm:flex-col font-lato">
                  <div>
                    <Image
                      src={hire}
                      alt="hire img"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="flex flex-col w-full px-2 xsm:px-0 sm:px-0">
                    <h2 className="text-lg py-2">Assistant Manager </h2>
                    <p className="text-text_14">
                      KWe also introduced Long term margin Loan (LTML) facility
                      for our clients who are generally invested their money in
                      Capital market for Long time.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white p-6 rounded-lg"
                data-aos="zoom-in"
                data-aos-offset="240"
                data-aos-duration="1200"
                data-aos-easing="ease-out"
              >
                <div className="flex flex-row xsm:flex-col sm:flex-col font-lato">
                  <div>
                    <Image
                      src={hire}
                      alt="hire img"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="flex flex-col w-full px-2 xsm:px-0 sm:px-0">
                    <h2 className="text-lg py-2">Trading Analist</h2>
                    <p className="text-text_14">
                      Our EFTN System helps our clients to withdraw their
                      balance on time. The system is totally automated and
                      secured so that our clients feel relax about their on
                      demand fund no matter how far they are from our office.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white p-6 rounded-lg"
                data-aos="zoom-in"
                data-aos-offset="250"
                data-aos-duration="1200"
                data-aos-easing="ease-out"
              >
                <div className="flex flex-row xsm:flex-col sm:flex-col font-lato">
                  <div>
                    <Image
                      src={search}
                      alt="search img"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="flex flex-col w-full px-2 xsm:px-0 sm:px-0">
                    <h2 className="text-lg py-2">Client</h2>
                    <p className="text-text_14">
                      Clients of Kabir Securities Limited now can deposit in
                      their portfolio account by means of BEFTN. Clients don’t
                      need to come to bank for cheque or cash deposit
                      physically. All a client has to do is instruct his bank to
                      transfer/deposit fund to the bank accounts of Kabir
                      Securities Limited.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Subscribe />
        </div>
      </div>
    </>
  );
}

export default Career;
