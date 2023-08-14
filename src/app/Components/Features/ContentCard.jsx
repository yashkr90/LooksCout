import React from "react";
import Image from "next/image";
import right from "../../../assets/right.svg"
const ContentCard = ({title, desc, Icon}) => {
  return (
    <div className="flex-1 rounded-8xs flex flex-col items-start justify-start gap-[16px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] sm:gap-4">
        <div className="rounded-11xl bg-primary-600 flex flex-row p-2 items-center justify-center">
          <div className="relative w-8 h-8">
          <Image  alt="" src={Icon} fill />
          </div>
          
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch relative md:tracking-[-0.01em] md:leading-[30px] md:text-3xl sm:text-xl font-semibold sm:tracking-[-0.02em] sm:leading-[28px] ">
            {title}
          </div>
          <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
            {desc}
          </div>
        </div>
      </div>
      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini ">
        <a href="/learnmore" className="relative text-primary-600 leading-[22px] font-semibold no-underline hover:underline">Learn more</a>
        <div className="relative w-5 h-5 overflow-hidden shrink-0">
        <Image
          style={{objectFit:"cover"}}
          alt="logo"
          src={right}
          fill
        />

        </div>
    
      </div>
    </div>
  );
};

export default ContentCard;
