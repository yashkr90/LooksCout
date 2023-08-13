import React from "react";

const BlogHeader = () => {
  return (
    <div className="lg:w-[1280px] sm:w-full flex flex-col py-0 px-8 box-border items-center justify-center">
      <div className="lg:w-[800px] sm:w-full flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
          <b className="self-stretch relative tracking-[-0.02em] leading-[40px] md:text-13xl text-5xl">
            Latest Blog Posts
          </b>
          <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50 ">
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
