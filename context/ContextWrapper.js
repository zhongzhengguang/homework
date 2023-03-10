import React, { useEffect, useMemo, useReducer, useState, useRef } from "react";
import GlobalContext from "./GlobalContext";
import slides from "../data/slides";
import BrunoSlides from "../data/BrunoSlides";
export default function ContextWrapper(props) {
  const [lab1, setLab1] = useState(false);
  const [lab2, setLab2] = useState(false);
  const [lab3, setLab3] = useState(false);
  const [lab4, setLab4] = useState(false);
  const setTopRef = useRef(null);
  const setButtonRef = useRef(null);
  const handleLab1 = () => {
    setLab1(!lab1);
  };
  const handleLab2 = () => {
    setLab2(!lab2);
  };
  const handleLab3 = () => {
    setLab3(!lab3);
  };
  const handleLab4 = () => {
    setLab4(!lab4);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <GlobalContext.Provider
      value={{
        lab1,
        setLab1,
        handleLab1,
        lab2,
        setLab2,
        handleLab2,
        lab3,
        setLab3,
        handleLab3,
        lab4,
        setLab4,
        handleLab4,
        currentIndex,
        setCurrentIndex,
        prevSlide,
        nextSlide,
        goToSlide,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
