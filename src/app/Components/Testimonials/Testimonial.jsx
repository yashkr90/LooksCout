import TestimonialHeader from "./TestimonialHeader";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
  return (
    <div className=" relative bg-base-white w-full flex flex-col lg:py-16 lg:px-0 md:py-10 md:px-8 sm:py-8 sm:px-4 box-border items-center justify-center gap-10 text-center text-13xl text-gray-700 font-text-s-medium">
      <div className="lg:hidden" >
      <TestimonialHeader />
      </div>
      
      <TestimonialCard />
      
    </div>
  );
};

export default Testimonial;
