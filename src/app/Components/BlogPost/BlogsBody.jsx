import React from "react";
import BlogCard from "./BlogCard";

const BlogsBody = () => {
  return (
    <div className="lg:w-[1280px] w-full flex  md:flex-row md:overflow-x-scroll sm:overflow-y-auto sm:flex-col max-h-screen  py-0 px-8 box-border items-center justify-start text-left text-3xl">
      <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 md:space-x-8 sm:flex sm:flex-col  sm:space-y-8  ">
       
       
        <BlogCard />
        <BlogCard />
        <BlogCard />
       

        
      </div>
    </div>
  );
};

export default BlogsBody;
