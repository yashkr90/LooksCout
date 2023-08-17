import React from "react";
import Image from "next/image";
import CompanyLogo from "../../../assets/FooterCompany.svg";

const links1 = ["Integrations", "Solutions", "Features", "Enterprise"];
const links2 = ["Community", "Events", "Help Center", "Partners"];

const FooterContent = () => {
  return (
    <div className="self-stretch grid lg:grid-cols-4 items-start lg:justify-between  md:gap-x-12 md:gap-y-8  grid-cols-2  gap-y-6  gap-x-16">
      <div className="flex flex-col lg:order-1  col-span-2 md:col-span-1 md:order-1  items-start justify-start gap-[16px] text-neutral-800">
        
        <div  className="relative w-40 h-10" >
        <Image alt="" src={CompanyLogo} />
        </div>
        
        <div className="flex flex-col items-start justify-start">
          <div className="lg:w-[247px] relative tracking-[-0.1px] leading-[24px] inline-block ">
            Generate outside the box thinking with the possibility to targtet
            the low.
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:order-2 md:order-3 items-start justify-start gap-[24px]">
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
          <div className="relative tracking-[-0.1px] leading-[24px] font-semibold">
            Resources
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px]">
          {links2.map((link,idx) => (
            <div key={idx} className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
              <a
                href="#"
                className="relative tracking-[-0.1px] text-neutral-800 leading-[24px] no-underline font-medium hover:underline "
              >
                {link}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:order-3 md:order-4 items-start justify-start gap-[24px]">
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
          <div className="relative tracking-[-0.1px] leading-[24px] font-semibold">
            Products
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          {links1.map((link,idx) => (
            <div key={idx} className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
              <a
                href="#"
                className="relative tracking-[-0.1px] text-neutral-800 leading-[24px] no-underline font-medium hover:underline "
              >
                {link}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:order-4  col-span-2 md:col-span-1 md:order-2 items-start justify-start gap-[24px]">
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
          <div className="relative tracking-[-0.1px] leading-[24px] font-semibold">
            Get Email Notifications
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-neutral-800">
          <div className="self-stretch relative tracking-[-0.1px] leading-[24px]">
            Generate outside the box thinking with the possibility to targtet
            the low
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-mini">
            <div className="self-stretch rounded-md overflow-hidden flex flex-row items-start justify-start">
              <input
                placeholder="Enter email..."
                className="flex-1 text-white focus:outline-none focus:border-blue-500 rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md bg-gray-600 box-border h-[46px] overflow-hidden flex flex-row py-3 px-4 items-center justify-start border-[1px] border-solid border-gray-300"
              />

              <button type="submit" className="rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none hover:bg-primary-400  bg-primary-600 overflow-hidden flex flex-row py-3 px-[18px] items-center justify-center text-base-white">
                <div className="relative leading-[22px] font-semibold">
                  Submit
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
