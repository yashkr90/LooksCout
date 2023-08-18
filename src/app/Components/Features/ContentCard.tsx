"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import right from "../../../assets/right.svg";

interface contentCard{
  title: string;
  desc: string;
  Icon: string;
}

const ContentCard: React.FC <contentCard>= ({ title, desc, Icon }) => {
  return (
    <motion.div
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{
        
        staggerChildren: 0.5,
        duration: 0.8,
      }}
      className="flex-1 rounded-8xs flex flex-col items-start justify-start gap-[16px]"
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]  gap-4">
        <div className="rounded-11xl bg-primary-600 flex flex-row p-2 items-center justify-center">
          <div className="relative w-8 h-8">
            <Image alt="" src={Icon} fill />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch relative md:tracking-[-0.01em] md:leading-[30px] md:text-3xl  text-xl font-semibold  tracking-[-0.02em]  leading-[28px] ">
            {title}
          </div>
          <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
            {desc}
          </div>
        </div>
      </div>
      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini ">
        <a
          href="/learnmore"
          className="relative text-primary-600 leading-[22px] font-semibold no-underline hover:underline"
        >
          Learn more
        </a>
        <div className="relative w-5 h-5 overflow-hidden shrink-0">
          <Image style={{ objectFit: "cover" }} alt="logo" src={right} fill />
        </div>
      </div>
    </motion.div>
  );
};

export default ContentCard;
