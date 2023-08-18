import chevronDown from "../../../assets/chevronDown.svg";
import Image from "next/image";
const Menu = () => {
    return (
      <>
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
        <a href="/home" className="relative leading-[22px] font-semibold no-underline hover:underline text-base-white">Home</a>
        </div>
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
        <a href="/products" className="relative leading-[22px] font-semibold no-underline hover:underline text-base-white">Our Products</a>
        </div>
  
        
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
          <div className="relative leading-[22px] font-semibold">Resources</div>
          <div className="relative w-5 h-5 hover:underline hover:cursor-pointer">
            <Image alt="chevron" src={chevronDown} fill />
          </div>
        </div>
  
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
          <a href="/contact" className="relative leading-[22px] font-semibold no-underline hover:underline text-base-white">Contacts</a>
        </div>
      </>
    );
  };

  export default Menu;