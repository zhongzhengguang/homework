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
});
export default GlobalContext;
