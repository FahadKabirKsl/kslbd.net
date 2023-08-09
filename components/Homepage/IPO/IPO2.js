import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import { GoPrimitiveDot } from "react-icons/go";
import IPOAsset from "../../../public/assets/Homepage/Ipo/ipoasset.png";
import DataTable from "react-data-table-component";
import dummyData from "../../../data";
import Subscribe from "../Subscribe";
const columns = [
  {
    name: "COMPANY NAME",
    selector: (row) => (
      <div>
        <Link
          legacyBehavior
          href={`/ipo/${row.company_name}`}
          passHref
        >
          <a target="_blank" rel="noopener noreferrer">
            {row.company_name}
          </a>
        </Link>
      </div>
    ),
    sortable: false,
    grow: 4,
  },

  {
    name: "CUT-OFF DATE",
    selector: (row) => row.cutt_off_date,
    grow: 2,
  },
  {
    name: "MINIMUM APPLICATION AMOUNT",
    selector: (row) => row.minimum_application_amount,
    grow: 2,
  },
  {
    name: "TOTAL SHARE",
    selector: (row) => row.total_share,
  },
  {
    name: "EPS",
    selector: (row) => row.eps,
  },
  {
    name: "NAV",
    selector: (row) => row.nav,
  },
  {
    name: "RATE",
    selector: (row) => row.rate,
  },
  {
    name: "TYPE",
    selector: (row) => row.type,
    grow: 2,
  },
];
function IPO2({data}) {
  useEffect(() => {
    AOS.init();
  }, []);
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
  const [ongoingIPOs, setOngoingIPOs] = useState([]);
  const [upcomingIPOs, setUpcomingIPOs] = useState([]);
  const [closedIPOs, setClosedIPOs] = useState([]);
  const [recentIPOs, setRecentIPOs] = useState([]);
  async function fetchIpo() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ipo`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data)
      setOngoingIPOs(data.filter((ipo) => ipo.status === "ongoing_ipo"));
      setUpcomingIPOs(data.filter((ipo) => ipo.status === "upcoming_ipo"));
      setClosedIPOs(data.filter((ipo) => ipo.status === "closing_ipo"));
      setRecentIPOs(data.filter((ipo) => ipo.status === "listing_ipo"));
    } catch (error) {
      console.error("Error fetching IPO data:", error);
    }
  }
  useEffect(() => {
    fetchIpo();
  }, []);
  return (
    <>
      <div className="bg-ksl_light_red">
        <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80">
          <div className="flex justify-between xsm:flex-col sm:flex-col">
            <div className="flex flex-col my-auto w-9/12 xsm:w-full sm:w-full xsm:pb-10 sm:pb-10">
              <p className="text-2xl font-medium text-ksl_dark_black ">
                Ongoing IPOs
              </p>
              <p
                className="text-base py-5"
                data-aos="fade-right"
                data-aos-offset="160"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                Several unicorn companies and tech start-ups are expecting to go
                public next year.
              </p>
              <div
                className=" bg-white p-6 xsm:p-2 sm:p-2 rounded-lg"
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                {ongoingIPOs.length > 0 ? (
                  <DataTable
                    columns={columns}
                    data={ongoingIPOs}
                    className="custom-table"
                  />
                ) : (
                  <p>No Ongoing IPOs</p>
                )}
              </div>
            </div>
            <div className="mx-5 xsm:hidden sm:hidden"></div>
            <div
              className="w-4/12 xsm:w-full sm:w-full bg-white p-6 rounded-lg "
              data-aos="fade-down"
              data-aos-offset="150"
              data-aos-duration="800"
              data-aos-easing="ease-out"
            >
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
                  <Link
                    href="/bo-account"
                    className="bg-ksl_dark_red px-5 py-2 text-lg text-white rounded-lg"
                  >
                    Open BO Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="xsm:pt-10 sm:pt-10">
            <div className="flex flex-col my-auto ">
              <p
                className="text-2xl font-medium text-ksl_dark_black"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                Upcominging IPOs
              </p>
              <p
                className="text-base py-5"
                data-aos="fade-right"
                data-aos-offset="160"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                Several unicorn companies and tech start-ups are expecting to go
                public next year.
              </p>
              <div
                className="bg-white p-6 xsm:p-2 sm:p-2 rounded-lg"
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                {upcomingIPOs.length > 0 ? (
                  <DataTable
                    columns={columns}
                    data={upcomingIPOs}
                    className="custom-table"
                  />
                ) : (
                  <p>No Ongoing IPOs</p>
                )}
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div className="flex flex-col my-auto ">
              <p
                className="text-2xl font-medium text-ksl_dark_black"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                Recently Closed IPOs
              </p>
              <p
                className="text-base py-5"
                data-aos="fade-right"
                data-aos-offset="160"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                Several unicorn companies and tech start-ups are expecting to go
                public next year.
              </p>
              <div
                className="bg-white p-6 xsm:p-2 sm:p-2 rounded-lg"
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                {closedIPOs.length > 0 ? (
                  <DataTable
                    columns={columns}
                    data={closedIPOs}
                    className="custom-table"
                  />
                ) : (
                  <p>No Ongoing IPOs</p>
                )}
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div className="flex flex-col my-auto ">
              <p
                className="text-2xl font-medium text-ksl_dark_black"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                Recently listed IPOs
              </p>
              <p
                className="text-base py-5"
                data-aos="fade-right"
                data-aos-offset="160"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                Several unicorn companies and tech start-ups are expecting to go
                public next year.
              </p>
              <div
                className="bg-white p-6 xsm:p-2 sm:p-2 rounded-lg"
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                {recentIPOs.length > 0 ? (
                  <DataTable
                    columns={columns}
                    data={recentIPOs}
                    className="custom-table"
                  />
                ) : (
                  <p>No Ongoing IPOs</p>
                )}
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div className="flex flex-col my-auto bg-white rounded-lg p-6 xsm:p-2 sm:p-2">
              <p
                className="text-2xl font-medium text-ksl_dark_red "
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                About IPO
              </p>
              <p
                className="p-6 pb-0 xsm:p-2 sm:p-2"
                data-aos="fade-up"
                data-aos-offset="160"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                IPO or Initial Public Offering is a process by which a private
                company becomes public. A company becomes public when it starts
                selling its shares in the market for the first time. Selling
                shares is like selling a portion of its stake to the investors
                for the company. There are two types of market
                <br />
                1. Primary Market <br />
                2. Secondary <br />
                Market IPOs are launched in the primary market.
              </p>
            </div>
          </div>
          <div className="pt-10">
            <div className="flex flex-col my-auto bg-white rounded-lg p-6 xsm:p-2 sm:p-2">
              <p
                className="text-2xl font-medium text-ksl_dark_red "
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                Why does a company launch an IPO?
              </p>
              <p
                className="p-6 pb-0 xsm:p-2 sm:p-2"
                data-aos="fade-up"
                data-aos-offset="160"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                For the first time we introduced our Mobile application “MYKSL”
                which is an android based software and allows our client to
                experience completely different test of trading. It includes
                total broker solutions and our investors need not to visit our
                office for any service. He can get every service on ERP.
              </p>
            </div>
          </div>
          <div className="pt-10">
            <div className="flex flex-col my-auto bg-white rounded-lg p-6 xsm:p-2 sm:p-2">
              <p
                className="text-2xl font-medium text-ksl_dark_red "
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                Why does a company launch an IPO?
              </p>
              <p
                className="p-6 pb-0 xsm:p-2 sm:p-2"
                data-aos="fade-up"
                data-aos-offset="160"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                For the first time we introduced our Mobile application “MYKSL”
                which is an android based software and allows our client to
                experience completely different test of trading. It includes
                total broker solutions and our investors need not to visit our
                office for any service. He can get every service on ERP.
              </p>
            </div>
          </div>
          <div className="py-10">
            <div className="flex flex-col my-auto bg-white rounded-lg p-6 xsm:p-2 sm:p-2">
              <p
                className="text-2xl font-medium text-ksl_dark_red "
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                Why does a company launch an IPO?
              </p>
              <div className="p-6 pb-0 xsm:p-2 sm:p-2 flex flex-col">
                <p></p>
                <div className="flex flex-row xsm:flex-col sm:flex-col">
                  <div>
                    <p
                      className="mb-2"
                      data-aos="fade-right"
                      data-aos-offset="150"
                      data-aos-duration="800"
                      data-aos-easing="ease-out"
                    >
                      1. Qualified institutional buyers (QIB) QIB portion which
                      comprises
                    </p>
                    <p
                      className="flex flex-row text-sm pt-1"
                      data-aos="fade-right"
                      data-aos-offset="160"
                      data-aos-duration="800"
                      data-aos-easing="ease-out"
                    >
                      <GoPrimitiveDot className="my-auto" />{" "}
                      <span className="my-auto"> Mutual funds</span>
                    </p>
                    <p
                      className="flex flex-row text-sm pt-1"
                      data-aos="fade-right"
                      data-aos-offset="170"
                      data-aos-duration="800"
                      data-aos-easing="ease-out"
                    >
                      <GoPrimitiveDot className="my-auto" />{" "}
                      <span className="my-auto"> Mutual funds</span>
                    </p>
                    <p
                      className="flex flex-row text-sm pt-1"
                      data-aos="fade-right"
                      data-aos-offset="180"
                      data-aos-duration="800"
                      data-aos-easing="ease-out"
                    >
                      <GoPrimitiveDot className="my-auto" />{" "}
                      <span className="my-auto"> Mutual funds</span>
                    </p>
                    <p
                      className="flex flex-row text-sm pt-1"
                      data-aos="fade-right"
                      data-aos-offset="190"
                      data-aos-duration="800"
                      data-aos-easing="ease-out"
                    >
                      <GoPrimitiveDot className="my-auto" />{" "}
                      <span className="my-auto"> Mutual funds</span>
                    </p>
                  </div>
                  <div className="pl-20 xsm:pl-0 sm:pl-0 xsm:pt-5 sm:pt-5">
                    <p
                      className="mb-2"
                      data-aos="fade-right"
                      data-aos-offset="150"
                      data-aos-duration="800"
                      data-aos-easing="ease-out"
                    >
                      1. Qualified institutional buyers (QIB) QIB portion which
                      comprises
                    </p>
                    <p
                      className="flex flex-row text-sm pt-1"
                      data-aos="fade-right"
                      data-aos-offset="160"
                      data-aos-duration="800"
                      data-aos-easing="ease-out"
                    >
                      <GoPrimitiveDot className="my-auto" />{" "}
                      <span className="my-auto"> Mutual funds</span>
                    </p>
                    <p
                      className="flex flex-row text-sm pt-1"
                      data-aos="fade-right"
                      data-aos-offset="170"
                      data-aos-duration="800"
                      data-aos-easing="ease-out"
                    >
                      <GoPrimitiveDot className="my-auto" />{" "}
                      <span className="my-auto"> Mutual funds</span>
                    </p>
                    <p
                      className="flex flex-row text-sm pt-1"
                      data-aos="fade-right"
                      data-aos-offset="180"
                      data-aos-duration="800"
                      data-aos-easing="ease-out"
                    >
                      <GoPrimitiveDot className="my-auto" />{" "}
                      <span className="my-auto"> Mutual funds</span>
                    </p>
                    <p
                      className="flex flex-row text-sm pt-1"
                      data-aos="fade-right"
                      data-aos-offset="190"
                      data-aos-duration="800"
                      data-aos-easing="ease-out"
                    >
                      <GoPrimitiveDot className="my-auto" />{" "}
                      <span className="my-auto"> Mutual funds</span>
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
export default IPO2;
