import React, { useState } from "react";
import emailJs from "emailjs-com";

const Form = () => {
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
    <section className="w-full bg-[#F3F3F3] py-16">
      <div className="max-w-360 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 h-100 bg-gray-300 rounded-xl flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5736501069914!2d72.63628747514105!3d23.039421479161966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86eccc955555%3A0xa3264203a3456a92!2sS.E.A-INSTITUTE%20OF%20DESIGN%20(Solidworks%20Authorized%20Training%20Center%20CAD%2CCAE%2CCFD%2CE-CAD%2C3D%20Printing)!5e0!3m2!1sen!2sin!4v1767163830121!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="lg:col-span-6">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540]">
                Get In Touch
              </h2>

              <p className="text-gray-600 max-w-md">
                Have any doubt or enquiry? Our support team are ready to help
                you 24/7.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    className="h-12 w-full px-4 bg-white rounded-md outline-none  focus:border-(--primary)"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    className="h-12 w-full px-4 bg-white rounded-md outline-none  focus:border-(--primary)"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    onChange={handleChange}
                    className="h-12 w-full px-4 bg-white rounded-md outline-none  focus:border-(--primary)"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    onChange={handleChange}
                    className="h-12 w-full px-4 bg-white rounded-md outline-none  focus:border-(--primary)"
                  />
                </div>

                <textarea
                  placeholder="Message"
                  name="message"
                  onChange={handleChange}
                  className="h-28 w-full px-4 py-3 bg-white rounded-md outline-none  resize-none focus:border-(--primary)"
                />

                <button
                  type="submit"
                  className="
                    w-fit mt-2
                    bg-(--primary) text-white
                    px-8 py-3 rounded-md font-medium
                    transition-all duration-300
                    hover:bg-black hover:scale-105
                  "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
