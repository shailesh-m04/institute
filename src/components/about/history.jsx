import React, { useState } from "react";
import histoyImg from "../../assets/history.png";
import tab1 from "../../assets/tab1.jpg";
import tab2 from "../../assets/tab2.jpg";
import tab3 from "../../assets/tab3.jpg";
import Heading from "../heading";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { GiFireFlower } from "react-icons/gi";
import { IoMdAnalytics } from "react-icons/io";

const CONTENT = {
  history: {
    subtitle: "SEA History",
    desc: "Solidworks Engineering Academy started with an aim of teaching the latest design software to students and professionals who want to build their career in design industries.",
    image: tab1,
  },
  mission: {
    subtitle: "SEA Mission",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blan ditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, sim ilique sunt in culpa.",
    image: tab2,
  },
  administration: {
    subtitle: "SEA Administration",
    desc: "We follow hi-tech centralized Administration system to maintain on time co-ordination with our student and keep them up to date with latest techniques and technology to them.",
    image: tab3,
  },
};

const History = () => {
  const [active, setActive] = useState("history");
  return (
    <section className="py-20 bg-white">
      <div className="max-w-360 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center">
          <div className="" />

          <img
            src={histoyImg}
            alt="student"
            className="relative z-10 w-full max-w-md h-130 rounded-3xl object-cover"
          />

          <div className="absolute  top-10 z-20 space-y-6  md:top-8 lg:top-8 lg:right-6">
            <div
              onClick={() => setActive("history")}
              className={`w-56 h-30  rounded-xl shadow-lg flex flex-col items-center justify-center gap-2 hover:bg-(--primary) hover:text-white transition-all duration-300 ${
                active === "history" ? "bg-(--primary)" : "bg-white"
              }`}
            >
              <HiOutlineBanknotes
                className={` h-8 w-8 ${
                  active === "history" ? "text-white" : ""
                }`}
              />
              <h2
                className={`${
                  active === "history" ? "text-white" : ""
                } font-semibold`}
              >
                History
              </h2>
            </div>

            <div
              onClick={() => setActive("mission")}
              className={`w-56 h-30  rounded-xl shadow-lg flex flex-col items-center justify-center gap-2 hover:bg-(--primary) hover:text-white transition-all duration-300 ${
                active === "mission" ? "bg-(--primary)" : "bg-white"
              }`}
            >
              <GiFireFlower
                className={` h-8 w-8 ${
                  active === "mission" ? "text-white" : ""
                }`}
              />
              <h2
                className={`${
                  active === "mission" ? "text-white" : ""
                } font-semibold`}
              >
                Mission
              </h2>
            </div>

            <div
              onClick={() => setActive("administration")}
              className={`w-56 h-30  rounded-xl shadow-lg flex flex-col items-center justify-center gap-2 hover:bg-(--primary) hover:text-white transition-all duration-300 ${
                active === "administration" ? "bg-(--primary)" : "bg-white"
              }`}
            >
              <IoMdAnalytics
                className={` h-8 w-8 ${
                  active === "administration" ? "text-white" : ""
                }`}
              />
              <h2
                className={`${
                  active === "administration" ? "text-white" : ""
                } font-semibold`}
              >
                administration
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-center lg:text-left">
          <Heading
            align="start"
            subtitle={CONTENT[active].subtitle}
            desc={CONTENT[active].desc}
          />

          <img
            src={CONTENT[active].image}
            alt="tab"
            className="rounded-xl w-full max-w-lg mx-auto lg:mx-0 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default History;
