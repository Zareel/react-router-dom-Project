import React from "react";
import image from "./images/homeimg.jpg";

const Home = () => {
  return (
    <div className="w-full relative">
      <img className="w-full h-[400px]" src={image} alt="" />
      <p className="absolute top-24 left-[45%] text-4xl font-bold">Home</p>
    </div>
  );
};

export default Home;
