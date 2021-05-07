import Contact from "../container/Contact";
import Footer from "../container/Footer";
import Header from "../components/Header/Header";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";

const AboutMe = () => {
	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Header />
			<Contact />
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default AboutMe;
