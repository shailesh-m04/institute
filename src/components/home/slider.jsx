import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CourseCard from "../../components/CourseCard";
import { courses } from "../../data/coursesData";



const CoursesSlider = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = courses.length - visible;

  const prev = () => setIndex(index === 0 ? maxIndex : index - 1);
  const next = () => setIndex(index === maxIndex ? 0 : index + 1);

   useEffect(() => {
    if (courses.length <= visible) return;
  
    const timer = setInterval(() => {
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 3000); 
  
    return () => clearInterval(timer);
  }, [maxIndex, visible]);
  return (
    <div className="relative mt-12 sm:px-8">
      <button
        onClick={prev}
        className="absolute -left-4 sm:-left-10 top-1/2 -translate-y-1/2
                   bg-white shadow-lg w-8 h-8 sm:w-12 sm:h-12 rounded-xl
                   flex items-center justify-center z-20"
      >
        <ArrowLeft />
      </button>

      <button
        onClick={next}
        className="absolute -right-4 sm:-right-10 top-1/2 -translate-y-1/2
                   bg-white shadow-lg w-8 h-8 sm:w-12 sm:h-12 rounded-xl
                   flex items-center justify-center z-20"
      >
        <ArrowRight />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visible)}%)`,
          }}
        >
          {courses.map((course, i) => (
            <div
              key={i}
              style={{ width: `${100 / visible}%` }}
              className="px-3  shrink-0"
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSlider;
