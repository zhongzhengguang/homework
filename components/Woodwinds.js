import React, { useContext, useState } from "react";
import slides from "../data/slides";
import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import GlobalContext from "@/context/GlobalContext";
import biginstrument from "../public/biginstrument.png";
import slider1 from "../public/slider1.png";
import bruno from "../public/bruno.png";
import Image from "next/image";

function Woodwinds1() {
  const { currentIndex, prevSlide, nextSlide, goToSlide } =
    useContext(GlobalContext);
  return (
    <div className="ml-[67px] h-[780px] mt-10 relative ">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].img})`,
        }}
        className={`w-full h-full bg-center bg-cover duration-300 transition-transform ease-out`}
      >
        <div className=" flex flex-col justify-end h-full">
          <div className=" w-[85%] h-[247px] bg-white border z-1">
            <div className=" flex ml-[5vh] mt-[5vh] space-x-5">
              <div className=" border-r border-black w-0 h-[18vh]" />
              <div>
                <h1 className="md:text-3xl font-semibold ">Woodwinds</h1>
                <p className=" md:text-[20px] text-sm mt-4">
                  1100 Performance Series JFH1100RQ Flugelhorn 1100 Performance
                  Series
                  <br /> JFH1100RQ Flugelhorn 1100 Performance Series JFH1100RQ
                  Flugelhorn 1100
                  <br /> Performance Series JFH1100RQ Flugelhorn.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex absolute right-0">
            <button className=" w-[150px] h-[64px] bg-black text-white text-2xl hover:scale-105 ease-in duration-75">
              More
            </button>
            <button
              type="button"
              className="w-[130px] h-[64px] bg-MyColor-FadedRed text-white flex justify-between items-center"
            >
              {/* Left Arrow */}
              <AiOutlineSwapLeft
                onClick={prevSlide}
                className=" text-4xl ml-5 hover:scale-125 ease-in duration-75"
              />
              {/* Right Arrow */}
              <AiOutlineSwapRight
                onClick={nextSlide}
                className="text-4xl mr-5 hover:scale-125 ease-in duration-75"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Woodwinds1;
