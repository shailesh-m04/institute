import React from "react";
import { ArrowRight, Play } from "lucide-react";
import bg from "../assets/bg.png";
import img4 from "../assets/img4.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import AboutSection from "../components/home/about";
import Courses from "../components/home/courses";
import ServicesSection from "../components/home/services";
import Plans from "../components/home/plans";
import Button from "../components/Buttons";
import Services from "./Services";
import { services } from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";
import Blank from "../components/about/blank";
import ServiceSlider from "../components/home/ServiceSlider";
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F2F2F2]">
      <div className="max-w-360 mx-auto px-6 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-[#0A2540]">
            Let’s Start Smart <br />
            Learning
            <span className="relative block mt-4 text-(--primary) w-fit mx-auto lg:mx-0">
              <span className="relative z-10 px-6 py-2 font-bold">Today</span>

              <span
                className="
              absolute inset-0
              border-2 border-(--primary)
              rounded-md
              -rotate-3
            "
              ></span>
            </span>
          </h1>

          <p className="text-gray-500 max-w-xl leading-relaxed mx-auto lg:mx-0">
            Get latest news in your inbox. Consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button>Contact Now</Button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 lg:w-105 lg:h-105 bg-orange-100 rounded-full -z-10"></div>

          <img
            src={bg}
            alt="student"
            className="w-full max-w-sm sm:max-w-md lg:max-w-full object-contain"
          />

          <div className="hidden lg:block absolute top-10 left-0">
            <img src={img1} alt="" height={220} width={220} />
          </div>

          <div className="hidden lg:block absolute bottom-10 left-0">
            <img src={img3} alt="" height={220} width={220} />
          </div>

          <div className="hidden lg:block absolute top-10 right-0">
            <img src={img2} alt="" height={220} width={220} />
          </div>

          <div className="hidden lg:block absolute bottom-10 right-0">
            <img src={img4} alt="" height={220} width={220} />
          </div>
        </div>
      </div>
      <Blank />
      <AboutSection />
      <Courses />
      <ServicesSection />

      {/* <section className="bg-white py-16">
        <div className="max-w-360 mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section> */}
      <ServiceSlider />
    </section>
  );
};

export default Hero;
