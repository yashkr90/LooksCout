import React from "react";
import ContentCard from "./ContentCard";
import Contentimg from "./Contentimg";
import Image from "next/image";
import Icon1 from "../../../../assets/FeaturesSectionIcons/Icon(6).svg"
import Icon2 from "../../../../assets/FeaturesSectionIcons/Icon(7).svg"
import Icon3 from "../../../../assets/FeaturesSectionIcons/Icon(8).svg"

const cards = [
  {
    id:1,
    title: "Explore ideas together",
    desc: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    icon: Icon1,
  },
  {
    id:2,
    title: "Bring those ideas to life",
    desc: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    icon: Icon2,
  },
  {
    id:3,
    title: "Ship better outcomes",
    desc: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    icon: Icon3,
  },
];

const Content = ({ContentHeader}) => {
  return (
    <div className="lg:w-[1280px] sm:w-full flex flex-col lg:flex-row py-0 lg:px-8 box-border items-center justify-start gap-[124px] md:gap-12 sm:gap-8 text-left">
      <div className="flex-1 flex flex-col sm:order-last lg:order-first items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
         {cards.map((card)=>(
          <ContentCard  title={card.title} desc={card.desc} Icon={card.icon} key={card.id} />
         ))}
         
          
          
        </div>
      </div>
      <Contentimg ContentHeader={ContentHeader} />
    </div>
  );
};

export default Content;
