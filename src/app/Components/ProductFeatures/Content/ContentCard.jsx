import React from "react";

const ContentCard = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
      <div className="rounded-11xl bg-primary-600 flex flex-row p-2 items-center justify-center">
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0"
          alt=""
          src="Icon.svg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative tracking-[-0.01em] leading-[30px] font-semibold text-xl md:text-3xl">
            Explore ideas together
          </div>
          <div className="self-stretch relative md:text-base text-smi tracking-[-0.1px] leading-[24px] text-gray-50">
            Engage audience segments and finally create actionable insights.
            Amplify vertical integration.
          </div>
        </div>
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
          <div className="relative leading-[22px] font-semibold">
            Learn more
          </div>
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src="arrow/right.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
