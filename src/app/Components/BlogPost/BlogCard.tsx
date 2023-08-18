"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface Props {
  blogimg: StaticImageData;
  avatar: StaticImageData;
  title: string;
  name: string;
  desc: string;
  role: string;
}

const BlogCard:React.FC<Props> = ({ blogimg, avatar, title, name, desc, role }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1,transition:{
            scale:{duration:0.2}
      } }}
      whileTap={{ scale: 0.9 }}
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{
        staggerChildren: 0.6,
        duration: 0.5,
      }}
      className="flex-1 rounded-8xs flex flex-col items-start justify-center md:gap-[24px] gap-3"
    >
      <div className="self-stretch relative rounded-3xs  overflow-hidden md:h-[300px]  h-[250px] shrink-0">
        <Image alt="" src={blogimg} fill style={{ objectFit: "fill" }} />
      </div>

      <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <a
              href="#"
              className=" text-gray-700 self-stretch relative tracking-[-0.01em] no-underline hover:underline  leading-[30px] font-semibold md:text-3xl text-xl"
            >
              {title}
            </a>
            <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">
              {desc}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[25px] text-mini">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div className="rounded-[50px] w-10 h-10 relative">
              <Image alt="" src={avatar} fill style={{ objectFit: "cover" }} />
            </div>

            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.1px] leading-[22px] font-medium">
                {name}
              </div>
              <div className="relative text-sm tracking-[-0.1px] leading-[20px] font-medium text-gray-50">
                {role}
              </div>
            </div>
          </div>
          <div className="flex-1 relative text-sm tracking-[-0.1px] leading-[20px] font-medium text-gray-50 text-right">
            25 Apr
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
