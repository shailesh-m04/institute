import React, { useState } from "react";
import CourseCard from "../../components/CourseCard";
import { courses } from "../../data/coursesData";

const AllCourses = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredCourses =
    activeFilter === "ALL"
      ? courses
      : courses.filter((course) => course.category === activeFilter);

  return (
    <section className="py-20 bg-[#F3F3F2]">
      <div className="max-w-360 mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="text-sm font-semibold text-(--primary)">
            Popular Courses
          </span>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#0A2540]">
            Choose Our Top Courses
          </h2>

          <p className="mt-4 text-gray-500">
            Get latest news in your inbox. Consectetur adipiscing elit
            adipiscing elit sed do eiusmod tempor incididunt.
          </p>
        </div>

        <div className="flex justify-center mb-14">
          <div className="relative flex bg-white rounded-full p-1 shadow-md">
            <span
              className={`
        absolute top-1 bottom-1 w-24 rounded-full bg-(--primary)
        transition-all duration-300 ease-in-out
        ${
          activeFilter === "ALL"
            ? "left-1"
            : activeFilter === "CAD"
              ? "left-[97px]"
              : "left-[193px]"
        }
      `}
            />

            {["ALL", "CAD", "CAM"].map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`
          relative z-10 w-24 py-2 text-sm font-semibold rounded-full
          transition-colors duration-300
          ${activeFilter === type ? "text-white" : "text-gray-600"}
        `}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              slug={course.slug}
              name={course.name}
              desc={course.desc}
              image={course.image}
              duration={course.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
