import React from "react";
import img1 from "../../assets/img1.png";
import bg from "../../assets/shape2.png";
import Button from "../Buttons";
import Heading from "../heading";
import img11 from "../../assets/img11.png"
import img12 from "../../assets/img12.png"
import img13 from "../../assets/img13.png"
import img14 from "../../assets/img14.png"

const services = [
  {
    title: "Expert Instructions",
    desc: "Video courses after working in coffee shops around the world.",
    img:img11,
  },
  {
    title: "Scholarship",
    desc: "Video courses after working in coffee shops around the world.",
     img:img12,
  },
  {
    title: "Recorded Sessions",
    desc: "Video courses after working in coffee shops around the world.",
     img:img13,
  },
  {
    title: "Practical Learning",
    desc: "Video courses after working in coffee shops around the world.",
     img:img14,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-360 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start">
          <Heading align="start"
            title={" Our Services"}
            subtitle={" Why Choose Training Institute Courses"}
            desc={
              " Get latest news in your inbox. Consectetur adipiscing elit adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />

          {/* <Button className="mt-4"> Read More</Button> */}
        </div>

        <div className="relative flex justify-center">
          <img
            src={bg}
            alt=""
            className="absolute inset-0 w-full h-full object-contain z-10"
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 z-50">
            {services.map((item, i) => (
              <div key={i} className="relative">
                {i === 0 && (
                  <div
                    className="
            absolute 
             -left-5
            w-35 h-35
             bg-linear-to-t
        from-[#F7E8B0]
        via-[#F8F1BB]
        to-[#FCCFBD]
            rounded-2xl
            shadow-md
            z-0
          "
                  />
                )}
                ,
                {i === services.length - 1 && (
                  <div
                    className="
            absolute 
            -bottom-5 -right-5
            w-35 h-35
             bg-linear-to-b
        from-[#F7E8B0]
        via-[#F8F1BB]
        to-[#FCCFBD]
            rounded-2xl
            shadow-md
            z-0
            animate-live-gradient
          "
                    style={{
                      background:
                        "linear-gradient(270deg, #F7E8B0, #F8F1BB, #FCCFBD)",
                    }}
                  />
                )}
                <div
                  className="
          relative
          bg-white
          rounded-2xl
          shadow-lg
          p-8
          text-center
          w-64
          z-10
        "
                >
                  <img src={item.img} alt="" className="mx-auto mb-4" width={90} />

                  <h4 className="text-lg font-semibold text-[#0A2540]">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
