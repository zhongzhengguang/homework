import React from "react";
import Image from "next/image";
import musicians from "../data/musician.json";
import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
function Musician() {
  return (
    <div className=" mt-10">
      <div className=" md:flex">
        <div className=" bg-MyColor-FadedRed md:w-[80%] h-[100vh] flex">
          <div className=" border-l h-full border-white ml-[48px]" />
          <div className="flex flex-col justify-center h-full ml-[15vh] w-[40vh] p-2 ">
            <h1 className="md:text-3xl text-lg text-white ">Woodwinds</h1>
            <p className="mt-5 md:text-[20px]">
              1100 Performance Series JFH1100RQ Flugelhorn 1100 Performance
              Series JFH1100RQ Flugelhorn 1100 Performance Series JFH1100RQ
              Flugelhorn 1100 Performance Series JFH1100RQ Flugelhorn
            </p>
            <div className="flex justify-end mt-5 ">
              <button className="w-[130px] h-[64px] bg-MyColor-FadedRed text-white flex justify-between items-center">
                <AiOutlineSwapLeft className=" text-4xl ml-5 hover:scale-125 ease-in duration-75" />
                <AiOutlineSwapRight className="text-4xl mr-5 hover:scale-125 ease-in duration-75" />
              </button>
            </div>
            <div className=" flex  justify-center items-center space-x-10  mt-10 lg:hidden">
              {musicians.map((musician) => (
                <div key={musician.id}>
                  <div>
                    <Image
                      src={musician.img}
                      width={200}
                      height={200}
                      alt="/"
                    />
                  </div>
                  <p className=" mt-2 text-white hover:text-black hover:underline cursor-pointer">
                    Read more
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" absolute xl:flex justify-center items-center md:right-10 h-full space-x-10 hidden">
          {musicians.map((musician) => (
            <div
              key={musician.id}
              className="bg-MyColor-white1 rounded-tr-[10vh] md:w-[40vh] md:h-[50vh] h-[30vh]"
            >
              <div className=" flex justify-center items-center  mt-10">
                <Image
                  src={musician.img}
                  width={400}
                  height={400}
                  alt="/"
                  className="md:w-[50%] md:h-[50%] "
                />
                <div className="rotate-90 h-full">
                  <h1 className="">JERRYA NDREAS</h1>
                  <p className="">Woodwinds</p>
                </div>
              </div>

              <div className=" md:flex justify-center items-center px-5 py-5 text-sm hidden ">
                <p>
                  1100 Performance Series JFH1100RQ Flugelhorn 1100 Performance
                  Series JFH1100RQ Flugelhorn 1100 Performance Series JFH1100RQ.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Musician;
