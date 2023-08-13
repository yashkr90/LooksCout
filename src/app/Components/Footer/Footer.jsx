import FooterContent from "./FooterContent";
import Copyrightsec from "./Copyrightsec";

const Footer = () => {
  return (
    <div className="relative bg-gray-950 w-full flex flex-col lg:py-16 lg:px-0 md:py-10 md:px-8 sm:py-8 sm:px-4 box-border items-center justify-start text-left text-base text-neutral-200 font-text-l-regular">
      <div className="lg:w-[1280px] flex flex-col py-0 lg:px-8 sm:px-0  box-border items-start justify-start md:gap-[48px] gap-6">
        <FooterContent />
        <Copyrightsec />
      </div>
    </div>
  );
};

export default Footer;
