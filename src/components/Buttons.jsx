import { ArrowRight } from "lucide-react";

const Button = ({
  children = "Contact Now",
  icon = true,
  className = "",
  onClick,          // ✅ ADD
  type = "button",  // ✅ SAFE DEFAULT
}) => {
  return (
    <button
      type={type}
      onClick={onClick}   // ✅ PASS HERE
      className={`
        relative overflow-hidden
        inline-flex items-center gap-3
        px-7 py-2 rounded-xl
        font-semibold
        text-white
        bg-(--primary)
        group
        transition
        ${className}
      `}
    >
      <span
        className="
          absolute
          left-1/2 top-1/2
          h-4 w-5
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-black
          scale-0
          group-hover:scale-[20]
          transition-transform
          duration-800
          ease-out
        "
      />

      <span className="relative z-10">{children}</span>

      {icon && (
        <ArrowRight className="relative z-10 transition group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default Button;
