import React from "react";
import HeaderDropdown from "./HeaderDropdown";
import { behance_logo } from "../DataBehance";
import { FaBell } from "react-icons/fa";
import { adobeLogo } from "../DataBehance";
import { BsFilterLeft } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { CgMenuLeft } from "react-icons/cg";
import { CiImageOn } from "react-icons/ci";
import SearchBar from "./SearchBar";

const openMenu = () => {
  const main_header = document.getElementById("header");
  main_header.classList.toggle("menuopen");
};
const closeMenu = () => {
  openMenu();
};

const Header = () => {
  return (
    <div>
      <header className="header" id="header">
        <div
          id="menu"
          className="menu duration-300 bg-white lg:hidden shadow-lg w-[70%] h-[100%] fixed left-0 top-0 z-20 p-5"
        >
          <div
            className="text-3xl absolute right-3 cursor-pointer text-[#333]"
            onClick={() => closeMenu()}
          >
            <IoClose />
          </div>
          <ul className="">
            <li className="m-3 font-medium text-md">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Discover
              </a>
            </li>
            <li className="m-3 font-medium text-md">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Assets
              </a>
            </li>
            <li className="m-3 font-medium text-md">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Jobs
              </a>
            </li>
            <li className="m-3 font-medium text-md">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Behance <span className="bg-blue-600  text-white py-0 px-2 rounded font-small text-sm h-1 bg-gradient-to-r from-blue-500 to-blue-800" >Pro</span>
              </a>
            </li>
            <li className="m-3 font-medium text-md">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Hire Freelancers
              </a>
            </li>
          </ul>
        </div>

        <div className="border-b fixed w-full top-0 bg-white z-10">
          <div className="container-fluid">
            <div className="top-header py-4 lgpy-3 px-5 border-b border ">
              <div className="navbar flex items-center justify-between">
                <div className="brand-logo flex items-center">
                  <div
                    className="phone-menu pr-3 text-2xl cursor-pointer block lg:hidden"
                    onClick={() => openMenu()}
                  >
                    <CgMenuLeft />
                  </div>
                  <img
                    src={behance_logo}
                    alt={behance_logo}
                    className="w-auto h-4"
                  />
                  <div className="page-links  lg:ml-8 hidden lg:block">
                    <ul className="flex items-center">
                      <li className="mx-3 font-medium text-md active">
                        <HeaderDropdown
                          type1={["Search & Explore", "Curated Galleries"]}
                          type2={[
                            "Best of Behance",
                            "Graphic Design",
                            "Illustration",
                            "Photography",
                            "UI/UX",
                            "3D Art",
                          ]}
                          value={"Explore"}
                        ></HeaderDropdown>
                      </li>
                      <li className="mx-3 font-medium text-md active">
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Assets
                        </a>
                      </li>
                      <li className="mx-3 font-medium text-md active">
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Jobs
                        </a>
                      </li>
                      <li className="mx-3 font-medium text-md active">
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Behance <span className="bg-blue-600  text-white py-0 px-2 rounded font-small text-sm h-1 bg-gradient-to-r from-blue-500 to-blue-800" >PRO</span>
                        </a>
                        <span className="mx-3 text-gray-300 font-small text-xl">
                          {" "}
                          |{" "}
                        </span>
                      </li>
                      <li className="font-medium text-md active">
                        <HeaderDropdown
                          type1={[
                            "Find Creatives",
                            "My Freelance Projects",
                            "New Freelance Projects",
                          ]}
                          type2={[
                            "Graphic Designers",
                            "Brand Designers",
                            "UI/UX Designers",
                            "Illustrations",
                            "Logo Designers",
                          ]}
                          value={"Hire Freelancers"}
                        ></HeaderDropdown>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="aciton-area flex items-center">
                    <div className="mx-4">
                      <FaBell />
                    </div>
                    <div className="login-btn rounded-full border px-4 py-1 border-[#dee8ff] ">
                      <a href="" className="text-[#0057ff] font-medium text-md">
                        Login
                      </a>
                    </div>
                    <div className="login-btn mx-4 rounded-full border px-4 py-1 border-[#dee8ff] bg-[#0057ff]">
                      <a href="" className="text-white font-medium text-md">
                        Sign Up
                      </a>
                    </div>
                    <div className="adobe-btn mx-4 flex items-center hover:opacity-70">
                      <img
                        src={adobeLogo}
                        alt={adobeLogo}
                        className="w-5 h-5"
                      />
                    </div>
                  </div>
                </div>
                <div className="phone-search block lg:hidden cursor-pointer pr-3 text-2xl">
                  <IoSearchSharp />
                </div>
              </div>
            </div>
            <div className="search-area p-5">
              <div className="search-area flex items-center">
                <div className="flex items-center mx-2 py-1 px-6 rounded-full border  border-[#dee8ff] hover:bg-[#f9f9f9]">
                  <BsFilterLeft className="mx-1 text-xl" />{" "}
                  <span className="font-medium text-l py-2 px-2">Filter</span>
                </div>
                <div className="search-box w-full  border-2 rounded-full bg-[#f9f9f9] overflow-hidden flex items-center justify-between">
                  <div className="input-box relative lg:w-full">
                    <SearchBar></SearchBar>
                    <div className="search-icon text-2xl text-[#777] absolute top-[2px] left-4">
                      <IoSearchSharp />
                    </div>
                  </div>
                  <div className="image-search flex items-center my-1 mx-1 px-3 border-2 rounded-full bg-[#ffffff] overflow-hidden text-sm text-inline whitespace-nowrap">
                    <CiImageOn />{" "}
                    <span className="mx-1 my-2 ">Search by image</span>
                  </div>
                </div>
                <div className="sort mx-2 py-1 px-6 rounded-full border  border-[#dee8ff] hover:bg-[#f9f9f9] text-sm font-medium">
                  Sort
                  <HeaderDropdown
                    type1={[
                      "Recommended",
                      "Curated",
                      "Most Appreciated",
                      "Most Viewed",
                      "Most Discussed",
                      "Most Recent",
                    ]}
                    type2={[]}
                    value={"Recommended"}
                  ></HeaderDropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
