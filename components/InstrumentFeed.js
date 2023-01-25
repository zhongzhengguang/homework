import React, { useState } from "react";
import Instrument1 from "./Instrument/Instrument1";
import Instrument2 from "./Instrument/Instrument2";
import Instrument3 from "./Instrument/Instrument3";
import Instrument4 from "./Instrument/Instrument4";
import instrument1 from "../public/instrument1.png";
import instrument2 from "../public/instrument2.png";
import instrument3 from "../public/instrument3.png";
import instrument4 from "../public/instrument4.png";
function Instrument() {
  const [lab, setLab] = useState(false);
  const handleNav = () => {
    setLab(!lab);
  };

  return (
    <div className="grid md:grid-rows-1  grid-flow-col ml-[67px] md:mt-10 mt-[10vh]">
      <Instrument1 img={instrument1} />
      <Instrument2 img={instrument2} />
      <Instrument3 img={instrument3} />
      <Instrument4 img={instrument4} />
    </div>
  );
}

export default Instrument;
