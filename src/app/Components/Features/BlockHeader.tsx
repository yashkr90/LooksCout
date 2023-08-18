import React from "react";

const BlockHeader = () => {
  return (
    <div className="lg:w-[1280px] flex flex-col py-0 px-8 box-border items-center justify-center">
      <div className="lg:w-[800px] flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
          <b className="self-stretch relative tracking-[-0.02em] leading-[40px]">
            Messaging for all
          </b>
          <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
            User generated content in real-time will have multiple touchpoints
            for offshoring.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockHeader;
