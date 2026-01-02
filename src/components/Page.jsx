import React from "react";
import bgImage from "../assets/837477_file.svg";
const PageHeader = ({ title, subtitle }) => {
  return (
    <section
      className="relative w-full bg-cover   bg-no-repeat "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-360 mx-auto px-6 py-10 sm:15 md:25 lg:py-32">
        <h1 className="text-white text-xl md:text-4xl font-semibold">
          {title}
        </h1>

        {subtitle && <p className="mt-2 text-gray-300 max-w-xl">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHeader;
