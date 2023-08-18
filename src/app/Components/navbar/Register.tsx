import Image from "next/image";
const Register = () => {
    return (
      <>
        <div className="rounded-8xs overflow-hidden hover:bg-primary-600 flex py-3 px-[18px] flex-row items-center justify-center">
          <div className="relative leading-[22px] font-semibold">Log in</div>
        </div>
        <button className="rounded-md bg-primary-600 text-inherit  hover:ring-white hover:ring-1   shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-3 px-[18px] items-center justify-center">
          <div className="relative leading-[22px] font-semibold">Sign up</div>
        </button>
      </>
    );
  };

  export default Register;