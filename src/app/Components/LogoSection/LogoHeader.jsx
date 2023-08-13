import React from "react";

const LogoHeader = () => {
  return (
    <div className="lg:w-[1280px] flex flex-col py-0 lg:px-8 px-0 box-border items-center justify-center">
      <div className="lg:w-[800px] flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
          <b className="self-stretch relative tracking-[-0.02em] leading-[40px] text-5xl md:text-13xl">
            Proud to Be Used By
          </b>
          <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoHeader;
