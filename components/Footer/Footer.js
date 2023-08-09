import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin, SlLocationPin } from "react-icons/sl";
import Ksllogo from "../../public/assets/Logo/ksl-logo.png";

function Footer() {
  return (
    <>
      <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80 bg-ksl_light_red_200 py-10 md:footer-bg mdl:footer-bg xl:footer-bg">
        <div className="flex flex-row xsm:flex-col sm:flex-col">
          <div className="flex flex-col">
            <Link legacyBehavior href="/">
              <Image src={Ksllogo} alt="ksllogo" className="w-32 h-auto" />
            </Link>
            <p className="py-5 font-lato font-medium text-base text-start">
              Kabir Securities Limited (popularly known as “KSL”) is one of the
              renowned brokerage houses in the capital market of Bangladesh.
            </p>
            <div className="flex flex-row">
              <Link href="/" className="p-2 border rounded-3xl bg-[#3B5998]">
                <FiFacebook className="text-xl text-white" />
              </Link>
              <Link
                href="/"
                className="p-2 border rounded-3xl bg-[#26A6D1] mx-2"
              >
                <BsTwitter className="text-xl text-white" />
              </Link>
              <Link href="/" className="p-2 border rounded-3xl bg-[#0E76A8]">
                <SlSocialLinkedin className="text-xl text-white" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 xsm:grid-cols-2 sm:grid-cols-2 xsm:gap-2 sm:gap-2 xsm:pt-10 sm:pt-5 gap-4">
            <div className="flex flex-col">
              <div className="border-l-4 rounded-t-lg border-ksl_dark_red pl-2">
                <p className="text-text_18 font-lato font-medium">Service</p>
              </div>
              <div className="flex flex-col pl-4 py-5">
                <p className="py-2">Graphic Designe</p>
                <p className="py-2">Web Developement</p>
                <p className="py-2">Engineering</p>
                <p className="py-2">Marketing</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="border-l-4 rounded-t-lg border-ksl_dark_red pl-2">
                <p className="text-text_18 font-lato font-medium">Resources</p>
              </div>
              <div className="flex flex-col pl-4 py-5">
                <p className="py-2">Virtual Assistants</p>
                <p className="py-2">Accountants</p>
                <p className="py-2">Bookkeepers</p>
                <p className="py-2">Free trial</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="border-l-4 rounded-t-lg border-ksl_dark_red pl-2">
                <p className="text-text_18 font-lato font-medium">Company</p>
              </div>
              <div className="flex flex-col pl-4 py-5">
                <p className="py-2">Patnerships</p>
                <p className="py-2">Terms of use</p>
                <p className="py-2">Privacy</p>
                <p className="py-2">Sitemap</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="border-l-4 rounded-t-lg border-ksl_dark_red pl-2">
                <p className="text-text_18 font-lato font-medium">
                  Get in touch
                </p>
              </div>
              <div className="flex flex-col pl-4 py-5">
                <p className="flex flex-row py-2">
                  <span>
                    <SlLocationPin className="text-xl " />
                  </span>
                  <span className="pl-2">
                    Forum Central (4th Floor) 21/22 M. M. Ali Road Golpahar
                    Circle, Chittagong
                  </span>
                </p>
                <p className="flex flex-row py-2">
                  <span>
                    <BsTelephone className="text-xl " />
                  </span>
                  <span className="pl-2">+880241355771-74</span>
                </p>
                <p className="flex flex-row py-2">
                  <span>
                    <GoMail className="text-xl " />
                  </span>
                  <span className="pl-2">info@kslbd.ne</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className=" bottom-0 left-0 w-full bg-ksl_dark_red py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white">
            Copyright ©{new Date().getFullYear()} KSLBD All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
