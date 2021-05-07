import Degrees from "../container/Degrees";
import Header from "../components/Header/Header";
import InternshipExperience from "../container/InternshipExperience";
import Introduction from "../container/Introduction/Introduction";
import Layout from "../Layout/Layout";
import Profession from "../container/Profession";
import Project from "../container/Project";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import SkillsContainer from "../components/SkillsContainer";

const Home = () => {
	return (
		<div>
			<Layout>
				<Introduction />
				<Profession />
				<SkillsContainer />
				<InternshipExperience />
				<Project />
				<Degrees />
				<ScrollToTop />
			</Layout>
		</div>
	);
};

export default Home;
