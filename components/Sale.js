import Image from "next/image";
import React from "react";
import sale from "../public/sale.png";
function Sale() {
  return (
    <div className=" ml-[67px] mt-10">
      <div className=" lg:flex">
        <div className=" bg-MyColor-blue1 h-full ">
          <Image
            alt="/"
            src={sale}
            className="w-full"
            style={{ objectFit: "cover" }}
          />
          <div className="m-5 flex w-full">
            <div className=" text-black">
              <h1 className=" text-2xl ">
                1100 Performance Series <br /> JFH1100RQ Fl ugelhorn
              </h1>
              <p>1100 Performance Series JFH1100RQ Flugelhorn</p>
            </div>
            <button className=" bg-black mt-[18vh] w-[200px] h-[64px] border text-white text-2xl hover:scale-105 ease-in duration-75 ">
              More
            </button>
          </div>
        </div>
        <div className="sm:flex ">
          <div className="bg-MyColor-green h-full ">
            <div className="m-5 flex w-full">
              <div className=" text-black">
                <h1 className=" text-2xl ">
                  1100 Performance Series <br /> JFH1100RQ Fl ugelhorn
                </h1>
                <p>1100 Performance Series JFH1100RQ Flugelhorn</p>
              </div>
              <button className="mt-[18vh] w-[200px] h-[64px] border text-white text-2xl hover:scale-105 ease-in duration-75 ">
                More
              </button>
            </div>
            <Image
              alt="/"
              src={sale}
              className="w-full"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="bg-MyColor-blue1 h-full ">
            <Image
              alt="/"
              src={sale}
              className="w-full"
              style={{ objectFit: "cover" }}
            />
            <div className="m-5 flex w-full">
              <div className=" text-black">
                <h1 className=" text-2xl ">
                  1100 Performance Series <br /> JFH1100RQ Fl ugelhorn
                </h1>
                <p>1100 Performance Series JFH1100RQ Flugelhorn</p>
              </div>
              <button className=" bg-black mt-[18vh] w-[200px] h-[64px] border text-white text-2xl hover:scale-105 ease-in duration-75 ">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
