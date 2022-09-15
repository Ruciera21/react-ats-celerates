import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-celerates.svg";
import LogoWhite from "../../assets/white-celerates.svg";
import Dropdown from "./button";
import "./style.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-2xl">
      <div className="flex  items-center font-[Poppins] font-medium justify-around">
        <div className="z-50 md:w-auto w-full h-max top-0 flex justify-between">
          <div className="image-wrapper flex relative pt-4 px-4 mr-96 right-16 md:bg-white">
            <img
              src={Logo}
              alt="celerates-logo"
              className="hidden md:flex md:relative right-14 bottom-2 h-14 md:cursor-pointer md:right-0 image1"
            />
          </div>
          <div className="image-wrapper flex md:hidden py-10 px-3">
            <img
              src={LogoWhite}
              alt="celerates-logo"
              className="absolute md:hidden top-3 left-5 bottom-2 h-14 md:cursor-pointer md:right-0 image2 "
            />
          </div>
          <div
            className="text-3xl flex relative top-7 mr-8 md:hidden text-white "
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <Dropdown />
        <ul className="md:flex md:absolute hidden z-50 uppercase items-right gap-8 text-white">
          <li>
            <Link to="/" className="py-3 px-4 inline-flex">
              Careers
            </Link>
          </li>

          <li>
            <Link to="/" className="py-3 px-4 inline-flex">
              Applications
            </Link>
          </li>
        </ul>
        {/* mobile view */}

        <ul
          className={`
          text-3xl flex-row absolute md:hidden h-max top-0 overflow-y-auto pt-20 py-6 pl-4
        duration-500 text-white bg-slate-900 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-8 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="py-8 px-3 inline-block">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/" className="py-8 px-3 inline-block">
              Applications
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
