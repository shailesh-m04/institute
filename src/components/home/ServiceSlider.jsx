import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "../../data/servicesData";
import ServiceCard from "../ServiceCard";
import Heading from "../heading";

const ServiceSlider = () => {
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

  const maxIndex = Math.max(services.length - visible, 0);

  const prev = () => setIndex(index === 0 ? maxIndex : index - 1);
  const next = () => setIndex(index === maxIndex ? 0 : index + 1);

  useEffect(() => {
    if (services.length <= visible) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [maxIndex, visible]);

  return (
    <>
      <div className="py-12">
        <Heading
          align="center"
          title={" Our Services"}
          subtitle={" Why Choose Training Institute Courses"}
          desc={
            " Get latest news in your inbox. Consectetur adipiscing elit adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        ></Heading>
        <div className="relative mt-6 px-4 sm:px-4 max-w-7xl mx-auto">
          {services.length > visible && (
            <>
              <button
              onClick={prev}
              className="absolute left-1 sm:-left-10 top-1/2 -translate-y-1/2
                         bg-white shadow-md w-9 h-9 sm:w-10 sm:h-10
                         rounded-lg flex items-center justify-center z-20"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={next}
              className="absolute right-1 sm:-right-10 top-1/2 -translate-y-1/2
                         bg-white shadow-md w-9 h-9 sm:w-10 sm:h-10
                         rounded-lg flex items-center justify-center z-20"
            >
              <ArrowRight size={18} />
            </button>
            </>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / visible)}%)`,
              }}
            >
              {services.map((service, i) => (
                <div
                  key={i}
                  style={{ width: `${100 / visible}%` }}
                  className="px-1 sm:px-2 shrink-0  scale-[0.92] sm:scale-100"
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
