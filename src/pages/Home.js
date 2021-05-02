import Header from "../components/Header/Header";
import Introduction from "../container/Introduction/Introduction";
import Layout from "../Layout/Layout";
import React from "react";

const Home = () => {
	return (
		<div>
			<Layout>
				{/* <Header /> */}
				<Introduction />
			</Layout>
		</div>
	);
};

export default Home;
