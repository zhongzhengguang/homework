import React, { useContext, useState, useRef } from "react";
import slides from "../data/slides";
import {
  AiOutlineInstagram,
  AiOutlineSwapLeft,
  AiOutlineSwapRight,
} from "react-icons/ai";
import GlobalContext from "@/context/GlobalContext";
import biginstrument from "../public/biginstrument.png";
import slider1 from "../public/slider1.png";
import bruno from "../public/bruno.png";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.css";

const bctop = keyframes`
 0% { width: 100%;height: 0%;}
 50%{width: 100%;height: 50%;}
 100% {width: 100%;height: 0%; }
`;
// const Bgctop = styled.div`
//   z-index: 100;
//   position: absolute;
//   background-color: gray;
//   animation-name: ${(props) => (props.animation ? bctop : "")};
//   animation-duration: 1;
//   animation-iteration-count: 1;
// `;
// const bgcbutton = keyframes`
//  0% { width: 100%;height: 0%;   }
//  50%  { width: 100%;height: 50%;  }
//  100% {width: 100%;height: 0%;    }
// `;
// const Bgcbutton = styled.div`
//   z-index: 100;
//   position: absolute;
//   bottom: 0%;
//   background-color: gray;
//   animation-name: ${(props) => (props.animation ? bgcbutton : "")};
//   animation-duration: 1;
//   animation-iteration-count: 1;
// `;

// const StyleImage = styled.div`
//   transform: translateX(${(props) => props.toleft * -100}%);
//   transition-duration: 5s;
// `;

const Swiperclass = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
`;
const Swiperslide = styled.div`
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;
function Woodwinds1() {
  const [animation, setAnimation] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const handleToLeft = () => {
    if (currentImg > 0) {
      setCurrentImg(currentImg - 1);
      setAnimation(!animation);
    }
  };
  const handleToRight = () => {
    if (currentImg < 2) {
      setCurrentImg(currentImg + 1);
      setAnimation(!animation);
    }
  };

  return (
    <Swiperclass class="swiper">
      <div class="swiper-wrapper">
        <Swiperslide class="swiper-slide">Slide 1</Swiperslide>
        <Swiperslide class="swiper-slide">Slide 2</Swiperslide>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-scrollbar"></div>
    </Swiperclass>
  );
}

export default Woodwinds1;
