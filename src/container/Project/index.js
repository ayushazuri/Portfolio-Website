import "./index.scss";

import ProjectCards from "../../components/ProjectCards";
import React from "react";
import { projects } from "../../portfolio";

const Project = () => {
	return (
		<div className="project">
			<h1>Projects</h1>
			<div className="project__cards">
				{projects.projects.map((project, index) => {
					return <ProjectCards project={project} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Project;
