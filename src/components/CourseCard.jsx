import React from "react";
import { Clock } from "lucide-react";
import Button from "./Buttons";
import PageHeader from "./Page";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ name, desc, image, duration, slug }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/courses/${slug}`);
  };
  return (
    <div className="bg-white rounded-2xl shadow-sm p-3 md:p-6 h-full flex flex-col hover:shadow-md transition">
      <img
        src={image}
        alt={name}
        className="
          rounded-xl
          w-full
          object-cover
          mb-4
          h-36 sm:h-44 md:h-48
        "
      />

      <h3 className="text-lg font-semibold text-[#0A2540]">{name}</h3>

      <p className="text-gray-500 text-sm mt-2 flex-1">{desc}</p>

      <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
        <Clock size={16} />
        {duration}
      </div>

      <Button
        onClick={(e) => {
          e.stopPropagation();
          goToDetail();
        }}
        className="mt-6 rounded-xl font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
      >
        Enroll Now
      </Button>
    </div>
  );
};

export default CourseCard;
