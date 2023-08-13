import LogoHeader from "./LogoHeader";
import Logos from "./Logos";
import Image from 'next/image';
const LogoSection = () => {
  return (
    <div className="relative bg-base-white w-full flex flex-col lg:py-16 md:py-10 sm:py-8 px-0 box-border items-center justify-start lg:gap-16 md:gap-10 sm:gap-8 text-center  text-gray-700 font-text-l-regular">
      <LogoHeader />
      <Logos />
    </div>
  );
};

export default LogoSection;
