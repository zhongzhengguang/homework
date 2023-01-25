import React from "react";
import { Link } from "react-scroll";
import {
  AiOutlineSearch,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
function Navbar() {
  return (
    <div className=" bg-MyColor-FadedRed text-white fixed left-0 top-0 w-[5vh] h-[90%]  flex flex-col justify-between items-center z-10">
      <div className=" border-b border-white h-[60px] w-full flex justify-center items-center ">
        <AiOutlineSearch className="w-[21.86px] h-[21.86px] hover:scale-125 cursor-pointer ease-in  duration-75 " />
      </div>
      <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
        <CgMenuLeft className="-rotate-90 w-[21.86px] h-[21.86px] hover:scale-125 cursor-pointer ease-in duration-75  " />
      </Link>
      <div className=" space-y-2 pb-4">
        <FaFacebookF className="w-[21.86px] h-[21.86px] hover:scale-125 cursor-pointer ease-in duration-75 " />
        <AiFillYoutube className="w-[21.86px] h-[21.86px] hover:scale-125 cursor-pointer ease-in duration-75 " />
        <BsInstagram className="w-[21.86px] h-[21.86px] hover:scale-125 cursor-pointer ease-in duration-75 " />
        <AiOutlineTwitter className="w-[21.86px] h-[21.86px] hover:scale-125 cursor-pointer ease-in duration-75 " />
      </div>
    </div>
  );
}

export default Navbar;
