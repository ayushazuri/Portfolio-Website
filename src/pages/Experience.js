import ExperienceIntro from "../container/ExperienceIntro";
import InternshipExperience from "../container/InternshipExperience";
import Layout from "../Layout/Layout";
import React from "react";

const Experience = () => {
	return (
		<Layout page="Experience">
			<ExperienceIntro />
			<InternshipExperience />
		</Layout>
	);
};

export default Experience;
