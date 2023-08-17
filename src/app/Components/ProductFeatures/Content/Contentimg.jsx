

import React from "react";
import Image from 'next/image';
import ProductPhoto1 from "../../../../assets/largePhoto.png"
import ProductPhoto2 from "../../../../assets/Photo.png"

const Contentimg = ({ContentHeader}) => {
  // console.log(ContentHeader)
  let photo=(ContentHeader==false) ? ProductPhoto1:ProductPhoto2;
  return (
    
    <div className="lg:w-[560px] w-full lg:h-[560px] md:h-[460px]  h-[343px] flex flex-row items-center justify-center ">
      <div className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover">
      {(ContentHeader==true)?(
        <>
        <div className="lg:hidden block">
      <Image
        style={{objectFit:"contain"}}
        alt="productphoto"
        src={ProductPhoto2}
        fill
      />
      </div>
      <div className="hidden lg:block">
      <Image
        style={{objectFit:"contain"}}
        alt="productphoto"
        src={ProductPhoto1}
        fill
      />
      </div>
      </>
      ):(<Image
        style={{objectFit:"contain"}}
        alt="productphoto"
        src={ProductPhoto2}
        fill
      />)}
      
      
      
      </div>
   
    </div>
  );
};

export default Contentimg;
