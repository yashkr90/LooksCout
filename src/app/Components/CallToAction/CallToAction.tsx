import ContentHeader from "./ContentHeader";
import EmailCard from "./EmailCard";

const CallToAction = () => {
  return (
    <div className="relative bg-neutral-50 w-full overflow-hidden flex flex-row lg:py-16 lg:px-0 md:py-10 md:px-8  py-8  px-4 box-border items-center justify-center text-left  text-primary-600 font-text-l-medium">
      <div className="lg:w-[1280px] md:flex-1 flex flex-col py-0 px-0 lg:px-8 box-border items-center justify-center md:gap-[32px]  gap-4">
        <ContentHeader />
        <EmailCard />
       
      </div>
    </div>
  );
};

export default CallToAction;
