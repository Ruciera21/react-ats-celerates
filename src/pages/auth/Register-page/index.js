import { Label, TextInput } from "flowbite-react";
import Logo from "../../../assets/logo-celerates.svg";
import { Link } from "react-router-dom";
import Card from "./style";
import React from "react";
import "./style.css";

const Index = () => {
  return (
    <div className="rendering-pixelated main-body">
      <div className="z-auto md:container container flex-col relative max-w-full max-h-full h-screen w-screen flex overflow-y-hidden overflow-x-hidden md:h-screen justify-center md:justify-center items-center md:items-center">
        <div className="scale-110 md:w-96 md:max-w-xl overflow-hidden md:overflow-y-hidden md:overflow-x-hidden ">
          <Link to="/">
            <img
              src={Logo}
              type="catchphrase"
              alt="banner"
              className="flex relative h-16 mb-8 md:top-0 md:mb-5 md:left-28 md:pl-3 left-40"
            />
          </Link>
          <div className="flex relative md:flex md:relative ">
            <Card style={{ backgroundColor: "#999999" }}>
              <form className="flex flex-col gap-0 mt-2 ml-10 mr-10 md:w-60 md:gap-0 md:mt-2 md:ml-10 md:mr-10 ">
                <div>
                  <div className="mb-2">
                    <Label htmlFor="username1" value="Name" />
                  </div>
                  <TextInput
                    id="username1"
                    type="username"
                    className="w-60 flex relative"
                    required={true}
                  />
                </div>

                <div>
                  <div className="mb-2 ">
                    <Label htmlFor="email1" value="Email" />
                  </div>

                  <TextInput
                    className="w-60 flex relative"
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
                    className="w-60 flex relative"
                    required={true}
                  />
                </div>

                <div>
                  <div className="mb-2">
                    <Label
                      htmlFor="confirmpassword1"
                      value="Confirm Password"
                    />
                  </div>
                  <TextInput
                    id="password2"
                    type="password"
                    className="w-60 flex relative"
                    required={true}
                  />
                </div>

                <div className="mt-4 mb-2 md:flex md:relative md:mt-1 md:left-16">
                  <button
                    type="submit"
                    className="text-white bg-slate-800 border-slate-800 border-solid pt-1 pb-1 pl-8 pr-8"
                    style={{
                      borderRadius: "99px",
                    }}
                  >
                    Register
                  </button>
                </div>
                <div className="mb-8 mt-2 md:flex md:w-96 md:right-12 md:text-sm md:relative">
                  <p className="relative flex left-16 pr-40 pl-1">
                    Already have an account?
                    <Link
                      to="/login"
                      className="relative left-2 md:text-sm hover:underline decoration-dotted decoration-1 underline-offset-2"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
        <footer>
          <p
            className="flex relative top-16 md:top-14"
            style={{ color: "#152238" }}
          >
            Celerates 2022
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
