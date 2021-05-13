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
			<Layout page="Home">
				<Introduction isHome={isHome} />
				<Profession />
				<SkillsContainer isHome={isHome} />
				<InternshipExperience isHome={isHome} />
				<Project isHome={isHome} limit={6} />
				<Degrees isHome={isHome} />
				<ScrollToTop />
			</Layout>
		</div>
	);
};

export default Home;
