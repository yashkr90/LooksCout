import React from 'react'

const Copyrightsec = () => {
  return (
    <div className="self-stretch flex md:flex-row sm:flex-col md:pt-6 pt-4 px-0 pb-0 md:items-center  md:justify-between sm:gap-y-4 text-center text-neutral-800 border-t-[1px] border-solid border-gray-300">
    <div className="relative tracking-[-0.1px] leading-[24px]">
      © 2023 Lookscout. All Rights Reserved.
    </div>
    <div className="flex flex-row items-start md:justify-start sm:justify-center md:gap-[24px] gap-16">
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src="Social platforms logo.svg"
      />
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src="Social platforms logo.svg"
      />
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src="Social platforms logo.svg"
      />
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src="Social platforms logo.svg"
      />
    </div>
  </div>
  )
}

export default Copyrightsec