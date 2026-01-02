import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ image, tag, title, description }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ">
      <div className="relative h-68 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {tag && (
          <span className="absolute bottom-4 left-4 bg-(--primary) text-white text-xs font-medium px-4 py-1.5 rounded-md">
            {tag}
          </span>
        )}
      </div>

      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-[#0A2540] mb-3 group-hover:text-(--primary) transition">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
