import { CircleCheck } from "lucide-react";
import React from "react";
import Button from "../Buttons";

const plans = [
  {
    title: "Basic",
    price: "₹199",
    duration: "/month",
    desc: "For individuals & beginners",
    features: [
      "One year premium access",
      "Unlimited courses",
      "1000+ lessons & growing",
      "Random supporter",
      "Free eBook downloads",
      "Premium tutorials",
      "Unlimited registered user",
    ],
  },
  {
    title: "Standard",
    price: "₹299",
    duration: "/month",
    desc: "For an individual and begineer",
    featured: true,
    features: [
      "One year premium access",
      "Unlimited courses",
      "1000+ lessons & growing",
      "Random supporter",
      "Free eBook downloads",
      "Premium tutorials",
      "Unlimited registered user",
    ],
  },
  {
    title: "Premium",
    price: "₹399",
    duration: "/month",
    desc: "For an individual and begineer",
    features: [
      "One year premium access",
      "Unlimited courses",
      "1000+ lessons & growing",
      "Random supporter",
      "Free eBook downloads",
      "Premium tutorials",
      "Unlimited registered user",
    ],
  },
];

const Plans = () => {
  return (
    <section className="w-full py-14">
      <div className="space-y-8 text-center max-w-4xl mx-auto">
        <span className="text-sm  font-semibold text-(--primary)">
          Pricing Plans
        </span>

        <h2 className="text-2xl md:text-5xl font-medium text-[#0A2540] mt-3">
          Pick A Plan That’s Right For You
        </h2>

        <p className="text-gray-500">
          Get the latest updates and choose a plan that fits your needs.
        </p>
      </div>

      <div className="mt-14 flex flex-col lg:flex-row gap-8 justify-center items-stretch">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`
              relative
              bg-white
              rounded-2xl
              shadow-lg
            
              w-90
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            `}
          >
            <div className="flex items-start">
              <span className="text-xl font-medium text-white bg-(--primary) py-2 px-3 ">
                {plan.title}
              </span>
            </div>

            <div className="my-6">
              <span className="text-4xl font-bold text-[#0A2540]">
                {plan.price}
              </span>
              {/* <span className="text-gray-400">{plan.duration}</span> */}
            </div>

            <p className="text-gray-500 border-b pb-4 mb-4">{plan.desc}</p>

            <ul className="flex flex-col gap-4 text-sm text-gray-600 mb-6 p-4">
              {plan.features.map((feature, idx) => (
                <div className="flex gap-3 items-center">
                  <div className="">
                    <CircleCheck color="#1AB820" />
                  </div>
                  <div className="">{feature}</div>
                </div>
              ))}
            </ul>

            <Button
              className={`
                rounded-xl
                font-medium
                transition-all
                bg-(--primary) flex items-center justify-center
                mb-2
              `}
            >
              Buy Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
