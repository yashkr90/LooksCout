import React from 'react'
import Image from 'next/image';
const BlogCard = () => {
  return (
    <div className="flex-1 rounded-8xs flex flex-col items-start justify-center gap-[24px]">
          <Image className="border-2 border-solid border-red-500 self-stretch relative rounded-3xs sm:max-w-full sm:h-full sm:max-h-full overflow-hidden md:h-[300px] shrink-0 object-cover" alt="" src="Rectangle 1.png" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                            <div className="self-stretch relative tracking-[-0.01em] leading-[30px] font-semibold md:text-3xl text-xl">Organize your digital assets with a new methodology here.</div>
                            <div className="self-stretch relative text-base tracking-[-0.1px] leading-[24px] text-gray-50">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C .</div>
                      </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[25px] text-mini">
                      <div className="flex flex-row items-center justify-start gap-[10px]">
                            <Image className="rounded-31xl w-10 h-10 object-cover" alt="" src="Avatar.png" />
                            <div className="flex flex-col items-start justify-start">
                                  <div className="relative tracking-[-0.1px] leading-[22px] font-medium">Andrew Meller</div>
                                  <div className="relative text-sm tracking-[-0.1px] leading-[20px] font-medium text-gray-50">UI</div>
                            </div>
                      </div>
                      <div className="flex-1 relative text-sm tracking-[-0.1px] leading-[20px] font-medium text-gray-50 text-right">25 Apr</div>
                </div>
          </div>
    </div>
  )
}

export default BlogCard