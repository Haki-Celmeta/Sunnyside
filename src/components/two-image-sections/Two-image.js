import React from "react";
import './_two-image.scss';

const TwoImages = () => {
  return (
    <div className="graphic-photo-container">
      <div className="two-image-container">
        <div className="image-bg-container first-container">
          <div className="grap-ph-info">
            <h3>Graphic Design</h3>
            <p>
              Great design you memorable. We deliver artwork that underscores your
              brand message and captures potential client's attention.
            </p>
          </div>
        </div>
        <div className="image-bg-container second-container">
          <div className="grap-ph-info">
            <h3>Photography</h3>
            <p>
              Increase your credibility by getting the most stunning, high-quality
              photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoImages;