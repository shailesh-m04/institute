import React from "react";
import aboutImg from "../../assets/about.jpg";
import Heading from "../heading";
import Button from "../Buttons";

const Admission = () => {
  return (
    <section className="py-16 bg-[#F3F3F3]">
      <div className="max-w-360 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-2 items-center">
      
        <div className="relative flex justify-center">
          <div className="absolute inset-0  bg-linear-to-b from-yellow-100 to-orange-100 -z-10"></div>

          <img
            src={aboutImg}
            alt="student"
            className="rounded-md  w-full max-w-sm sm:max-w-md object-cover"
          />
        </div>

        <div className="space-y-6 text-center lg:text-left">
          <Heading align="start"
            subtitle="Admission Open for 2026"
            desc="Grab an exciting offer to full fill your dream of to become professionals in designing field with globly valid certification courses."
          />
          <Button icon={false}> Apply Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Admission;
