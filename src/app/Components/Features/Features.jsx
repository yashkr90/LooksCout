import BlockHeader from "./BlockHeader";
import Content from "./Content";
import Image from 'next/image';
const Features = () => {
  return (
    <div className="relative bg-base-white w-full flex flex-col lg:py-16 lg:px-0 md:py-10 md:px-8 sm:py-8 sm:px-4 box-border items-center justify-center lg:gap-16 sm:gap-8 text-center text-13xl text-gray-700 font-text-button-semibold-large">
      <BlockHeader />
      <Content />
      
    </div>
  );
};

export default Features;
