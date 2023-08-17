import React from "react";
import Image from "next/image";
import Logo1 from "../../../assets/LogoSectionLogos/PressLogo1.svg";
import Logo2 from "../../../assets/LogoSectionLogos/PressLogo2.svg";
import Logo3 from "../../../assets/LogoSectionLogos/PressLogo3.svg";
import Logo4 from "../../../assets/LogoSectionLogos/PressLogo4.svg";
import Logo5 from "../../../assets/LogoSectionLogos/PressLogo5.svg";
import Logo6 from "../../../assets/LogoSectionLogos/PressLogo6.svg";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];
const Logos = () => {
  return (
    <div className="lg:w-[1280px] flex flex-col lg:flex-row py-0 lg:px-8 px-0 box-border items-center justify-center">
      <div className="flex lg:flex-row flex-col items-center lg:gap-16 justify-center  gap-y-8">
        <div className=" self-stretch grid lg:grid-rows-1 lg:grid-flow-col lg:gap-16 md:grid-cols-4 md:gap-y-8 md:gap-x-8  gap-y-8 items-start">
          {/* <div className="self-stretch flex  flex-col gap-8 md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-16  items-start justify-between"> */}

          {logos.map((logo,idx) => (
            <div key={idx} className="relative w-32 h-8 overflow-hidden shrink-0">
              <Image alt="" src={logo} fill />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos;
