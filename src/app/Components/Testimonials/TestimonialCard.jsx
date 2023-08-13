import React from "react";

const TestimonialCard = () => {
  return (
    <div className="lg:w-[1280px] mx-auto  self-stretch rounded-[10px] bg-neutral-100 flex flex-col p-8 items-start lg:items-center justify-start gap-4 md:gap-8 text-left">
      <div className="self-stretch flex flex-col items-start lg:items-center justify-start gap-4 lg:gap-8">
        <img className="relative w-32 h-8" alt="" src="Company Logo.svg" />
        <div className="self-stretch lg:text-center relative tracking-[-0.01em]  leading-[30px] font-semibold text-xl md:text-3xl lg:text-9xl">
          <p>
            Thank you for making it painless, pleasant and most of all hassle
            free! I love LookScout. I can't say enough about LookScout. Great
            job, I will definitely be ordering again!
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[10px] text-mini">
        <img
          className="rounded-[50px] w-10 h-10 object-cover"
          alt=""
          src="Avatar.png"
        />
        <div className="flex flex-col items-start justify-start">
          <div className="relative tracking-[-0.1px] leading-[22px] font-medium">
            Lisa Smith
          </div>
          <div className="relative text-sm tracking-[-0.1px] leading-[20px] font-medium text-gray-50">
            CEO Company
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
