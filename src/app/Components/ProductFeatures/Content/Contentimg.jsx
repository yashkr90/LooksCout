import React from "react";

const Contentimg = () => {
  return (
    <div className="lg:w-[560px] w-full lg:h-[560px] md:h-[460px] sm:h-[343px] flex flex-row items-center justify-center border-2 border-solid border-red-500">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="Photo.png"
      />
    </div>
  );
};

export default Contentimg;
