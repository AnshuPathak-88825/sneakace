import React from "react";
import Slider from "../components/Slider";
const Customize = () => {
  return (
    <div className="w-full p-3 lg:p-10">
      <div className="flex flex-col gap-3 items-center justify-center mt-5">
        <h2 className="tracking-wider text-secondary text-center">
          ADD YOUR MAGIC TOUCH
        </h2>
      </div>

      <div className="py-10">
        <Slider />
      </div>

      <div className="container mx-auto flex flex-col gap-10 items-center justify-center text-center">
        <p>
          When all that inspiration goes into your shoe design, anything feels
          possible. Voilà! Try your hand at making that so you lace with
          SneakAce&apos;s co-creation service.
        </p>

        <button className="w-[200px] py-4 rounded-full bg-primary text-background text-lg font-semibold transition-transform active:scale-95 mb-3 hover:opacity-75">
          Customize
        </button>
      </div>
    </div>
  );
};

export default Customize;
