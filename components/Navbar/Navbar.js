import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";
import Ksllogo from "../../public/assets/Logo/ksl-logo.png";
import { useRouter } from "next/router";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter;

  // Define styles for the active link
  const activeLinkStyle = "text-neocon_green font-bold";

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white backdrop-blur-lg">
      <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80 mx-auto py-5">
        <div className="flex justify-between ">
          <div className="flex items-center my-auto w-auto xsm:w-full cursor-pointer">
            <Link legacyBehavior href="/">
              <Image
                src={Ksllogo}
                alt="ksllogo"
                className="w-36 xsm:w-auto sm:w-auto h-auto"
              />
            </Link>
          </div>
          <div className="xsm:hidden sm:hidden md:hidden mdl:hidden block my-auto w-auto">
            <div className="flex flex-row ">
              <Link legacyBehavior href="/company">
                <a className="p-2 mx-2 text-center text-text_15 text-ksl_text_dark_gray font-mulish font-medium hover:text-ksl_dark_red duration-700">
                  Company
                </a>
              </Link>
              <Link legacyBehavior href="/digital-booth">
                <a className="p-2 mx-2 text-center text-text_15 text-ksl_text_dark_gray font-mulish font-medium hover:text-ksl_dark_red duration-700">
                  Digital Booth
                </a>
              </Link>
              <Link legacyBehavior href="/contact-us">
                <a className="p-2 mx-2 text-center text-text_15 text-ksl_text_dark_gray font-mulish font-medium hover:text-ksl_dark_red duration-700">
                  Contact Us
                </a>
              </Link>
              <Link legacyBehavior href="/blog">
                <a className="p-2 mx-2 text-center text-text_15 text-ksl_text_dark_gray font-mulish font-medium hover:text-ksl_dark_red duration-700">
                  Blog
                </a>
              </Link>
              {/* <Link legacyBehavior href="/stocks">
                <a className="p-2 mx-2 text-center text-text_15 text-ksl_text_dark_gray font-mulish font-medium hover:text-ksl_dark_red duration-700">
                  Stocks
                </a>
              </Link> */}
              <Link legacyBehavior href="/media">
                <a className="p-2 mx-2 text-center text-text_15 text-ksl_text_dark_gray font-mulish font-medium hover:text-ksl_dark_red duration-700">
                  Media
                </a>
              </Link>
              <Link legacyBehavior href="/career">
                <a className="p-2 mx-2 text-center text-text_15 text-ksl_text_dark_gray font-mulish font-medium hover:text-ksl_dark_red duration-700">
                  Career
                </a>
              </Link>
            </div>
          </div>
          <div className="xsm:hidden sm:hidden flex flex-row justify-end my-auto w-auto md:w-full mdl:w-full md:pr-5 mdl:pr-5">
            <Link href="/" className="mx-10 my-auto">
              <button className="py-2 px-5 my-auto rounded-3xl uppercase bg-ksl_dark_red text-ksl_white hover:bg-ksl_dark_red/90">
                Portal
              </button>
            </Link>
            <Link href="/partner-with-us" className="my-auto">
              <button className="border py-2 px-4 my-auto rounded-3xl text-ksl_dark_red border-ksl_dark_red hover:bg-ksl_dark_red hover:text-white duration-700">
                Partner with us
              </button>
            </Link>
          </div>

          {/* mobile responsive*/}
          <button
            onClick={handleOpenMenu}
            className="xsm:block sm:block md:block mdl:block xl:hidden hidden"
          >
            <CgMenuRight className="text-2xl text-ksl_dark_black " />
          </button>
          <div
            className={`fixed top-0 left-0 w-full bg-white z-50 ${
              isOpen ? "visible" : "invisible"
            }`}
          >
            <div className="xsm:px-10 flex flex-col items-center justify-center bg-white min-h-screen content-center relative">
              <div className="flex flex-col justify-center items-center w-full">
                <div className="absolute top-10">
                  <button onClick={handleCloseMenu}>
                    <IoIosArrowUp className="text-5xl text-ksl_dark_red" />
                  </button>
                </div>
                <div className="flex flex-col text-center font-mulish font-medium text-lg">
                  <Link href="/company" className="py-2">
                    Company
                  </Link>
                  <Link href="/digital-booth" className="py-2">
                    Digital Booth
                  </Link>
                  <Link href="/contact-us" className="py-2">
                    Contact Us
                  </Link>
                  <Link href="/blog" className="py-2">
                    Blog
                  </Link>
                  <Link href="/media" className="py-2">
                    Media
                  </Link>
                  <Link href="/career" className="py-2">
                    Career
                  </Link>
                </div>
                <div className="xsm:block sm:block md:hidden mdl:hidden">
                  <div className=" flex flex-col text-center font-mulish font-medium text-lg">
                    <Link href="/" className="py-2">
                      <button className="border text-white bg-ksl_dark_red px-6 py-2 rounded-3xl">
                        Portal
                      </button>
                    </Link>
                    <Link href="/partner-with-us" className="py-2">
                      <button className="border text-ksl_dark_red border-ksl_dark_red bg-white px-6 py-2 rounded-3xl">
                        Pair with us
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
