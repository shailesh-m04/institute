import React from "react";
import CourseCard from "../../components/CourseCard";
import { courses, } from "../../data/coursesData";


const AllCourses = () => {
  return (
    <section className="py-20 bg-[#F3F3F2]">
      <div className="max-w-360 mx-auto px-6">

        <div className="max-w-2xl mx-auto text-center mb-16">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
             <CourseCard
              key={index}
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
