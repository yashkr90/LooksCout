import BlogHeader from "./BlogHeader";
import BlogsBody from "./BlogsBody";


const BlogPost = () => {
  return (
    <div className="relative bg-base-white w-full flex flex-col lg:py-16 lg:px-0 md:py-12 md:px-8 sm:py-8 sm:px-4 box-border items-center justify-center gap-[64px] text-center  text-gray-700 font-text-s-medium">
      <BlogHeader />
      <BlogsBody />
    </div>
  );
};

export default BlogPost;
