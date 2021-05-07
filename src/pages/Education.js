import Certification from "../container/Certification";
import Degrees from "../container/Degrees";
import EducationIntro from "../container/EducationIntro";
import Layout from "../Layout/Layout";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";

const Education = () => {
	return (
		<Layout>
			<EducationIntro />
			<Degrees />
			<Certification />
			<ScrollToTop />
		</Layout>
	);
};

export default Education;
