import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
import slides from "../data/slides.json";
import Image from "next/image";
import "swiper/swiper-bundle.css";

import { useRef, useCallback } from "react";
function Woodwinds() {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="relative ml-[48px] mt-10">
      <Swiper ref={sliderRef} spaceBetween={50} slidesPerView={1} loop>
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              className="w-full z-[-1]"
              width={400}
              height={400}
              src={item.img}
              alt="/"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-0 flex flex-col justify-end h-full w-full ">
        <div className=" w-[85%] h-[30vh] bg-white border z-10 hidden sm:flex">
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
        <div className=" flex absolute right-0 z-10  bg-black">
          <button className=" w-[150px] h-[64px] bg-black text-white text-2xl hover:scale-105 ease-in duration-75">
            More
          </button>
          <button
            type="button"
            className="w-[130px] h-[64px] bg-MyColor-FadedRed text-white flex justify-between items-center"
          >
            {/* Left Arrow */}
            <AiOutlineSwapLeft
              onClick={handlePrev}
              className=" text-4xl ml-5 hover:scale-125 ease-in duration-75"
            />
            {/* Right Arrow */}
            <AiOutlineSwapRight
              onClick={handleNext}
              className="text-4xl mr-5 hover:scale-125 ease-in duration-75"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
const card = () => {
  return null;
};
export default Woodwinds;
