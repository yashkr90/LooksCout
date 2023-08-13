"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";



const Register = () => {
  return (
    <>
      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
        <div className="relative leading-[22px] font-semibold">Log in</div>
      </div>
      <div className="rounded-md bg-primary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-3 px-[18px] items-center justify-center">
        <div className="relative leading-[22px] font-semibold">Sign up</div>
      </div>
    </>
  );
};

const Menu = () => {
  return (
    <>
    
      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
        <div className="relative leading-[22px] font-semibold">Home</div>
      </div>
      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
        <div className="relative leading-[22px] font-semibold">
          Our Products
        </div>
      </div>

      {/* <div className="self-stretch rounded-8xs h-[22px] flex flex-row items-center justify-start gap-[12px]"> */}
      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
        <div className="relative leading-[22px] font-semibold">Resources</div>
        <div className="relative w-5 h-5">
          <Image alt="" src="chevron down.svg" fill />
        </div>
      </div>

      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
        <div className="relative leading-[22px] font-semibold">Contacts</div>
      </div>
      
    </>
  );
};
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" bg-primary-900 w-full overflow-hidden flex flex-col items-center justify-center text-left text-mini text-base-white font-text-button-semibold-large">
        <div className="self-stretch  flex flex-row lg:py-5 lg:px-40 p-4 items-center lg:justify-center z-[1] border-b-[1px] border-solid border-primary-400">
          <div className="lg:w-[1280px] w-full flex lg:flex-row  py-0 lg:px-8 box-border items-center justify-between">
            <div className="flex lg:flex-row items-center justify-start lg:gap-[64px] ">
              <div className="relative w-40 h-10" >
                <Image alt="" src="Company Logo.svg" fill />
              </div>

              <div className="hidden lg:flex lg:flex-row   border-2 border-red-600 border-solid items-center justify-start gap-[32px]">
                <Menu />
              </div>
            </div>

            <div className="lg:hidden relative w-6 h-6" onClick={()=>setOpen(!open)} >
              <button className="absolute top-[calc(50%_-_10px)] bg-transparent left-[calc(50%_-_10px)] rounded-[5px] overflow-hidden flex flex-row items-center justify-center">
                <div className="relative w-5 h-5 overflow-hidden shrink-0">
                  <Image alt="" src="burger menu/big .svg" fill />
                </div>
              </button>
            </div>

            {open? (<div className="w-full absolute flex items-center justify-center top-20 ">
              <div className="border-solid border-2 border-red-500 lg:hidden  mx-auto w-full flex flex-col justify-center ">
                <Menu />

                <Register />
              </div>
            </div>): ""}

            

            <div className=" hidden lg:flex lg:flex-row  sm:flex-col items-center justify-end gap-[24px]">
              <Register />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
