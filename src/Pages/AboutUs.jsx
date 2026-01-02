import Admission from "../components/about/admission";
import Blank from "../components/about/blank";
import History from "../components/about/history";
import AboutSection from "../components/home/about";
import PageHeader from "../components/Page";

const About = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <AboutSection />
      <Admission />
      <Blank />
      <History />
    </>
  );
};

export default About;
