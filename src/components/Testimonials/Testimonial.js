import React from "react";

const Testimonial = ({image, description, name, job}) => {
  return (
    <div className="testimonial">
      <img src={image} alt="thomas profile" />
      <p>{description}</p>
      <div className="profile-info">
        <div>{name}</div>
        <div>{job}</div>
      </div>
    </div>
  )
}

export default Testimonial