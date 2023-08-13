import React from "react";
import ContentCard from "./ContentCard";
const Content = () => {
  return (
    <div className="lg:w-[1280px] flex flex-col py-0 px-8 box-border items-center justify-start text-left">
      <div className="self-stretch grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-start justify-center lg:gap-x-8 lg:gap-y-16 md:gap-x-8 md:gap-y-12 sm:gap-y-10">
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        
      </div>
      
    </div>
  );
};

export default Content;
