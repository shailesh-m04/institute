import React from "react";
import { FaBootstrap, FaGooglePlusG } from "react-icons/fa";
import { GiFireFlower } from "react-icons/gi";
import { TbBrandEnvato } from "react-icons/tb";

const Blank = () => {
  return (
    <section className="py-20 md:py-28 bg-[#05162A]">
      <div className="
        max-w-360 mx-auto px-6
        flex flex-col lg:flex-row
        items-center lg:justify-between
        gap-12
      ">
        <div className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center lg:text-left">
          <h2 className="text-white">
            Trusted by <br />
            500+ Companies
          </h2>
        </div>

        <div className="
          flex flex-wrap
          items-center justify-center lg:justify-between
          gap-8 sm:gap-10
        ">
          <TbBrandEnvato className="text-[#14324F] hover:text-white transition-all duration-300 h-16 w-16 sm:h-20 sm:w-20 lg:h-25 lg:w-25" />
          <GiFireFlower className="text-[#14324F] hover:text-white transition-all duration-300 h-16 w-16 sm:h-20 sm:w-20 lg:h-25 lg:w-25" />
          <FaBootstrap className="text-[#14324F] hover:text-white transition-all duration-300 h-16 w-16 sm:h-20 sm:w-20 lg:h-25 lg:w-25" />
          <GiFireFlower className="text-[#14324F] hover:text-white transition-all duration-300 h-16 w-16 sm:h-20 sm:w-20 lg:h-25 lg:w-25" />
          <FaGooglePlusG className="text-[#14324F] hover:text-white transition-all duration-300 h-16 w-16 sm:h-20 sm:w-20 lg:h-25 lg:w-25" />
        </div>
      </div>
    </section>
  );
};

export default Blank;
