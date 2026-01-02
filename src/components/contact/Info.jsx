import React from "react";
import img1 from "../../assets/join-1.png";
import img2 from "../../assets/join-2.png";
import img3 from "../../assets/join-3.png";
import Heading from "../heading";

const info = [
  {
    img: img1,
    title: "Office Address",
    desc: "775 15h Street, Office 478, New York",
  },
  {
    img: img2,
    title: "Phone Number",
    desc: "(+1) 84084-12569, (+1)184084-12569",
  },
  {
    img: img3,
    title: "Email",
    desc: "example@gmail.com, courses@gmail.com",
  },
];

const Info = () => {
  return (
    <section className="py-14 bg-[#F3F3F3]">
      <div className="max-w-360 mx-auto px-6">
        <div className="text-center flex items-center justify-center">
          <Heading
            title={"   Contact Info"}
            subtitle={"Get In Touch With Us"}
            desc={
              "Get latest news in your inbox. Consectetur adipiscing elitadipiscing elitse ddo eiusmod tempor incididunt"
            }
          />
        </div>

        <div className="relative flex flex-wrap items-center justify-center  gap-8 mt-16 z-50">
          {info.map((item, index) => (
            <div
              key={index}
              className=" rounded-2xl p-6 text-center  hover:shadow-md hover:bg-white  transition-transform duration-600 hover:scale-105"
            >
              <div className="w-30 h-30 mx-auto mb-4 flex items-center justify-center gap-4 ">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-25 h-25 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#0A2540]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
