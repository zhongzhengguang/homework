import Image from "next/image";
import React from "react";
import bigsale from "../public/bigsale.png";
import image5 from "../public/image 5.png";
import image6 from "../public/image 6.png";
import image9 from "../public/image 9.png";
function Sale() {
  return (
    <div className=" ml-[48px] mt-10  h-full bg-black">
      <div className="xl:flex xl:justify-between ">
        <div className=" 2xl:flex-1 bg-MyColor-blue1">
          <div className="2xl:h-[50%] 2xl:w-full ">
            <Image src={image9} className="w-full 2xl:h-[50vh]" />
          </div>
          <div>
            <div className="p-10 relative 2xl:top-[10vh]">
              <div className=" text-black">
                <h1 className=" text-4xl font-semibold">
                  1100 Performance <br /> SeriesJFH1100RQ Fl ugelhorn
                </h1>
                <p className="">
                  1100 Performance Series
                  <br /> JFH1100RQ Flugelhorn
                </p>
              </div>
              <div className=" flex justify-end">
                <button className=" text-white text-2xl bg-black py-2 px-3 mt-5 hover:scale-105 ease-in duration-75 ">
                  MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:flex">
          <div className=" bg-MyColor-green h-full flex flex-col justify-between ">
            <div className="p-10">
              <div className=" text-white">
                <h1 className=" text-4xl font-semibold">
                  1100 Performance <br /> SeriesJFH1100RQ Fl ugelhorn
                </h1>
                <p className="">
                  1100 Performance Series
                  <br /> JFH1100RQ Flugelhorn
                </p>
              </div>
              <div className=" flex justify-end">
                <button className=" text-white text-2xl border py-2 px-3 mt-5 hover:scale-105 ease-in duration-75 ">
                  MORE
                </button>
              </div>
            </div>
            <Image src={image6} className=" w-full" />
          </div>
          <div className="bg-MyColor-white1">
            <Image src={image9} className=" w-full" />
            <div className=" ">
              <div className="p-10">
                <div className=" text-black">
                  <h1 className=" text-4xl font-semibold">
                    1100 Performance <br /> SeriesJFH1100RQ Fl ugelhorn
                  </h1>
                  <p className="">
                    1100 Performance Series
                    <br /> JFH1100RQ Flugelhorn
                  </p>
                </div>
                <div className=" flex justify-end">
                  <button className=" text-black border py-2 px-3 mt-5 hover:scale-105 ease-in duration-75 ">
                    MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
