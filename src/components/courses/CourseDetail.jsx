import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../data/coursesData";
import Button from "../Buttons";
import PageHeader from "../Page";

const CourseDetail = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return <div className="text-center py-20 text-lg">Course not found</div>;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    setOpen(false);
  };
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
              <p className="text-sm lg:text-md" key={index}>
                {para}
              </p>
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

            <Info
              label="Assessments"
              value={course.details?.assessments || "—"}
            />

            <Info label="Job assurance" value={course.details?.job || "—"} />

            <div className="p-6 rounded-2xl flex flex-col gap-4">
              <button
                onClick={() => setOpen(true)}
                className="border border-(--primary) text-(--primary) py-3 rounded-lg font-medium hover:bg-(--primary) hover:text-white transition"
              >
                Download PDF
              </button>
            </div>
          </div>

          {/* Popup / Modal */}
          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-white w-full max-w-lg rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Download brochure
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none"
                  />

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none"
                  />

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="flex-1 border border-gray-200
                       rounded-lg py-2"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="flex-1 bg-(--primary) text-white rounded-lg py-2"
                    >
                      Download
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
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
