import React from "react";
import Image from 'next/image';
const ContentHeader = () => {
  return (
    <div className="lg:w-[1280px] sm:w-full flex flex-col py-0 lg:px-8 box-border items-center justify-center">
      <div className="lg:w-[800px] sm:w-full flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
          <b className="self-stretch relative tracking-[-0.02em] leading-[40px] text-5xl md:text-13xl">
            Redefining Product Features
          </b>
          <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
            Keeping your eye on the ball while performing a deep dive on the
            start-up mentality to derive convergence on cross-platform
            integration.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
