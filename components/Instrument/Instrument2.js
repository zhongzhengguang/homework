import React, { useContext } from "react";
import Image from "next/image";
import { AiOutlineSwapLeft } from "react-icons/ai";
import GlobalContext from "@/context/GlobalContext";
function Instrument1({ img }) {
  const { lab2, setLab2, handleLab2 } = useContext(GlobalContext);

  return (
    <div className=" w-full border border-white relative ">
      {lab2 ? (
        <div className="flex justify-between flex-col absolute w-full h-full bg-black opacity-80">
          <div className=" flex justify-center">
            <div className=" relative bottom-[8vh]   rotate-180 w-[120px] h-[120px] border border-white rounded-full text-4xl">
              <AiOutlineSwapLeft
                onClick={handleLab2}
                className="rotate-90 text-white absolute top-3 left-11 cursor-pointer hover:scale-125 ease-in duration-75 "
              />
            </div>
          </div>
          <ul className="text-white text-center space-y-3">
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
          <h1 className="text-white text-center text-3xl pt-5 bg-gradient-to-t from-MyColor-FadedRed h-[10vh]">
            BASS
          </h1>
        </div>
      ) : (
        <div className="flex justify-between flex-col absolute w-full h-full">
          <div className=" flex justify-center">
            <div className=" relative bottom-[8vh]   rotate-180 w-[120px] h-[120px] border border-white rounded-full text-4xl">
              <AiOutlineSwapLeft
                onClick={handleLab2}
                className="text-white absolute top-2 left-10 cursor-pointer hover:scale-125 ease-in duration-75 "
              />
            </div>
          </div>
          <h1 className="text-white text-center text-3xl pt-5 bg-gradient-to-t from-MyColor-FadedRed h-[10vh]">
            BASS
          </h1>
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
