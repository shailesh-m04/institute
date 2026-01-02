import React from "react";
import PageHeader from "../components/Page";
import Info from "../components/contact/Info";
import Form from "../components/contact/form";

const Contact = () => {
  return (
    <>
      <PageHeader title="Contact Us" />
      <Info />
      <Form />
    </>
  );
};

export default Contact;
