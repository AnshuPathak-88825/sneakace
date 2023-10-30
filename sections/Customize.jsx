import React from "react";
import Slider from "../components/Slider";
const Customize = () => {
  return (
    <div className="w-full p-3">
      <div className="flex flex-col gap-3 items-center justify-center mt-5">
        <h2 className="tracking-wider text-secondary text-center">
          ADD YOUR MAGIC TOUCH
        </h2>
        <p className="text-3xl sm:text-3xl lg:text-4xl">Customize</p>
      </div>

      <div className="py-10">
        <Slider />
      </div>

      <div className="container mx-auto flex items-center justify-center text-center">
        <p>
          When all that inspiration goes into your shoe design, anything feels
          possible. Voilà! Try your hand at making that so you lace with
          SneakAce&apos;s co-creation service.
        </p>
      </div>
    </div>
  );
};

export default Customize;
