import React from "react";

const ContentCard = () => {
  return (
    <div className="flex-1 rounded-8xs flex flex-col border-2 border-solid border-red-500 items-start justify-start gap-[16px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="rounded-11xl bg-primary-600 flex flex-row p-2 items-center justify-center">
          <img className="relative w-8 h-8" alt="" src="Icon.svg" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch relative tracking-[-0.01em] leading-[30px] font-semibold">
            Easier Work Organization
          </div>
          <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">{`Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. `}</div>
        </div>
      </div>
      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini text-primary-600">
        <div className="relative leading-[22px] font-semibold">Learn more</div>
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src="arrow/right.svg"
        />
      </div>
    </div>
  );
};

export default ContentCard;
