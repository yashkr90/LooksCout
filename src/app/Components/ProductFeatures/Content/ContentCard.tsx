"use client"
import React from "react";
import Image from "next/image";
import right from "../../../../assets/right.svg";
import { motion } from "framer-motion";
const ContentCard = ({ title, desc, Icon }) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{
        staggerChildren: 0.5,
        duration: 0.8,
      }}
      className="self-stretch flex flex-row items-start justify-start gap-[16px]"
    >
      <div className="rounded-11xl bg-primary-600 flex flex-row p-2 items-center justify-center">
        <div className="relative w-8 h-8 overflow-hidden shrink-0">
          <Image alt="icon" src={Icon} fill />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative tracking-[-0.01em] leading-[30px] font-semibold text-xl md:text-3xl">
            {title}
          </div>
          <div className="self-stretch relative md:text-base text-smi tracking-[-0.1px] leading-[24px] text-gray-50">
            {desc}
          </div>
        </div>
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[6px] text-mini">
          <a
            href="#"
            className="relative leading-[22px]  text-primary-600 font-semibold no-underline hover:underline hover:cursor-pointer "
          >
            Learn more
          </a>
          <div className="relative w-5 h-5 overflow-hidden shrink-0">
            <Image alt="arrow" src={right} fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContentCard;
