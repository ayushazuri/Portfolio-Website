import "./index.scss";

import Button from "../../StyledComponents/button.style.js";
import ProjectCards from "../../components/ProjectCards";
import React from "react";
import { aboutMe } from "../../portfolio";
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
			<a
				href={aboutMe.githubLink}
				target="_blank"
				rel="noopener noreferrer"
				className="project__buttons"
			>
				<Button>More Projects</Button>
			</a>
		</div>
	);
};

export default Project;
