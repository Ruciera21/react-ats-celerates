import { Label, TextInput, Checkbox } from "flowbite-react";
import Logo from "../../assets/white-celerates.svg";
import LinkedIn from "../../assets/linkedin.svg";
import { Link } from "react-router-dom";
import Card from "./style";
import React from "react";

const Index = () => {
  return (
    <div style={{ backgroundColor: "#152238" }}>
      <div className="md:container flex-col relative h-screen w-screen md:left-10 flex overflow-x-hidden md:h-screen justify-center md:justify-center items-center md:items-center">
        <div className=" md:max-w-l overflow-hidden md:overflow-x-hidden ">
          <img
            src={Logo}
            type="catchphrase"
            alt="banner"
            style={{
              display: "flex",
              height: "64px",
              position: "relative",
              marginBottom: "4vh",
              left: "35%",
            }}
          />
          <div
            className="scale-75 md:scale-100"
            style={{ position: "relative" }}
          >
            <Card style={{ backgroundColor: "#999999" }}>
              <form className=" flex flex-col gap-1 mt-10 ml-10 mr-10 ">
                <div>
                  <div className="mb-2 ">
                    <Label htmlFor="email1" value="Email" />
                  </div>

                  <TextInput
                    style={{
                      width: "50vh",
                      padding: "0.5rem 1rem 0.5rem 1rem",
                    }}
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
                    style={{
                      width: "50vh",
                      padding: "0.5rem 1rem 0.5rem 1rem",
                    }}
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
                <div className="pl-2 md:flex md:left-24 md:pl-1 md:w-36 md:text-sm md:relative hover:underline decoration-dotted decoration-2 underline-offset-4">
                  <Link to="/" className="md:flex md:text-sm">
                    forgot your password?
                  </Link>
                </div>
                <div className="mt-2 md:flex md:relative md:mt-2 md:left-28 md:pl-1">
                  <button
                    type="submit"
                    style={{
                      color: "white",
                      paddingTop: "0.1rem",
                      paddingBottom: "0.1rem",
                      border: "1px solid #152238",
                      backgroundColor: "#152238",
                      borderRadius: "99px",
                      paddingLeft: "2.2rem",
                      paddingRight: "2.2rem",
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>
              <p className="mb-1 md:pt-1 md:pl-1"> or </p>
              <div className="md:flex md:relative md:gap-1 md:mt-1 md:mb-3 md:left-20 md:pl-2">
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
                <p className="pr-40 text-xs md:flex md:text-sm md:mt-1 md:pl-12">
                  Don't have account?
                  <a
                    href="/"
                    className="relative left-32 md:text-sm hover:underline decoration-dotted decoration-1 underline-offset-2"
                  >
                    Register
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
        <footer>
          <p className="flex relative top-24 text-white md:top-16 md:pt-1">
            Celerates 2022
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
