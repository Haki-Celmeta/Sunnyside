import React from "react";
import '../../assets/images/desktop/image-header.jpg';
import './_hero.scss';
import arrow from "../../assets/images/arrow.svg";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <div className="hero-section-container">
      <div>
        <h1>we are creatives</h1>
        <Button sx={{ color: '#fff' }}><img src={arrow} alt="arrow down icon" /></Button>
      </div>
    </div>
  )
}

export default Hero;