import React, { useContext } from "react";
import Image from "next/image";
import { AiOutlineSwapRight } from "react-icons/ai";
import GlobalContext from "@/context/GlobalContext";
function Instrument1({ img }) {
  const { lab3, setLab3, handleLab3 } = useContext(GlobalContext);
  return (
    <div className=" w-full border border-white relative ">
      {lab3 ? (
        <div className="flex justify-between flex-col absolute w-full h-full bg-black opacity-80">
          <h1 className="text-white text-center text-2xl pt-5 bg-gradient-to-b from-MyColor-FadedRed h-[10vh]">
            Marching
          </h1>
          <ul className="text-white text-center pt-5 space-y-3">
            <li className=" hover:text-MyColor-FadedRed cursor-pointer">
              Trumpets
            </li>
            <li className=" hover:text-MyColor-FadedRed cursor-pointer">
              Bb Cornets
            </li>
            <li className=" hover:text-MyColor-FadedRed cursor-pointer">
              French Horns
            </li>
            <li className=" hover:text-MyColor-FadedRed cursor-pointer">
              Trombones
            </li>
            <li className=" hover:text-MyColor-FadedRed cursor-pointer">
              Alto Horns
            </li>
            <li className=" hover:text-MyColor-FadedRed cursor-pointer">
              Baritones
            </li>
            <li className=" hover:text-MyColor-FadedRed cursor-pointer">
              Euphoniums
            </li>
            <li className=" hover:text-MyColor-FadedRed cursor-pointer">
              Tubas
            </li>
          </ul>
          <div className=" flex justify-center">
            <div className=" relative top-[8vh] w-[120px] h-[120px] border border-white rounded-full text-4xl">
              <AiOutlineSwapRight
                onClick={handleLab3}
                className="-rotate-90 text-white absolute top-2 left-10 cursor-pointer hover:scale-125 ease-in duration-75 "
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between flex-col absolute w-full h-full">
          <h1 className="text-white text-center text-2xl pt-5 bg-gradient-to-b from-MyColor-FadedRed h-[10vh]">
            Marching
          </h1>
          <div className=" flex justify-center">
            <div className=" relative top-[8vh] w-[120px] h-[120px] border border-white rounded-full text-4xl">
              <AiOutlineSwapRight
                onClick={handleLab3}
                className="text-white absolute top-2 left-10 cursor-pointer hover:scale-125 ease-in duration-75 "
              />
            </div>
          </div>
        </div>
      )}

      <Image
        src={img}
        width={400}
        height={400}
        style={{ objectFit: "contain" }}
        className="w-full"
        alt="/"
      />
    </div>
  );
}

export default Instrument1;
