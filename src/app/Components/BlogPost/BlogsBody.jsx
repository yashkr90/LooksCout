import React from "react";
import BlogCard from "./BlogCard";
import avatar1 from "../../../assets/Avatar(1).png";
import avatar2 from "../../../assets/Avatar(2).png";
import avatar3 from "../../../assets/Avatar(3).png";
import blogimg1 from "../../../assets/Rectangle1.png";
import blogimg2 from "../../../assets/Rectangle2.png";
import blogimg3 from "../../../assets/Rectangle3.png";

const blogs = [
  {
    id: 1,
    blogimg: blogimg1,
    title: "Organize your digital assets with a new methodology here.",
    desc: "Podcasting operational management inside of workflows to establish a framework seamless. Convergence collaboratively.",
    name: "Andrew Miller",
    role: "CEO",
    avatar: avatar1,
  },
  {
    id: 2,
    blogimg: blogimg2,
    title: "Organize your digital assets with a new methodology here.",
    desc: "Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.",
    name: "David Munsan",
    role: "UX",
    avatar: avatar2,
  },
  {
    id: 3,
    blogimg: blogimg3,
    title: "Organize your digital assets with a new methodology here.",
    desc: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C .",
    name: "Andrew Meller",
    role: "UI",
    avatar: avatar3,
  },
];

const BlogsBody = () => {
  return (
    // <div className="lg:w-[1280px] w-full flex  md:flex-row   sm:flex-col max-h-screen  py-0 px-8 box-border items-center justify-start text-left text-3xl">
    <div className="lg:w-[1280px] flex flex-row  py-0 lg:px-8 box-border items-center justify-center gap-[32px] text-left text-3xl">
      {/* <div className=" flex  md:space-x-8 sm:flex sm:flex-col  sm:space-y-8  "> */}
      <div className="lg:flex md:hidden sm:flex lg:flex-row sm:flex-col py-0 lg:px-8 sm:px-4 sm:py-8 box-border items-center justify-center lg:gap-[32px] sm:gap-6">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.name}
          blogimg={blog.blogimg}
          title={blog.title}
          desc={blog.desc}
          name={blog.name}
          role={blog.role}
          avatar={blog.avatar}
        />
      ))}
      </div>
      <div className="md:flex sm:hidden lg:hidden md:flex-row py-0 px-0 box-border items-center justify-center  gap-[32px]">
      {blogs.map((blog)=>{

        if(blog.id!==3)
        return (<><BlogCard
          key={blog.name}
          blogimg={blog.blogimg}
          title={blog.title}
          desc={blog.desc}
          name={blog.name}
          role={blog.role}
          avatar={blog.avatar}
        /></>)
      })}
      </div>

      {/* </div> */}
    </div>
  );
};

export default BlogsBody;
