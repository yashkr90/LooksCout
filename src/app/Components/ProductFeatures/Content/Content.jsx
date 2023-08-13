import React from "react";
import ContentCard from "./ContentCard";
import Contentimg from "./Contentimg";

const Content = () => {
  return (
    

    <div className="lg:w-[1280px] sm:w-full flex flex-col lg:flex-row py-0 lg:px-8 box-border items-center justify-start gap-[124px] md:gap-12 sm:gap-8 text-left">
      <div className="flex-1 flex flex-col sm:order-last lg:order-first items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </div>
      </div>
      <Contentimg />
    </div>
   
  );
};

export default Content;
