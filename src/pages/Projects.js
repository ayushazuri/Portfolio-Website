import Layout from "../Layout/Layout";
import Project from "../container/Project";
import ProjectIntro from "../container/ProjectIntro";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";

const Projects = () => {
	return (
		<Layout page="Projects">
			<ProjectIntro />
			<Project />
			<ScrollToTop />
		</Layout>
	);
};

export default Projects;
