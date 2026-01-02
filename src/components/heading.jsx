import React from "react";

const Heading = ({
  title,
  subtitle,
  desc,
  align = "center",
}) => {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div className={`space-y-2 flex flex-col ${alignment}`}>
      {title && (
        <span className="text-sm font-semibold text-(--primary)">
          {title}
        </span>
      )}

      <h2 className="text-2xl md:text-5xl font-medium text-[#0A2540] leading-tight">
        {subtitle}
      </h2>

      {desc && (
        <p className="text-gray-500 leading-relaxed max-w-xl p-2 text-sm sm:text-lg">
          {desc}
        </p>
      )}
    </div>
  );
};

export default Heading;
