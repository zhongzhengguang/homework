import React, { useState, useRef } from "react";
import BrunoSlides from "../data/BrunoSlides";
import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
import GlobalContext from "@/context/GlobalContext";
import styled, { keyframes } from "styled-components";

function Bruno() {
  const [BrunocurrentIndex, setBrunoCurrentIndex] = useState(0);
  const BrunoprevSlide = () => {
    const isFirstSlide = BrunocurrentIndex === 0;
    const newIndex = isFirstSlide
      ? BrunoSlides.length - 1
      : BrunocurrentIndex - 1;
    setBrunoCurrentIndex(newIndex);
    setTopRef.current.classList.remove("BgcTop");
    setTimeout(() => setTopRef.current.classList.add("BgcTop"));
    setButtonRef.current.classList.remove("BgcButton");
    setTimeout(() => setButtonRef.current.classList.add("BgcButton"));
  };
  const BrunonextSlide = () => {
    const isLastSlide = BrunocurrentIndex === BrunoSlides.length - 1;
    const newIndex = isLastSlide ? 0 : BrunocurrentIndex + 1;
    setBrunoCurrentIndex(newIndex);
    setTopRef.current.classList.remove("BgcTop");
    setTimeout(() => setTopRef.current.classList.add("BgcTop"));
    setButtonRef.current.classList.remove("BgcButton");
    setTimeout(() => setButtonRef.current.classList.add("BgcButton"));
  };

  const setTopRef = useRef(null);
  const setButtonRef = useRef(null);
  // const handleRef = () => {
  //   setTopRef.current.classList.remove("BgcTop");
  //   setTimeout(() => setTopRef.current.classList.add("BgcTop"));
  // };

  return (
    <div className="h-[80vh] bg-black ml-[48px] mt-10 relative">
      <div ref={setTopRef} className="" />
      <div ref={setButtonRef} className="" />
      <div
        style={{
          backgroundImage: `url(${BrunoSlides[BrunocurrentIndex].img})`,
        }}
        className="w-full h-full bg-center bg-cover delay-[1.5s] "
      >
        <div className=" flex justify-end items-center h-full">
          <div className=" md:w-[70vh] md:h-[40vh] w-[40vh] h-[40vh] bg-MyColor-white1 opacity-90   z-1 flex flex-col justify-center">
            <div className=" flex justify-center  flex-col md:ml-[15vh] md:space-y-5 pl-5">
              <h1 className=" md:text-3xl md:mt-10 text-lg font-semibold">
                1100 Performance Series
                <br />
                JFH1100RQ Flugelhorn
              </h1>
              <p className=" md:text-2xl">
                1100 Performance Series
                <br /> JFH1100RQ Flugelhorn
              </p>
              <div className=" flex mt-5">
                <button className=" w-[40%] h-[64px] bg-black text-white text-2xl hover:scale-105 ease-in  duration-75">
                  More
                </button>
                <button className="w-[130px] h-[64px] bg-MyColor-FadedRed text-white flex justify-between items-center ">
                  {/* Left Arrow */}
                  <AiOutlineSwapLeft
                    onClick={BrunoprevSlide}
                    className=" text-4xl ml-5 hover:scale-125 ease-in  duration-75"
                  />
                  {/* Right Arrow */}
                  <AiOutlineSwapRight
                    onClick={BrunonextSlide}
                    className="text-4xl mr-5 hover:scale-125  ease-in duration-75"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bruno;
