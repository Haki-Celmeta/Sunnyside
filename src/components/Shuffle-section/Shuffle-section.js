import React from "react";
import './_shuffle-section.scss';
import glassImage from '../../assets/images/desktop/image-stand-out.jpg';
import eggImage from '../../assets/images/desktop/image-transform.jpg';

const ShuffleSection = () => {
  return (
    <div className="shuffle-section-container">
      <div className="shuffle-section first-shuffle">
        <div className="shuffle-info">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients
            through compelling visuals that do most of the marketing for you.
          </p>
          <a href="www.google.com">
            <div>learn more</div>
            <div></div>
          </a>
        </div>
        <img src={eggImage} alt="egg" />
      </div>
      <div className="shuffle-section second-shuffle">
        <img src={glassImage} alt="glass item" />
        <div className="shuffle-info">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywrites,
            we'll build and extend your brand in digital places.
          </p>
          <a href="www.google.com">
            <div>learn more</div>
            <div></div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ShuffleSection;