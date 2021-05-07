import ExperienceIntro from "../container/ExperienceIntro";
import InternshipExperience from "../container/InternshipExperience";
import Layout from "../Layout/Layout";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";

const Experience = () => {
	return (
		<Layout>
			<ExperienceIntro />
			<InternshipExperience />
			<ScrollToTop />
		</Layout>
	);
};

export default Experience;
