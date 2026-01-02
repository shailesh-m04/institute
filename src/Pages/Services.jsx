import React from "react";
import PageHeader from "../components/Page";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/servicesData";

const Services = () => {
  return (
    <>
      <PageHeader title="Services"/>
      
      <section className="py-20 bg-[#F7F9FA]">
        <div className="max-w-360 mx-auto px-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default Services;
