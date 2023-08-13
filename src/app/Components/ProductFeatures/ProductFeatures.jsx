import ContentHeader from "./ContentHeader";
import Content from "./Content/Content";

const ProductFeatures = (props) => {
  	
    return (
          <div className={`relative ${props.ContentHeader ?('bg-base-white  text-gray-700'):('bg-gray-950 text-neutral-200')}  w-full flex flex-col lg:py-16 lg:px-0 md:py-40 md:px-8 sm:py-8 sm:px-4  box-border items-center justify-center lg:gap-8 md:gap-10 sm:gap-8 text-center font-text-button-semibold-large`}>
                {props.ContentHeader ?<ContentHeader/>:''}
                <Content />
          </div>
          );
};

export default ProductFeatures;
