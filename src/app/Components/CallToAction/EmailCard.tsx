import React from "react";
import Image from "next/image";
import check from "../../../assets/check.svg";
const checkbox = ["Fully Secure", "24/7 Support", "Done Deal"];

const EmailCard = () => {
  return (
    <div className="flex flex-col items-center justify-start md:gap-[32px]  gap-4 text-mini text-gray-25">
      <div className="md:w-[752px]  w-full flex flex-col py-0 md:px-[120px] box-border items-center justify-start">
        <div className="self-stretch  flex flex-col items-start justify-start">
          <div className="self-stretch  w-full  overflow-hidden flex md:flex-row flex-col items-start justify-start  gap-y-[16px]">
            <input
              placeholder="Enter your email"
              className="flex-1 rounded-md  w-full md:w-auto shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)]  md:rounded-tr-none md:rounded-br-none bg-base-white box-border h-[46px] overflow-hidden flex flex-row py-3 px-4 items-center justify-start border-[1px] border-solid border-neutral-700"
            />

            <button type="submit" className="md:rounded-tl-none  w-full md:w-auto hover:bg-primary-400 rounded-md md:rounded-bl-none bg-primary-600 overflow-hidden flex flex-row py-3 px-[18px] items-center justify-center text-base-white">
              <div className="relative leading-[22px] font-semibold">
                Submit
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3  grid-cols-2 items-start justify-start gap-x-[40px]  gap-y-4 text-base text-gray-700">
        {checkbox.map((item,idx) => (
          <div key={idx} className="flex flex-row items-start justify-start gap-[12px]">
            <div className="flex flex-row py-0.5 px-0 items-start justify-start">
              <div className="relative flex items-center justify-center bg-primary-600 rounded-xl w-5 h-5">
              <Image
                style={{objectFit:"cover"}}
                alt="checkbox"
                src={check}
              />
              </div>
              
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.1px] leading-[24px] font-medium">
                {item}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailCard;
