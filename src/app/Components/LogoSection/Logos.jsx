import React from "react";
import Image from 'next/image';
const Logos = () => {
  return (
    <div className="lg:w-[1280px] flex flex-col lg:flex-row py-0 lg:px-8 px-0 box-border items-center justify-center">
      <div className="flex lg:flex-row flex-col items-center lg:gap-16 justify-center sm:gap-y-8">
        <div className="border-solid border-red-500 border-2 self-stretch grid lg:grid-rows-1 lg:grid-flow-col lg:gap-16 md:grid-cols-4 md:gap-y-8 md:gap-x-8 sm:gap-y-8 items-start">
          {/* <div className="self-stretch flex sm:flex-col gap-8 md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-16  items-start justify-between"> */}
          {}
          <Image
            className="relative w-32  h-8   overflow-hidden shrink-0"
            alt=""
            src="Press Logo.svg"
            fill
          />
          <Image
            className="relative w-32  h-8   overflow-hidden shrink-0"
            alt=""
            src="Press Logo.svg"
            fill
          />
          <Image
            className="relative w-32  h-8   overflow-hidden shrink-0"
            alt=""
            src="Press Logo.svg"
            fill
          />
          <Image
            className="relative w-32  h-8   overflow-hidden shrink-0"
            alt=""
            src="Press Logo.svg"
            fill
          />
        </div>
        <div className="self-stretch grid lg:grid-rows-1 lg:grid-flow-col lg:gap-16 md:grid-cols-2 md:place-items-center md:gap-y-8 md:gap-x-8 sm:gap-y-8 items-start">
          <Image
            className="relative w-32  h-8   overflow-hidden shrink-0"
            alt=""
            src="Press Logo.svg"
            fill
          />
          <Image
            className="relative w-32  h-8   overflow-hidden shrink-0"
            alt=""
            src="Press Logo.svg"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Logos;
