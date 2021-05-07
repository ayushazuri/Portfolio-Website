import Layout from "../Layout/Layout";
import Profession from "../container/Profession";
import Proficiency from "../container/Proficiency";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import SkillsContainer from "../components/SkillsContainer";

const Skills = () => {
	return (
		<Layout>
			<Profession />
			<SkillsContainer />
			<Proficiency />
			<ScrollToTop />
		</Layout>
	);
};

export default Skills;
