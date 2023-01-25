import React from "react";
const GlobalContext = React.createContext({
  lab: false,
  setLab: () => {},
  handleLab: () => {},
  currentIndex: 0,
  setCurrentIndex: () => {},
  prevSlide: () => {},
  nextSlide: () => {},
  goToSlide: () => {},
  BrunocurrentIndex: 0,
  setBrunoCurrentIndex: () => {},
  BrunoprevSlide: () => {},
  BrunonextSlide: () => {},
  BrunogoToSlide: () => {},
});
export default GlobalContext;
