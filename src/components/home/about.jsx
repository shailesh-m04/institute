import React from "react";
import { Book, Monitor, GraduationCap, Award } from "lucide-react";
import img1 from "../../assets/img1.png";
import img4 from "../../assets/img4.png";
import aboutImg from "../../assets/about_img-1.png";
import Button from "../Buttons";
import Heading from "../heading";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-360 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-2 items-center">
        <div className="relative flex justify-center">
          <div className="absolute inset-0 rounded-[40px] bg-linear-to-b from-yellow-100 to-orange-100 -z-10"></div>

          <img
            src={aboutImg}
            alt="student"
            className="rounded-[40px] w-full max-w-sm sm:max-w-md object-cover"
          />

          <div className="hidden lg:block absolute top-5 left-0">
            <img src={img1} alt="" height={280} width={280} />
          </div>

          <div className="hidden lg:block absolute bottom-0 right-0">
            <img src={img4} alt="" height={220} width={220} />
          </div>
        </div>

        <div className="space-y-6 text-center lg:text-left">
          <Heading align="start"
            title="About"
            subtitle="Welcome to SEA Institute of Design"
            desc="Solidworks Authorized Training Center provides powerful and engaging
            software expertise for students and professionals to understand
            real-world mechanics of science, technology, and engineering.
            Students and professionals can focus on ideas, problem-solving,
            and innovation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <Feature icon={<Book />} title="Offline Courses" />
            <Feature icon={<Monitor />} title="Online Courses" />
            <Feature icon={<GraduationCap />} title="Diploma" />
            <Feature icon={<Award />} title="Certification" />
          </div>

          {/* <div className="flex justify-center lg:justify-start">
            <Button>Read More</Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title }) => (
  <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 hover:shadow-md transition">
    <div className="text-(--primary)">{icon}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">Video Courses</p>
    </div>
  </div>
);

export default AboutSection;
