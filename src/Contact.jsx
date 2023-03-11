import React from "react";
import image from "./images/contactimg.jpg";

const Contact = () => {
  return (
    <div className="w-full relative">
      <img className="w-full h-[400px]" src={image} alt="" />
      <p className="absolute top-[30%] left-[48%] text-4xl font-bold">
        Contact
      </p>
    </div>
  );
};

export default Contact;
