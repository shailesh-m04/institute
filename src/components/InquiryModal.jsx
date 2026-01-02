import Button from "./Buttons";
import { useState } from "react";
import emailJs from "emailjs-com";

const InquiryModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailJs
      .send(
        "service_jfglhjg",
        "template_aldsehj",
        formData,
        "6OhB4_bF6e8-C2l-_"
      )
      .then(
        () => {
          alert("Inquiry sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send inquiry");
          console.error(error);
        }
      );
  };

  return (
    <div className="fixed inset-0 z-100000 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-xl p-8">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-[#0A2540] mb-6 text-center">
          Submit Your Inquiry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              className="input h-12 w-full px-4 bg-white rounded-md outline-none  focus:border-(--primary) shadow"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              required
            />
            <input
              className="h-12 w-full px-4 bg-white rounded-md outline-none  focus:border-(--primary) shadow"
              placeholder="Email *"
              name="email"
              onChange={handleChange}
              required
            />
            <input
              className="h-12 w-full px-4 bg-white rounded-md outline-none  focus:border-(--primary) shadow"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
            />
            <select
              className="h-12 w-full px-4 bg-white rounded-md outline-none  focus:border-(--primary) shadow "
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Subject
              </option>

              <option value="autocad">AutoCAD</option>
              <option value="solidworks">SolidWorks</option>
              <option value="revit">Revit</option>
              <option value="3dsmax">3ds Max</option>
              <option value="vray">V-Ray</option>
            </select>
          </div>

          <textarea
            className="h-30 py-2 w-full px-4 bg-white rounded-md outline-none  focus:border-(--primary) shadow"
            name="message"
            placeholder="Message *"
            onChange={handleChange}
            required
          />

          <div className="pt-2 flex justify-center">
            <Button type="submit" icon={false}>
              Submit Inquiry
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryModal;
