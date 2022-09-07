import { Label, TextInput, Checkbox } from "flowbite-react";
import Logo from "../../assets/white-celerates.svg";
import LinkedIn from "../../assets/linkedin.svg";
import { Link } from "react-router-dom";
import Card from "./style";
import React from "react";
import "./style.css";

const Index = () => {
  return (
    <div className="main-body">
      <div className="z-auto md:container container flex-col relative max-w-full max-h-full h-screen w-screen flex overflow-y-hidden overflow-x-hidden md:h-screen justify-center md:justify-center items-center md:items-center">
        <div className="scale-110 md:max-w-l overflow-hidden md:overflow-y-hidden md:overflow-x-hidden ">
          <img
            src={Logo}
            type="catchphrase"
            alt="banner"
            className="flex relative h-16 mb-8 left-24 md:top-0 md:mb-5 md:left-30 md:pl-6"
          />
          <div className="flex relative md:flex md:relative ">
            <Card style={{ backgroundColor: "#999999" }}>
              <form className=" flex flex-col gap-1 mt-10 ml-10 mr-10 ">
                <div>
                  <div className="mb-2 ">
                    <Label htmlFor="email1" value="Email" />
                  </div>

                  <TextInput
                    className="w-60 flex"
                    id="email1"
                    type="email"
                    placeholder=""
                    required={true}
                  />
                </div>

                <div>
                  <div className="mb-2">
                    <Label htmlFor="password1" value="Password" />
                  </div>
                  <TextInput
                    id="password1"
                    type="password"
                    className="w-60 flex"
                    required={true}
                  />
                </div>
                <div className="md:flex md:relative md:items-center md:pt-1 md:gap-2 md:text-xs mb-2 ">
                  <Checkbox id="remember" />
                  <Label
                    htmlFor="remember"
                    style={{
                      position: "relative",
                    }}
                  >
                    remember me
                  </Label>
                </div>
                <div className="pl-2 md:flex md:left-16 md:pl-5 md:w-40 md:text-sm md:relative hover:underline decoration-dotted decoration-2 underline-offset-4">
                  <Link to="/" className="md:flex md:text-sm">
                    forgot your password?
                  </Link>
                </div>
                <div className="mt-2 md:flex md:relative md:mt-2 md:left-24 md:pl-1">
                  <button
                    type="submit"
                    className="text-white bg-slate-800 border-slate-800 border-solid pt-1 pb-1 pl-8 pr-8"
                    style={{
                      borderRadius: "99px",
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>
              <p className="mb-1 md:pt-1"> or </p>
              <div className="md:flex md:relative md:gap-1 md:mt-1 md:mb-3 md:left-16 md:pl-1">
                <button
                  type="submit"
                  style={{
                    color: "white",
                    paddingTop: "0.1rem",
                    paddingBottom: "0.1rem",
                    border: "1px solid #152238",
                    backgroundColor: "#152238",
                    borderRadius: "99px",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                  }}
                >
                  <div className="flex relative">
                    <img src={LinkedIn} type="catchphrase" alt="banner" />
                    <p className="pl-4">Sign In with LinkedIn</p>
                  </div>
                </button>
              </div>
              <div className="flex relative flex-col mt-4 md:flex md:flex-col gap-1 md:mt-2 mb-3">
                <p className="pr-40 pl-10 md:left-0 md:pr-40 text-xs md:flex md:text-sm md:mt-1 md:pl-10">
                  Don't have account?
                  <a
                    href="/"
                    className="relative left-28 md:text-sm hover:underline decoration-dotted decoration-1 underline-offset-2"
                  >
                    Register
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
        <footer>
          <p className="flex relative top-16 text-white md:top-14">
            Celerates 2022
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
