import React from "react";
import { Link } from "react-router-dom";
import { designCourses, mechanicalCourses } from "../data/coursesData";

const CoursesMegaMenu = ({ mobile = false, closeMenu }) => {
  const containerStyles = mobile
    ? "w-full"
    : "absolute left-1/2 -translate-x-1/2 top-full w-screen max-w-[55vw] bg-white shadow-2xl border-t border-gray-100 z-[999]";

  return (
    <div className={containerStyles}>
      <div className={mobile ? "px-4 py-4" : "max-w-7xl mx-auto px-10 py-10"}>
        <div
          className={mobile ? "flex flex-col gap-8" : "grid grid-cols-2 gap-0"}
        >
          <div className={mobile ? "flex flex-col" : "flex flex-col px-10 "}>
            <h2 className="text-(--primary) text-base font-bold mb-4 uppercase tracking-wider">
              Mechanical
            </h2>

            <div className="flex flex-col gap-2">
              {mechanicalCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.slug}`}
                  onClick={closeMenu}
                  className="py-1.5 text-sm text-gray-600 hover:text-(--primary) transition"
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>

          <div className={mobile ? "flex flex-col" : "flex flex-col pr-10"}>
            <h2 className="text-(--primary) text-base font-bold mb-4 uppercase tracking-wider">
              Architecture | Civil
            </h2>

            <div className="flex flex-col gap-2">
              
              {designCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.slug}`}
                  onClick={closeMenu}
                  className="py-1.5 text-sm text-gray-600 hover:text-(--primary) transition"
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesMegaMenu;
