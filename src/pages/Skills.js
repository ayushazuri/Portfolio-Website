import Layout from "../Layout/Layout";
import Profession from "../container/Profession";
import React from "react";
import SkillsContainer from "../components/SkillsContainer";

const Skills = () => {
	return (
		<Layout>
			<Profession />
			<SkillsContainer />
		</Layout>
	);
};

export default Skills;
