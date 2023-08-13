import Image from 'next/image';

const Hero = () => {
  return (
    <div className=" bg-primary-900  overflow-hidden flex items-center justify-center text-mini text-base-white font-text-button-semibold-large">
      <div className="w-full lg:width-[1028px] sm:overflow-hidden flex lg:flex-row sm:flex-col lg:pt-12 lg:px-8 lg:pb-20 md:p-12  sm:px-4 sm:pt-7 sm:pb-10 box-border items-center justify-start lg:gap-[64px] md:gap-[40px] sm:gap-[32px] z-[0] md:text-[52px] sm:text-[36px]">
        <div className="content self-stretch border-2 border-red-700 border-solid lg:order-first sm:order-last flex-1 flex flex-col items-start justify-center">
          <div className="self-stretch h-[528px] flex flex-col items-start justify-end lg:gap-[80px] sm:gap-[32px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
              <div className="self-stretch flex flex-col items-start justify-start md:gap-[24px] sm:gap-[16px]">
                <b className="self-stretch relative md:tracking-[-0.01em] md:leading-[60px] sm:font-semibold sm:leading-[44px] sm:tracking-[-0.1px]">
                  Your Supercharged Design Workflow.
                </b>
                <div className="self-stretch flex flex-row items-start justify-start text-[18px] text-primary-200">
                  <div className="flex-1 relative tracking-[-0.1px] leading-[26px]">
                    We’ve been told it is not possible to overachieve our
                    customers’ expectations. We have not reinvented the wheel,
                    we decided to build upon it.
                  </div>
                </div>
              </div>
              <button className=" sm:w-full md:w-auto flex flex-row items-center justify-center overflow-hidden  py-3 px-[18px]  gap-[24px] rounded-md  bg-primary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] text-mini">
                <div className=" relative text-base-white leading-[22px] font-semibold ">
                  Get Started
                </div>

                {/* <div className="rounded-8xs overflow-hidden hidden" /> */}
              </button>
            </div>
            <div className="self-stretch border-2 border-red-700 border-solid flex flex-col items-start justify-start gap-[16px] text-[14px]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative tracking-[-0.1px] leading-[20px] font-medium">
                  Who supports us
                </div>
              </div>
              <div className="self-stretch grid md:grid-cols-4 md:place-items-start sm:place-items-center sm:grid-cols-2 gap-x-0">
                <Image
                  className="relative w-28 h-7  border-red-700 border-2 border-solid overflow-hidden shrink-0"
                  alt=""
                  src="Company Logo.svg"
                  fill
                  
                />
                <Image
                  className="relative w-28 h-7 overflow-hidden shrink-0"
                  alt=""
                  src="Company Logo.svg"
                  fill
                />
                <Image
                  className="relative w-28 h-7 overflow-hidden shrink-0"
                  alt=""
                  src="Company Logo.svg"
                  fill
                />
                <Image
                  className="relative w-28 h-7 overflow-hidden shrink-0"
                  alt=""
                  src="Company Logo.svg"
                  fill
                />
                <div className="relative w-32 h-8 overflow-hidden shrink-0 hidden" />
              </div>
            </div>
          </div>
        </div>
        <Image
          className="relative border-2 border-red-700 border-solid  overflow-hidden rounded-[10px] lg:w-[640px] lg:h-[656px] md:h-[628px] sm:max-w-full sm:h-[375.25px] sm:shrink-0"
          alt=""
          src="Hero 3 ~ desktop.svg"
          fill
        />
      </div>
    </div>
  );
};

export default Hero;
