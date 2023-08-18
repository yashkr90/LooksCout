import React from "react";
import ContentCard from "./ContentCard";
import Image from "next/image";
import Icon1 from "../../../assets/FeaturesSectionIcons/Icon.svg";
import Icon2 from "../../../assets/FeaturesSectionIcons/Icon(1).svg";
import Icon3 from "../../../assets/FeaturesSectionIcons/Icon(2).svg";
import Icon4 from "../../../assets/FeaturesSectionIcons/Icon(3).svg";
import Icon5 from "../../../assets/FeaturesSectionIcons/Icon(4).svg";
import Icon6 from "../../../assets/FeaturesSectionIcons/Icon(5).svg";

const cards = [
  {
    id:1,
    title: "Easier Work Organization",
    desc: "Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.",
    icon: Icon1,
  },
  {
    id:2,
    title: "Fast Connection",
    desc: "Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.",
    icon: Icon2,
  },
  {
    id:3,
    title: "Streamlined Processes",
    desc:"Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.",
    icon: Icon3,
  },
  {
    id:4,
    title: "Easier Integrations",
    desc:"Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.",
    icon: Icon4,
  },
  
  {
    id:5,
    title: "Marketing Analytics",
    desc:"Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.",
    icon: Icon5,
  },
  {
    id:6,
    title: "Workflow Builder",
    desc:"Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.",
    icon: Icon6,
  },
];


const Content = () => {
  return (
    <div className="lg:w-[1280px] flex flex-col py-0 px-8 box-border items-center justify-start text-left">
      <div className="self-stretch grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 items-start justify-center lg:gap-x-8 lg:gap-y-16 md:gap-x-8 md:gap-y-12  gap-y-10">
        {cards.map((card)=>{

          return(<ContentCard title={card.title} desc={card.desc} Icon={card.icon} key={card.id} />)
        })}


        
      </div>
    </div>
  );
};

export default Content;
