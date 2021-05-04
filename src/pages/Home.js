import Degrees from "../container/Degrees";
import Header from "../components/Header/Header";
import InternshipExperience from "../container/InternshipExperience";
import Introduction from "../container/Introduction/Introduction";
import Layout from "../Layout/Layout";
import Profession from "../container/Profession";
import React from "react";
import SkillsContainer from "../components/SkillsContainer";

const Home = () => {
	return (
		<div>
			<Layout>
				{/* <Header /> */}
				<Introduction />
				<Profession />
				<SkillsContainer />
				<InternshipExperience />
				<Degrees />
			</Layout>
		</div>
	);
};

export default Home;
