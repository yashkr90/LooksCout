import React from "react";

const ContentHeader = () => {
  return (
    <div className="md:w-[752px]  w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-start gap-[8px]">
        <div className="relative tracking-[-0.1px] leading-[20px] font-semibold text-sm">
          1% OF THE INDUSTRY
        </div>
        <div className="md:w-[752px]  w-full flex flex-col items-center justify-start gap-[16px] text-center text-13xl text-gray-700">
          <div className="self-stretch relative md:tracking-[-0.01em] md:leading-[42px] leading-[36px] tracking-[-0.02em] font-semibold text-9xl md:text-13xl">
            Welcome to your new digital reality that will rock your world truly
            at all throughout.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
