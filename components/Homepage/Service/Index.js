import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import { BsFillBagCheckFill } from "react-icons/bs";
import IPO from "../../../public/assets/Homepage/Service/ipo.png";
import Email from "../../../public/assets/Homepage/Service/email.png";
import Phone from "../../../public/assets/Homepage/Service/phone.png";
import Team from "../../../public/assets/Homepage/Service/team.png";
import Serviceasset1 from "../../../public/assets/Homepage/Service/service-asset.png";
import Serviceasset2 from "../../../public/assets/Homepage/Service/serviceasset2.png";
import Moneyasset from "../../../public/assets/Homepage/Service/moneyasset.png";
import ninja from "../../../public/assets/Homepage/Service/ninja.png";
import payment from "../../../public/assets/Homepage/Service/payment.png";
import atm from "../../../public/assets/Homepage/Service/atm.png";
function Index() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="bg-ksl_light_red ">
        <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80">
          <div
            className="text-center pt-10 pb-14 xsm:pb-5 sm:pb-5 "
            data-aos="zoom-in"
            data-aos-offset="150"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            <p className="text-text_41 font-lato font-bold text-ksl_dark_black xsm:text-2xl sm:text-2xl mx-auto ">
              We Provide Online Service For Our Customer Value
            </p>
          </div>
          <div className="xsm:hidden sm:hidden block">
            <div className="flex justify-between ">
              <div className="flex flex-col w-1/2">
                <div className="flex flex-row bg-white p-3 rounded-xl ">
                  <div className="">
                    <Image
                      src={Email}
                      className="w-40 h-auto"
                      data-aos="fade-up"
                      data-aos-offset="120"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    />
                  </div>
                  <div className="px-5">
                    <p
                      className="text-text_18 font-semibold"
                      data-aos="fade-left"
                      data-aos-offset="150"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      Online BO Account
                    </p>
                    <p
                      className="text-base font-mulish tracking-tight text-justify text-ksl_dark_gray xsm:text-start sm:text-start"
                      data-aos="fade-in-up"
                      data-aos-offset="160"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      Start trading immediately with our easy signup process.
                      Open your B/O account from anywhere at anytime. You will
                      have access to in-depth research & information for
                      effective decision making. Sign up for a online BO account
                      with Kabir Securities Limited.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row bg-white p-3 rounded-xl my-5">
                  <div className="">
                    <Image
                      src={IPO}
                      className="w-20 h-auto"
                      data-aos="fade-up"
                      data-aos-offset="140"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    />
                  </div>
                  <div className="px-5">
                    <p
                      className="text-text_18 font-semibold"
                      data-aos="fade-left"
                      data-aos-offset="150"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      One Stop IPO Solution
                    </p>
                    <p
                      className="text-base font-mulish tracking-tight text-justify text-ksl_dark_gray xsm:text-start sm:text-start"
                      data-aos="fade-in-up"
                      data-aos-offset="180"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      We developed a prompt service system from where Our
                      clients can apply in IPO from their residence without
                      taking any hassle.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row bg-white p-3 rounded-lg">
                  <div>
                    <Image
                      src={Email}
                      className="w-48 h-auto"
                      data-aos="fade-up"
                      data-aos-offset="160"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    />
                  </div>
                  <div className="px-5">
                    <p
                      className="text-text_18 font-semibold"
                      data-aos-offset="150"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      Trade Confirmation
                    </p>
                    <p
                      className="text-base font-mulish tracking-tight text-justify text-ksl_dark_gray xsm:text-start sm:text-start"
                      data-aos="fade-in-up"
                      data-aos-offset="180"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      Beside transmission of hard copy of trade confirmation, we
                      send trade confirmation through email and sms. We also
                      send Portfolio to each our client every trading day. We
                      also send money deposit and withdrawal notification to our
                      valued clients when the transaction incurred. Thus we
                      secured the financial transaction of our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-5"></div>
              <div className="w-1/2">
                <Image
                  src={Serviceasset1}
                  className="w-auto "
                  data-aos="fade-up"
                  data-aos-offset="250"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                />
              </div>
            </div>
            <div className="pt-5">
              <div className="flex flex-row bg-white p-3 rounded-xl">
                <div>
                  <Image
                    src={Phone}
                    className="w-12 h-auto"
                    data-aos="fade-up"
                    data-aos-offset="180"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  />
                </div>
                <div className="px-5">
                  <p
                    className="text-text_18 font-semibold"
                    data-aos="fade-left"
                    data-aos-offset="150"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    Single Hotline Number For Telephone Trade
                  </p>
                  <p
                    className="text-base font-mulish tracking-tight text-ksl_dark_gray text-justify xsm:text-start sm:text-start"
                    data-aos="fade-in-up"
                    data-aos-offset="180"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    Our hotline number helps our clients to reach directly to
                    his favorite relationship manager. We record all telephonic
                    order of our clients to avoid any kind of dispute and
                    misunderstanding.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-5 ">
              <div className="flex flex-row bg-white p-3 rounded-lg">
                <div>
                  <Image
                    src={Team}
                    className="w-16 h-auto"
                    data-aos="fade-up"
                    data-aos-offset="160"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  />
                </div>
                <div className="pl-6 pr-5">
                  <p
                    className="text-text_18 font-medium"
                    data-aos="fade-left"
                    data-aos-offset="150"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    Research Team
                  </p>
                  <p
                    className="text-base font-mulish text-justify text-ksl_dark_gray xsm:text-start sm:text-start"
                    data-aos="fade-in-up"
                    data-aos-offset="180"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    We have the best research & innovation team
                    (360*+innovation) & highly skilled business analytics team
                    who provide professional service to our clients. They are
                    dedicated to the fundamental analysis and technical analysis
                    of various listed companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xsm:block sm:block pt-10">
            <div className="flex flex-col">
              <div className="flex flex-col w-full">
                <div className="flex flex-col bg-white p-6 rounded-lg mb-5">
                  <div className="pb-3">
                    <Image
                      src={Email}
                      width={30}
                      className="w-auto h-auto"
                      data-aos="fade-right"
                      data-aos-offset="120"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    />
                  </div>
                  <div>
                    <p
                      className="text-text_18 font-medium"
                      data-aos="fade-left"
                      data-aos-offset="150"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      Online BO Account
                    </p>
                    <p
                      className="text-base font-mulish text-justify xsm:text-start sm:text-start"
                      data-aos="fade-in-up"
                      data-aos-offset="160"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      Start trading immediately with our easy signup process.
                      Open your B/O account from anywhere at anytime. You will
                      have access to in-depth research & information for
                      effective decision making. Sign up for a online BO account
                      with Kabir Securities Limited.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col bg-white p-6 rounded-lg mb-5">
                  <div className="pb-3">
                    <Image
                      src={IPO}
                      width={30}
                      className="w-auto h-auto"
                      data-aos="fade-right"
                      data-aos-offset="140"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    />
                  </div>
                  <div>
                    <p
                      className="text-text_18 font-medium"
                      data-aos="fade-left"
                      data-aos-offset="150"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      One Stop IPO Solution
                    </p>
                    <p
                      className="text-base font-mulish text-justify xsm:text-start sm:text-start"
                      data-aos="fade-in-up"
                      data-aos-offset="180"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      We developed a prompt service system from where Our
                      clients can apply in IPO from their residence without
                      taking any hassle.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col bg-white p-6 rounded-lg mb-5">
                  <div className="pb-3">
                    <Image
                      src={Email}
                      width={30}
                      className="w-auto h-auto"
                      data-aos="fade-right"
                      data-aos-offset="160"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    />
                  </div>
                  <div>
                    <p
                      className="text-text_18 font-medium"
                      data-aos-offset="150"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      Trade Confirmation
                    </p>
                    <p
                      className="text-base font-mulish text-justify xsm:text-start sm:text-start"
                      data-aos="fade-in-up"
                      data-aos-offset="180"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      Beside transmission of hard copy of trade confirmation, we
                      send trade confirmation through email and sms. We also
                      send Portfolio to each our client every trading day. We
                      also send money deposit and withdrawal notification to our
                      valued clients when the transaction incurred. Thus we
                      secured the financial transaction of our clients.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col bg-white p-6 rounded-lg mb-5">
                  <div className="pb-3">
                    <Image
                      src={Phone}
                      width={30}
                      className="w-auto h-auto"
                      data-aos="fade-right"
                      data-aos-offset="180"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    />
                  </div>
                  <div>
                    <p
                      className="text-text_18 font-medium"
                      data-aos="fade-left"
                      data-aos-offset="150"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      Single Hotline Number For Telephone Trade
                    </p>
                    <p
                      className="text-base font-mulish text-justify xsm:text-start sm:text-start"
                      data-aos="fade-in-up"
                      data-aos-offset="180"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      Our hotline number helps our clients to reach directly to
                      his favorite relationship manager. We record all
                      telephonic order of our clients to avoid any kind of
                      dispute and misunderstanding.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col bg-white p-6 rounded-lg mb-5">
                  <div className="pb-3">
                    <Image
                      src={Team}
                      width={30}
                      className="w-auto h-auto"
                      data-aos="fade-right"
                      data-aos-offset="160"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    />
                  </div>
                  <div>
                    <p
                      className="text-text_18 font-medium"
                      data-aos="fade-left"
                      data-aos-offset="150"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      Research Team
                    </p>
                    <p
                      className="text-base font-mulish text-justify text-ksl_dark_gray xsm:text-start sm:text-start"
                      data-aos="fade-in-up"
                      data-aos-offset="180"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      We have the best research & innovation team
                      (360*+innovation) & highly skilled business analytics team
                      who provide professional service to our clients. They are
                      dedicated to the fundamental analysis and technical
                      analysis of various listed companies.
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    src={Serviceasset1}
                    className="w-auto"
                    data-aos="fade-up"
                    data-aos-offset="250"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="flex justify-between xsm:flex-col sm:flex-col">
              <div className=" w-3/5 xsm:w-full sm:w-full p-6">
                <p
                  className="text-2xl text-ksl_dark_black font-bold pb-5"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  Trading
                </p>
                <p
                  className="text-base font-mulish text-justify text-ksl_dark_gray xsm:text-start sm:text-start"
                  data-aos="fade-in-up"
                  data-aos-offset="220"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  Brokerage services on securities being traded on the
                  Chittagong Stock Exchange Limited. We ensures sound trading
                  environment at it’s trading premises. Kabir Securities Limited
                  has trained professional executives to execute the buy/sale
                  order in a prompt manner. Clients enjoy the luxury of:
                </p>
                <div className="flex flex-col">
                  <p
                    className="flex flex-row pt-2"
                    data-aos="zoom-in-left"
                    data-aos-offset="160"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <BsFillBagCheckFill className="my-auto text-ksl_dark_red" />
                    <span className="text-base font-mulish pl-2">
                      Internet Order/Trading
                    </span>
                  </p>
                  <p
                    className="flex flex-row pt-1"
                    data-aos="zoom-in-left"
                    data-aos-offset="170"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <BsFillBagCheckFill className="my-auto text-ksl_dark_red" />
                    <span className="text-base font-mulish pl-2">Floor Order/Trading</span>
                  </p>
                  <p
                    className="flex flex-row pt-1"
                    data-aos="zoom-in-left"
                    data-aos-offset="180"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <BsFillBagCheckFill className="my-auto text-ksl_dark_red" />
                    <span className="text-base font-mulish pl-2">Floor Order/Trading</span>
                  </p>
                  <p
                    className="flex flex-row pt-1"
                    data-aos="zoom-in-left"
                    data-aos-offset="190"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <BsFillBagCheckFill className="my-auto text-ksl_dark_red" />
                    <span className="text-base font-mulish pl-2">
                      E-mail/SMS Order/Trading
                    </span>
                  </p>
                  <p
                    className="pt-5 text-base font-mulish text-ksl_dark_gray"
                    data-aos="fade-in-up"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    ensures a standby help-desk or information team at all of
                    its branches.
                  </p>
                </div>
              </div>
              <div className=" w-2/5 xsm:w-full sm:w-full">
                <Image
                  src={Serviceasset2}
                  className="w-auto h-auto"
                  data-aos="fade-up"
                  data-aos-offset="250"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                />
              </div>
            </div>
          </div>
          <div className="py-5 ">
            <div className="flex flex-row xsm:flex-col sm:flex-col bg-white p-6 rounded-lg">
              <div className="pb-3">
                <Image
                  src={Email}
                  className="w-20 xsm:w-10 sm:w-10 h-auto"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                />
              </div>
              <div className="px-5 xsm:px-0 sm:px-0">
                <p
                  className="text-text_18 font-medium"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  Web and E-portal
                </p>
                <p
                  className="text-base font-mulish text-justify text-ksl_dark_gray xsm:text-start sm:text-start"
                  data-aos="fade-in-up"
                  data-aos-offset="220"
                  data-aos-duration="1200"
                  data-aos-easing="ease-out"
                >
                  We have separate e-portal system for our clients where our
                  honorable clients can check their Financial Ledger Statement,
                  Portfolio Statement, Trade Confirmation Notes for any
                  historical date or period. Through this e-portal system
                  investors can also place their fund requisition which is
                  cleared within a day through Electronic Fund transfer (EFT)
                  System.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-20 xsm:pt-5 sm:pt-10">
            <div className="flex justify-between xsm:flex-col sm:flex-col ">
              <div className="w-4/12 xsm:w-full sm:w-full">
                <Image
                  src={Moneyasset}
                  className="w-auto"
                  data-aos="fade-up"
                  data-aos-offset="250"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                />
              </div>
              <div className="flex flex-col w-3/5 xsm:w-full sm:w-full xsm:pt-5">
                <p
                  className="text-3xl font-semibold text-ksl_dark_black pb-5"
                  data-aos="fade-left"
                  data-aos-offset="250"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  Ninja
                </p>
                <div className="flex flex-row xsm:flex-col sm:flex-col bg-white p-6 rounded-lg">
                  <div className="pb-3">
                    <Image
                      src={ninja}
                      className="w-60 xsm:w-auto h-auto"
                      data-aos="fade-up"
                      data-aos-offset="220"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    />
                  </div>
                  <div className="px-5 xsm:px-0 sm:px-0">
                    <p
                      className="text-text_18 font-semibold uppercase pb-2"
                      data-aos="zoom-in-right"
                      data-aos-offset="250"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out"
                    >
                      AI TRADING CHATBOT NINJA -
                    </p>
                    <p
                      className="text-base font-mulish text-justify text-ksl_dark_gray xsm:text-start sm:text-start"
                      data-aos="fade-in-up"
                      data-aos-offset="230"
                      data-aos-duration="1200"
                      data-aos-easing="ease-out"
                    >
                      “Ninja” helps our clients easily access to all Stock
                      Market services. Makes it possible for our clients to
                      trade in the DSE and CSE from anywhere, at any time. All
                      BO Account services, Instant portfolio on client demand,
                      current and upcoming IPO information, individual
                      script/share prices, fundamental data, fund deposits and
                      withdrawals, etc. It provides all basic information of the
                      stock market to new & existing customers.“Ninja” Chatbot
                      Features to deliver expectational customer
                      services,monitoring client inquiries, response times,
                      satisfaction levels, and other metrics.
                      <br />
                      24/7 availability
                      <br />
                      Superfast response and
                      <br />
                      Personalized solution with natural language processing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-20 xsm:py-5 sm:py-5">
            <div className="flex justify-between xsm:flex-col sm:flex-col">
              <div className="flex flex-col">
                <p
                  className="text-3xl font-semibold text-ksl_dark_black pb-5"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  Fund Withdrawal
                </p>
                <div className="py-5 ">
                  <div className="flex flex-row xsm:flex-col sm:flex-col bg-white p-6 rounded-lg">
                    <div className="pb-3">
                      <Image
                        src={atm}
                        className="w-32 xsm:w-20 sm:w-20 h-auto"
                        data-aos="fade-up"
                        data-aos-offset="220"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out"
                      />
                    </div>
                    <div className="px-5 xsm:px-0 sm:px-0">
                      <p
                        className="text-text_18 font-medium"
                        data-aos="zoom-in-right"
                        data-aos-offset="250"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out"
                      >
                        Electronic Fund transfer System (EFTN) & (BEFTN)
                      </p>
                      <p
                        className="text-base font-mulish text-justify text-ksl_dark_gray xsm:text-start sm:text-start"
                        data-aos="fade-in-up"
                        data-aos-offset="230"
                        data-aos-duration="1200"
                        data-aos-easing="ease-out"
                      >
                        We have separate e-portal system for our clients where
                        Our EFTN System helps our clients to withdraw their
                        balance on time. The system is totally automated and
                        secured so that our clients feel relax about their on
                        demand fund no matter how far they are from our office.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-5 xsm:hidden sm:hidden"></div>
              <div className="flex flex-col">
                <p
                  className="text-3xl font-semibold text-ksl_dark_black pb-5"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  Fund Deposit
                </p>
                <div className="py-5 ">
                  <div className="flex flex-row xsm:flex-col sm:flex-col bg-white p-6 rounded-lg">
                    <div className="pb-3">
                      <Image
                        src={payment}
                        className="w-32 xsm:w-20 sm:w-20 h-auto"
                        data-aos="fade-up"
                        data-aos-offset="220"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out"
                      />
                    </div>
                    <div className="px-5 xsm:px-0 sm:px-0">
                      <p
                        className="text-text_18 font-medium"
                        data-aos="zoom-in-right"
                        data-aos-offset="250"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out"
                      >
                        Electronic Fund transfer System (EFTN) & (BEFTN)
                      </p>
                      <p
                        className="text-base font-mulish text-justify text-ksl_dark_gray xsm:text-start sm:text-start"
                        data-aos="fade-in-up"
                        data-aos-offset="230"
                        data-aos-duration="1200"
                        data-aos-easing="ease-out"
                      >
                        Clients of KSL now can deposit in their portfolio
                        account by means of BEFTN. Clients don’t need to come to
                        bank for cheque or cash deposit physically. All a client
                        has to do is instruct his bank to transfer/deposit fund
                        to the bank accounts of Kabir Securities Limited.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
