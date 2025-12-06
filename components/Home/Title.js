import React from "react";
import Reveal from "../Animations/ScrollReveal/Reveal";

function Title() {
  return (
    <Reveal>
      <div className="flex flex-col items-center p-6 text-black w-full text-center">
        <h1 className="text-4xl font-bold m-4 ">
          Welcome to NovaStack Technologies
        </h1>
        <p className="text-lg text-center max-w-2xl text-center">
          We are committed to delivering innovative tech solutions that drive
          success and transform businesses. Explore our services and discover how
          we can help you achieve your goals.
        </p>
      </div>
    </Reveal>
  );
}

export default Title;
