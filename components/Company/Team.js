import React from "react";
import Image from "next/image";
import Anowar from "../../public/assets/Company/Anowar-Shadat.png";
import Alauddin from "../../public/assets/Company/AlauddinBhuiyan.png";
import Selim from "../../public/assets/Company/Selim-Azad.png";
import Moyenuddin from "../../public/assets/Company/Moyenuddin-Sohel.png";
import Kalim from "../../public/assets/Company/kalim-amzad.png";
import Zubair from "../../public/assets/Company/zubair-hasan.png";

function Team({ data }) {
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
                Meet Our Team
              </p>
            </div>
          </div>

          <div className="my-20">
            <div className="flex justify-between xsm:flex-col sm:flex-col">
              <div className="my-auto w-full xsm:pb-20 sm:pb-20">
                <div className="mt-5 mx-5 bg-white rounded-2xl">
                  <div className="m-team-card">
                    <div className="m-team-img">
                      <Image src={Moyenuddin} />
                    </div>
                    <div className="m-team-content">
                      <h3 className="text-xl font-semibold font-mulish uppercase text-ksl_dark_red -top-3.5 text-center">
                        MD. MOYENUDDIN SOHEL
                      </h3>
                      <h4 className="text-base font-medium -top-3.5 text-center ">
                        Chief Strategic Officer
                      </h4>
                      <p className="top-10 px-5">
                        Mr. Sohel has joined Kabir Securities Limited in March
                        2017. He has started his stock market profession in MSL
                        in December 2006 and promoted as the Head of Branch
                        Control & Trade in 2009. He is a well known share market
                        analyst, successful portfolio manager and a visionary
                        team leader.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-auto w-full xsm:pb-5 sm:pb-5">
                <div className="xsm:pb-5 sm:pb-5">
                  <div className="mt-5 mx-5 bg-white rounded-2xl ">
                    <div className="m-team-card">
                      <div className="m-team-img">
                        <Image src={Anowar} />
                      </div>
                      <div className="m-team-content">
                        <h3 className="text-xl font-semibold font-mulish uppercase text-ksl_dark_red -top-3.5 text-center">
                          MD. Anowar Shadat
                        </h3>
                        <h4 className="text-base font-medium -top-3.5 text-center">
                          Chief Operating Officer & Compliance Authority
                        </h4>
                        <p className="top-10 px-5">
                          COO and Compliance Authority, He started his career in
                          Abul khair group. Before KSL, Mr. Shadat was with KDS
                          Group and then he was COO in Be Rich Limited (TREC
                          holder of CSE for long 12 years of his career. He was
                          the senior manager of Business Development Department
                          (Head of the Department) in Lankabangla Securities
                          Ltd. just before KSL. He completed his M.COM. in
                          Accounting from National University and MBA in Finance
                          from premier University Bangladesh.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-20 mb-16 mx-5 bg-white rounded-2xl">
                  <div className="m-team-card">
                    <div className="m-team-img">
                      <Image src={Selim} />
                    </div>
                    <div className="m-team-content">
                      <h3 className="text-xl font-semibold font-mulish uppercase text-ksl_dark_red -top-3.5 text-center">
                        Muhammad Selim Azad, CMA
                      </h3>
                      <h4 className="text-base font-medium -top-3.5 text-center">
                        Chief Economist & Researcher
                      </h4>
                      <p className="top-10 px-5">
                        Economist Muhammad Selim Azad, CMA, Chief of the Center
                        for Research and Innovasion, is a professional member of
                        the Institute of Management Accountants, USA. He earned
                        his credentials in economics from the University of
                        Oxford, UK, and in finance and accounting from ICMA,
                        USA, IBA, DU, BUET, and received hands-on training from
                        the World Bank and UNDP. Mr. Selim, a results-driven
                        professional with more than 15 years of experience, was
                        the Chief Executive Officer and Chief Financial Officer
                        of numerous businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-auto w-full xsm:pb-20 sm:pb-20">
                <div className="mt-5 mx-5 bg-white rounded-2xl">
                  <div className="m-team-card ">
                    <div className="m-team-img">
                      <Image src={Alauddin} />
                    </div>
                    <div className="m-team-content">
                      <h3 className="text-xl font-semibold font-mulish uppercase text-ksl_dark_red -top-3.5 text-center">
                        ALAUDDIN BHUIYAN
                      </h3>
                      <h4 className="text-base font-medium -top-3.5 text-center">
                        Chief Accounting Officer
                      </h4>
                      <p className="top-10 px-5">
                        Mr. Alauddin Bhuiyan has joined KSL in October 2010. He
                        has a long working experience in Accounts and Finance
                        department in different organizations. He started his
                        career from Sonic Electronics and gradually earned
                        diversified experience while working with Akij Group of
                        Companies and GrameenPhone Limited. He has taken up
                        several successful training and workshop held locally on
                        career management and leadership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between xsm:flex-col sm:flex-col px-52 xsm:px-0 sm:px-5">
              <div className="my-auto w-full xsm:pb-20 sm:pb-20">
                <div className="mt-5 mx-5 bg-white rounded-2xl">
                  <div className="m-team-card ">
                    <div className="m-team-img">
                      <Image src={Kalim} />
                    </div>
                    <div className="m-team-content">
                      <h3 className="text-xl font-semibold font-mulish uppercase text-ksl_dark_red -top-3.5 text-center">
                        Md. Kalim Amzad Chy
                      </h3>
                      <h4 className="text-base font-medium -top-3.5 text-center">
                        Head of Analytics
                      </h4>
                      <p className="top-10 px-5">
                        A passionate data scientist began his career as a
                        research scientist at IIUC in 2018 and has already
                        published 11 research papers and Q1 journals across the
                        world. Throughout this voyage, he collaborated with
                        Stanford ranked world top 2% scientists from Norway,
                        Canada, Australia, Russia, and many more. In 2020 he was
                        promoted to head of data analytics and machine learning
                        researcher from team leader, R&D at One Education,
                        London, UK. He joined Kabir Securities Limited with a
                        vision of facilitating smart investing to its clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-auto w-full">
                <div className="mt-5 mx-5 bg-white rounded-2xl">
                  <div className="m-team-card ">
                    <div className="m-team-img">
                      <Image src={Zubair} />
                    </div>
                    <div className="m-team-content">
                      <h3 className="text-xl font-semibold font-mulish uppercase text-ksl_dark_red -top-3.5 text-center">
                        Zubair Hasan
                      </h3>
                      <h4 className="text-base font-medium -top-3.5 text-center">
                        Head of Technology
                      </h4>
                      <p className="top-10 px-5">
                        Mr. Zubair Hasan is a technopreneur with a philosophy of
                        technology for changing human lives. With this vision,
                        he automates the aspects of businesses that require
                        manual labor. And by understanding the business
                        in-depth, he architects the perfect system which reduces
                        operation costs, increases operation speed, and
                        efficiency, and orchestrates a flawless harmony that
                        boosts the business significantly. He's been working as
                        a technology professional for 10+ years and led many
                        tech firms and international tech teams throughout his
                        career.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 xsm:grid-cols-1 sm:grid-cols-1 mt-20">
              {data.map((team, index) => {
                return (
                  <div key={index}>
                    <div className="mt-5 mx-5 bg-white rounded-2xl">
                      <div className="m-team-card ">
                        <div className="m-team-img">
                          <Image
                            src={
                              process.env.NEXT_PUBLIC_BACKEND_URL +
                              "/storage/" +
                              team.image
                            }
                            alt="team img"
                          />
                        </div>
                        <div className="m-team-content">
                          <h3 className="text-xl font-semibold font-mulish uppercase text-ksl_dark_red -top-3.5 text-center">
                            {team.employee_name}
                          </h3>
                          <h4 className="text-base font-medium -top-3.5 text-center ">
                            {team.employee_designation}
                          </h4>

                          <div
                            className="top-10 px-5"
                            dangerouslySetInnerHTML={{
                              __html: team.employee_about,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
