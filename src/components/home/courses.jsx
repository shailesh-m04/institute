import React from "react";
import CoursesSlider from "./slider";
import Heading from "../heading";

const Courses = () => {
  return (
    <section className="py-14 bg-[#F3F3F2]">
      <div className="max-w-360 mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-center">
          <Heading 
            title={"Popular Courses"}
            subtitle={"Choose Our Top Courses"}
            desc={
              "Get latest news in your inbox. Consectetur adipiscing elit adipiscing elit sed do eiusmod tempor incididunt."
            }
          />
        </div>

        <CoursesSlider />
      </div>
    </section>
  );
};

export default Courses;
