import React from "react";
import Menu from "./Menu";
import Register from "./Register";
const DropDown = () => {
  return (
    <div className="w-full absolute bg-primary-400 flex items-center justify-center top-[70px] left-0 ">
      <div className=" lg:hidden px-4 mx-auto w-full flex flex-col gap-4 py-1 justify-center ">
        <Menu />

        <Register />
      </div>
    </div>
  );
};

export default DropDown;
