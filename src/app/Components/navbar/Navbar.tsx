"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import headerlogo from "../../../assets/HeaderCompany/CompanyLogo.svg";
import burgerMenu from "../../../assets/big.svg";
import Menu from "./Menu";
import Register from "./Register";
import DropDown from "./DropDown";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className=" bg-primary-900 w-full overflow-hidden flex flex-col items-center justify-center text-left text-mini text-base-white font-text-button-semibold-large">
        <div className="self-stretch  flex flex-row lg:py-5 lg:px-40 p-4 items-center lg:justify-center z-[1] border-b-[1px] border-solid border-primary-400">
          <div className="lg:w-[1280px] w-full flex lg:flex-row  py-0 lg:px-8 box-border items-center justify-between">
            <div className="flex lg:flex-row items-center justify-start lg:gap-[64px] ">
              <div className=" relative w-40 h-10 hover:cursor-pointer ">
                <Image
                  alt="company logo"
                  src={headerlogo}
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>

              <div className="hidden lg:flex lg:flex-row items-center justify-start gap-[32px]">
                <Menu />
              </div>
            </div>

            <div
              className="lg:hidden relative w-5 h-5 "
              onClick={() => setOpen(!open)}
            >
              <button className="absolute hover:bg-primary-400 -top-2 bg-transparent left-[calc(50%_-_10px)] rounded-[5px] overflow-hidden flex flex-row items-center justify-center">
                <div className="relative w-5 h-10 overflow-hidden  shrink-0">
                  <Image
                    alt="burgermenu"
                    src={burgerMenu}
                    style={{ objectFit: "cover" }}
                    fill
                  />
                </div>
              </button>
            </div>

            {open ? (
              <AnimatePresence>
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                      },
                      opacity: {
                        duration: 0.25,
                        delay: 0.15,
                      },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.6,
                      },
                      opacity: {
                        duration: 0.25,
                      },
                    },
                  }}
                  className="w-full absolute bg-primary-400 flex items-center justify-center top-[70px] left-0 "
                >
                  <div className=" lg:hidden px-4 mx-auto w-full flex flex-col gap-4 py-4 justify-center ">
                    <Menu />

                    <Register />
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              ""
            )}

            <div className=" hidden lg:flex lg:flex-row   flex-col items-center justify-end gap-[24px]">
              <Register />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
