import Degrees from "../container/Degrees";
import InternshipExperience from "../container/InternshipExperience";
import Introduction from "../container/Introduction/Introduction";
import Layout from "../Layout/Layout";
import Profession from "../container/Profession";
import Project from "../container/Project";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import SkillsContainer from "../components/SkillsContainer";

const Home = () => {
	const isHome = true;
	return (
		<div>
			<Layout>
				<Introduction />
				<Profession />
				<SkillsContainer />
				<InternshipExperience />
				<Project isHome={isHome} />
				<Degrees />
				<ScrollToTop />
			</Layout>
		</div>
	);
};

export default Home;
