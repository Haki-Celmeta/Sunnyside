import React from "react";
import './_testimonials.scss';
import Testimonial from "./Testimonial";
import emily from '../../assets/images/profiles/image-emily.jpg';
import thomas from '../../assets/images/profiles/image-thomas.jpg';
import jennie from '../../assets/images/profiles/image-jennie.jpg';

const Testimonials = () => {
  return (
    <div className="clients-testimonials-container">
      <div className="testimonials-container">
        <h3>client testimonials</h3>
        <div className="testimonials">
          <Testimonial
            image={emily}
            description="We put our trust in SunnySide and they delivered,
            making sure our needs were met and deadlines were always hit."
            name="Emily R."
            job="Marketing Director"
          />
          <Testimonial
            image={thomas}
            description="SunnySide's enthusiasm coupled with their keen interest in our
          brand's success made it a satisfying and enjoyable experience."
            name="Thomas S."
            job="Chief Operating Officer"
          />
          <Testimonial
            image={jennie}
            description="Incredible end result! Our sales increased over 400% 
          when we worked with SunnySide. Highly recommended!"
            name="Jennie F."
            job="Bussiness Owner"
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonials