import Header from "../components/Header/Header";
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
			</Layout>
		</div>
	);
};

export default Home;
