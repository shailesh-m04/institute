import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../data/coursesData";
import Button from "../Buttons";
import PageHeader from "../Page";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return <div className="text-center py-20 text-lg">Course not found</div>;
  }

  return (
    <section className="bg-[#F7F9FA]">
      <div className="">
        <PageHeader title={course.name} />
      </div>

      <div className="max-w-360 mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 py-8 min-h-screen">
        <div
          className="lg:col-span-8 bg-white p-5 space-y-6 rounded-2xl shadow-sm 
                 lg:sticky top-5 self-start"
        >
          <Button icon={false} className="rounded-md mb-8 text-sm">
            Overview
          </Button>

          <h1 className="text-2xl md:text-4xl font-semibold text-[#0A2540] leading-tight">
            {course.name}
          </h1>

          <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
            {course.overview?.map((para, index) => (
              <p className="text-sm lg:text-md" key={index}>{para}</p>
            ))}
          </div>

          <Divider />

          <Section title="What you’ll learn" items={course.learn} />
          <Divider />

          <Section title="Requirements" items={course.requirements} />
          <Divider />

          <Section title="Course Content" items={course.content} />
        </div>

        <div className="lg:col-span-4 space-y-6 sticky top-5 self-start">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img
              src={course.image || "/assets/courses/default.jpg"}
              alt={course.name}
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4 text-sm">
            <Info
              label="Certificate"
              value={course.details?.certificate || "—"}
            />
            <Info label="Duration" value={course.details?.duration || "—"} />
            <Info label="Students" value={course.details?.students || "—"} />
            <Info
              label="Assessments"
              value={course.details?.assessments || "—"}
            />
            <Info label="Job assurance" value={course.details?.job || "—"} />
            <div className=" p-6 rounded-2xl  flex flex-col gap-4">
              <button className="border border-(--primary) text-(--primary) py-3 rounded-lg font-medium hover:bg-(--primary) hover:text-white transition">
                Enroll Now
              </button>
              {/* <button className="border border-(--primary) text-(--primary) py-3 rounded-lg font-medium hover:bg-(--primary) hover:text-white transition">
              Corporate Training
            </button>
            <button className="border border-(--primary) text-(--primary) py-3 rounded-lg font-medium hover:bg-(--primary) hover:text-white transition">
              Online Training
            </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section = ({ title, items = [] }) => (
  <div className="mt-8">
    <h2 className="text-xl font-semibold text-[#0A2540] mb-4">{title}</h2>
    <ul className="space-y-3 text-gray-600 text-[15px]">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-(--primary)">›</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Divider = () => <div className="my-10 border-t border-gray-200" />;

const Info = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium text-gray-800">{value}</span>
  </div>
);

export default CourseDetail;
