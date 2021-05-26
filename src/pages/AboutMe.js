import Achievements from "../container/Achievement";
import ChangeTheme from "../components/ChangeTheme";
import Contact from "../container/Contact";
import Footer from "../container/Footer";
import Header from "../components/Header/Header";
import { Helmet } from "react-helmet";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";

const AboutMe = () => {
  const isAboutPage = false;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Helmet>
        <title>{`Ayush's Portfolio | About`}</title>
        <html lang="en" />
        <meta name="description" content="Portfolio Website"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="author" content="Ayush Singh"></meta>
        <meta
          name="keywords"
          content="Portfolio, Ayush Singh, ReactJs, SASS, Javascript"
        ></meta>
      </Helmet>
      <Header isAboutPage={isAboutPage} />
      <Contact />
      <Achievements />
      <ChangeTheme />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default AboutMe;
