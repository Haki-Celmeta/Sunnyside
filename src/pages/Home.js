import React from "react";
import Navbar from "../components/Navbar/navbar";
import Hero from "../components/Hero/Hero";
import ShuffleSection from "../components/Shuffle-section/Shuffle-section";
import TwoImages from "../components/two-image-sections/Two-image";
import Testimonials from "../components/Testimonials/Testimonials";
import ImagesRow from "../components/Images-row/Images-row";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShuffleSection />
      <TwoImages />
      <Testimonials />
      <ImagesRow />
      <Footer />
    </>
  )
}

export default Home;