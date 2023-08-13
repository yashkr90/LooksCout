import React from 'react'
import Image from 'next/image';
const Navbar = () => {
  return (
    <>
    <div className=" bg-primary-900 w-full overflow-hidden flex flex-col items-center justify-center text-left text-mini text-base-white font-text-button-semibold-large">
    <div className="self-stretch  flex flex-row py-5 px-40 items-center justify-center z-[1] border-b-[1px] border-solid border-primary-400">
                      <div className="w-[1280px] flex flex-row py-0 px-8 box-border items-center justify-between">
                            <div className="flex flex-row items-center justify-start gap-[64px]">
                                  <Image className="relative w-40 h-10" alt="" src="Company Logo.svg" fill />
                                  <div className="flex flex-row items-center justify-start gap-[32px]">
                                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                                              <div className="relative leading-[22px] font-semibold">Home</div>
                                        </div>
                                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                                              <div className="relative leading-[22px] font-semibold">Our Products</div>
                                        </div>
                                        <div className="flex flex-col items-start justify-center">
                                              <div className="self-stretch rounded-8xs h-[22px] flex flex-row items-center justify-start gap-[12px]">
                                                    <div className="relative leading-[22px] font-semibold">Resources</div>
                                                    <Image className="relative w-5 h-5" alt="" src="chevron down.svg" />
                                              </div>
                                        </div>
                                        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                                              <div className="relative leading-[22px] font-semibold">Contacts</div>
                                        </div>
                                  </div>
                            </div>
                            <div className="flex flex-row items-center justify-end gap-[24px]">
                                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center">
                                        <div className="relative leading-[22px] font-semibold">Log in</div>
                                  </div>
                                  <div className="rounded-md bg-primary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-3 px-[18px] items-center justify-center">
                                        <div className="relative leading-[22px] font-semibold">Sign up</div>
                                  </div>
                            </div>
                      </div>
                </div>
    </div>
    </>
    
  )
}

export default Navbar