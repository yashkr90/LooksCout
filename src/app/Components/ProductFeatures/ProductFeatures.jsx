import ContentHeader from "./ContentHeader";
import Content from "./Content/Content";
import Image from 'next/image';
const ProductFeatures = (props) => {
  	
      // console.log(props.ContentHeader);
    return (
          <div className={`relative ${props.ContentHeader ?('bg-base-white  text-gray-700'):('bg-gray-950 text-neutral-200')}  w-full flex flex-col lg:py-16 lg:px-0 md:py-40 md:px-8 sm:py-8 sm:px-4  box-border items-center justify-center lg:gap-8 md:gap-10 sm:gap-8 text-center font-text-button-semibold-large`}>
                {(props.ContentHeader==true) ?<ContentHeader/>:''}
                <Content  ContentHeader={props.ContentHeader}/>
          </div>
          );
};

export default ProductFeatures;
