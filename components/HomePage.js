import React from "react";
import Image from "next/image";
import jupiter from "../public/jupiter.png";
import homephoto from "../public/homephoto.png";
import border from "../public/border.png";
import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
function HomePage() {
  return (
    <div id="/" className="md:h-screen ">
      <div className="flex justify-between pr-10 ">
        <div />
        <Image alt="/" src={jupiter} />
      </div>
      <div className="flex ml-[67px] justify-center">
        <div className=" mt-[15vh] ">
          <h1 className=" text-3xl">
            1100 Performance Series <br />
            JFH1100RQ Flugelhorn
          </h1>
          <h1 className="mt-5 text-2xl">
            1100 Performance Series <br />
            JFH1100RQ Flugelhorn
          </h1>
          <div className=" flex mt-5">
            <button
              className=" w-[150px] h-[64px] bg-black text-white text-2xl hover:scale-105
              ease-in 
              duration-75"
            >
              More
            </button>
            <button className="w-[130px] h-[64px] bg-MyColor-FadedRed text-white flex justify-between items-center">
              <AiOutlineSwapLeft className=" text-4xl ml-5 hover:scale-125 ease-in duration-75" />
              <AiOutlineSwapRight className="text-4xl mr-5 hover:scale-125 ease-in duration-75" />
            </button>
          </div>
        </div>
        <div className="ml-[10vh] hidden md:flex">
          <Image
            alt="/"
            width={400}
            height={400}
            src={homephoto}
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
