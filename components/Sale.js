import Image from "next/image";
import React from "react";
import bigsale from "../public/bigsale.png";
import image5 from "../public/image 5.png";
import image6 from "../public/image 6.png";
import image9 from "../public/image 9.png";
function Sale() {
  return (
    <div className=" ml-[67px] mt-10 h-full">
      <div className=" w-full xl:flex xl:justify-between xl:items-center">
        <div className="bg-MyColor-blue1 h-full mt-10 xl:mt-0 relative 2xl:flex-1">
          <Image
            alt="/"
            src={image9}
            className="w-full"
            style={{ objectFit: "cover" }}
          />
          <div className=" flex ">
            <div className="p-10">
              <div className=" text-black">
                <h1 className=" text-4xl font-semibold ">
                  1100 Performance <br /> SeriesJFH1100RQ Fl ugelhorn
                </h1>
                <p className="">
                  1100 Performance Series
                  <br /> JFH1100RQ Flugelhorn
                </p>
              </div>
              <div className=" flex justify-end">
                <button className=" text-white bg-black py-2 px-3 mt-5 hover:scale-105 ease-in duration-75 ">
                  MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:mt-0 mt-10 ">
          <div className="bg-MyColor-green h-full relative ">
            <div className=" flex justify-end">
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
                  <button className=" text-white border py-2 px-3 mt-5 hover:scale-105 ease-in duration-75 ">
                    MORE
                  </button>
                </div>
              </div>
            </div>
            <Image
              alt="/"
              src={image6}
              className="w-full"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="bg-MyColor-white1 h-full mt-10 xl:mt-0 relative ">
            <Image
              alt="/"
              src={image9}
              className="w-full"
              style={{ objectFit: "cover" }}
            />
            <div className=" flex justify-end">
              <div className="p-10">
                <div className=" text-black">
                  <h1 className=" text-4xl font-semibold ">
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
