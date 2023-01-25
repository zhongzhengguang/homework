import Image from "next/image";
import React from "react";
import sale from "../public/sale.png";
function Sale() {
  return (
    <div className=" ml-[67px] mt-10">
      <div className=" lg:flex ">
        <div className=" bg-MyColor-blue1 w-full h-full ">
          <Image
            alt="/"
            src={sale}
            className=" w-full"
            style={{ objectFit: "cover" }}
          />
          <div className="m-5 flex">
            <div className=" text-black">
              <h1 className=" text-2xl ">
                1100 Performance Series JFH1100RQ Flugelhorn
              </h1>
              <p>1100 Performance Series JFH1100RQ Flugelhorn</p>
            </div>
            <button className=" bg-black mt-[18vh] w-[200px] h-[64px] border text-white text-2xl hover:scale-105 ease-in duration-75 ">
              More
            </button>
          </div>
        </div>
        <div className=" bg-MyColor-green w-full h-full ">
          <Image
            alt="/"
            src={sale}
            className=" w-full"
            style={{ objectFit: "cover" }}
          />
          <div className="m-5 flex">
            <div className=" text-white">
              <h1 className=" text-2xl ">
                1100 Performance Series JFH1100RQ Flugelhorn
              </h1>
              <p>1100 Performance Series JFH1100RQ Flugelhorn</p>
            </div>
            <button className=" mt-[18vh] w-[200px] h-[64px] border text-white text-2xl hover:scale-105 ease-in  duration-75 ">
              More
            </button>
          </div>
        </div>
        <div className=" bg-MyColor-white1 w-full h-full ">
          <Image
            alt="/"
            src={sale}
            className=" w-full"
            style={{ objectFit: "cover" }}
          />
          <div className="m-5 flex">
            <div className=" text-black">
              <h1 className=" text-2xl ">
                1100 Performance Series JFH1100RQ Flugelhorn
              </h1>
              <p>1100 Performance Series JFH1100RQ Flugelhorn</p>
            </div>
            <button className="  mt-[18vh] w-[200px] h-[64px] border text-white text-2xl hover:scale-105 bg-black ease-in  duration-75 ">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
