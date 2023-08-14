import React from "react";
import social1 from "../../../assets/FooterSocial/Social1.svg";
import social2 from "../../../assets/FooterSocial/Social2.svg";
import social3 from "../../../assets/FooterSocial/Social3.svg";
import social4 from "../../../assets/FooterSocial/Social4.svg";
import Image from "next/image";

const socials = [social1, social2, social3, social4];

const Copyrightsec = () => {
  return (
    <div className="self-stretch flex md:flex-row sm:flex-col md:pt-6 pt-4 px-0 pb-0 md:items-center  md:justify-between sm:gap-y-4 text-center text-neutral-800 border-t-[1px] border-solid border-gray-300">
      <div className="relative tracking-[-0.1px] leading-[24px]">
        © 2023 Lookscout. All Rights Reserved.
      </div>
      <div className="flex flex-row items-start md:justify-start sm:justify-center md:gap-[24px] gap-16">
        {socials.map((social, idx) => (
          <>
            <div key={idx} className="relative w-6 h-6 overflow-hidden shrink-0">
              <Image alt="" src={social} />
            </div>
          </>
        ))}

      </div>
    </div>
  );
};

export default Copyrightsec;
