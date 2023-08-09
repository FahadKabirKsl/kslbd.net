import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TiTickOutline } from "react-icons/ti";
import IPOAsset from "../../../public/assets/Homepage/Ipo/ipoasset.png";
import Subscribe from "../Subscribe";
function SingleCompanyPage({ ipoData }) {
  console.log(ipoData);
  return (
    <>
      <div>
        <div className="bg-ksl_light_red">
          <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80 pt-40 pb-20">
            <div className="pb-10">
              <div className="flex justify-between w-8/12 xsm:w-full sm:w-full">
                <div>
                  <div className="flex flex-col">
                    <p className="text-3xl xsm:text-2xl sm:text-2xl font-medium text-ksl_dark_gray">
                      {ipoData.company_name}
                    </p>
                    <p className="text-sm text-ksl_light_gray">
                      Platform: {ipoData.company_platform}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <p className="text-xl text-ksl_dark_red font-medium">
                    {ipoData.minimum_invest}
                  </p>
                  <p className="text-ksl_light_gray">Minumum Invest</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between xsm:flex-col sm:flex-col">
              <div className="flex flex-col w-9/12 xsm:w-full sm:w-full">
                <div className="bg-white p-6 rounded-lg">
                  <p className="text-ksl_dark_gray text-lg font-medium pb-3">
                    IPO Listing Details
                  </p>
                  <div className="grid grid-cols-4 xsm:grid-cols-2 sm:grid-cols-2 gap-2">
                    <div className="flex flex-col uppercase">
                      <p className="text-sm text-ksl_dark_red font-normal uppercase">
                        Listed On
                      </p>
                      <p className="text-base text-ksl_light_gray font-medium ">
                        {ipoData.list_on}
                      </p>
                    </div>
                    <div className="flex flex-col uppercase">
                      <p className="text-sm text-ksl_dark_red font-normal">
                        list Price
                      </p>
                      <p className="text-base text-ksl_light_gray font-medium">
                        {ipoData.list_price}
                      </p>
                    </div>
                    <div className="flex flex-col uppercase">
                      <p className="text-sm text-ksl_dark_red font-normal">
                        Offer Price
                      </p>
                      <p className="text-base font-medium">
                        {ipoData.offer_price}
                      </p>
                    </div>
                    <div className="flex flex-col uppercase">
                      <p className="text-sm text-ksl_dark_red font-normal">
                        Listing Gains
                      </p>
                      <p className="text-base text-ksl_light_gray  font-medium">
                        {ipoData.list_gains}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg mt-10">
                  <p className="text-ksl_dark_gray text-lg font-medium pb-3">
                    IPO Details
                  </p>
                  <div className="grid grid-cols-5 xsm:grid-cols-2 sm:grid-cols-2 gap-2">
                    <div className="flex flex-col uppercase">
                      <p className="text-sm text-ksl_dark_red font-normal">
                        Start Date
                      </p>
                      <p className="text-base text-ksl_light_gray font-medium">
                        {ipoData.start_date}
                      </p>
                    </div>
                    <div className="flex flex-col uppercase">
                      <p className="text-sm text-ksl_dark_red font-normal">
                        End Date
                      </p>
                      <p className="text-base text-ksl_light_gray font-medium">
                        {ipoData.end_date}
                      </p>
                    </div>
                    <div className="flex flex-col uppercase">
                      <p className="text-sm text-ksl_dark_red font-normal">
                        Cut-off date
                      </p>
                      <p className="text-base text-ksl_light_gray font-medium">
                        {ipoData.cutt_off_date}
                      </p>
                    </div>
                    <div className="flex flex-col uppercase">
                      <p className="text-sm text-ksl_dark_red font-normal">
                        Min Application Amount
                      </p>
                      <p className="text-base text-ksl_light_gray font-medium">
                        {ipoData.minimum_application_amount}
                      </p>
                    </div>
                    <div className="flex flex-col uppercase">
                      <p className="text-sm text-ksl_dark_red font-normal">
                        Total share
                      </p>
                      <p className="text-base text-ksl_light_gray font-medium">
                        {ipoData.total_share}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 xsm:grid-cols-2 sm:grid-cols-2 gap-2">
                    <div className="flex flex-col uppercase ">
                      <p className="text-sm text-ksl_dark_red font-normal">
                        Nav
                      </p>
                      <p className="text-base text-ksl_light_gray font-medium">
                        {ipoData.nav}
                      </p>
                    </div>
                    <div className="flex flex-col uppercase">
                      <p className="text-sm text-ksl_dark_red font-normal">
                        eps
                      </p>
                      <p className="text-base text-ksl_light_gray font-medium">
                        {ipoData.eps}
                      </p>
                    </div>
                    <div className="flex flex-col uppercase">
                      <p className="text-sm text-ksl_dark_red font-normal">
                        rate
                      </p>
                      <p className="text-base text-ksl_light_gray font-medium">
                        {ipoData.rate}
                      </p>
                    </div>
                    <div className="flex flex-col uppercase">
                      <p className="text-sm text-ksl_dark_red font-normal">
                        cupon rate
                      </p>
                      <p className="text-base text-ksl_light_gray font-medium">
                        {ipoData.cupon_rate}
                      </p>
                    </div>
                    <div className="flex flex-col uppercase">
                      <p className="text-sm text-ksl_dark_red font-normal">
                        type
                      </p>
                      <p className="text-base text-ksl_light_gray font-medium">
                        {ipoData.type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-5 xsm:hidden sm:hidden block"></div>
              <div className="w-3/12 xsm:w-full sm:w-full bg-white p-6 rounded-lg ">
                <div>
                  <Image src={IPOAsset} alt="Ipo asset" className="w-auto" />
                </div>
                <div className="text-center">
                  <p className="text-base font-medium text-ksl_dark_black pt-5">
                    Interested in investing in an IPO?
                  </p>
                  <p className="text-sm font-normal text-ksl_light_gray pt-1">
                    Open A Free Demat + Trading Account And
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
            <div className="flex justify-between xsm:flex-col sm:flex-col py-5">
              <div className="flex flex-col w-8/12 xsm:w-full sm:w-full">
                <div>
                  <p className="text-2xl text-ksl_dark_gray font-medium">
                    About Company
                  </p>
                  <p className="text-base text-ksl_light_gray ">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: ipoData.company_about,
                      }}
                    ></div>
                  </p>
                </div>
                <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-2 pt-5">
                  <div className="flex flex-col">
                    <p className="text-lg text-ksl_dark_red">
                      Parent Organization
                    </p>
                    <p className="text-base text-ksl_dark_gray">
                      {ipoData.parent_organization}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg text-ksl_dark_red">Founded</p>
                    <p className="text-base text-ksl_dark_gray">
                      {ipoData.founded}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg text-ksl_dark_red">
                      Managing Director
                    </p>
                    <p className="text-base text-ksl_dark_gray">
                      {ipoData.managing_director}
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div className="flex flex-col">
                    <p className="text-2xl text-ksl_dark_red font-medium">
                      Key Highlights
                    </p>

                    <div className="flex flex-col">
                      {/* {ipoData.key_highlights
                        .split("\n")
                        .map((highlight, index) => (
                          <div key={index} className="flex items-center">
                            <TiTickOutline className="text-ksl_dark_red mr-2" />
                            <div
                              dangerouslySetInnerHTML={{
                                __html: highlight,
                              }}
                            ></div>
                          </div>
                        ))} */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: ipoData.key_highlights,
                        }}
                      ></div>
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
      </div>
    </>
  );
}
export default SingleCompanyPage;
