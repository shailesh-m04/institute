import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Cources from "./Pages/Cources";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import CourseDetail from "./components/courses/CourseDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/courses" element={<Cources />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/courses/:slug" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
