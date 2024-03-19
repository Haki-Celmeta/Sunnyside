import React from "react";
import './_images-row.scss';
import cone from '../../assets/images/desktop/image-gallery-cone.jpg';
import milkBottle from '../../assets/images/desktop/image-gallery-milkbottles.jpg';
import orange from '../../assets/images/desktop/image-gallery-orange.jpg';
import sugercubes from '../../assets/images/desktop/image-gallery-sugarcubes.jpg';

const ImagesRow = () => {
  return (
    <div className="images-row-container">
      <div className="images-container">
        <img src={cone} alt="cone"/>
        <img src={milkBottle} alt="milkBottle"/>
        <img src={orange} alt="orange"/>
        <img src={sugercubes} alt="sugercubes"/>
      </div>
    </div>
  )
}

export default ImagesRow;