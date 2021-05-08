import "./index.scss";

import Button from "../../StyledComponents/button.style.js";
import { Fade } from "react-reveal";
import ProjectCards from "../../components/ProjectCards";
import React from "react";
import { aboutMe } from "../../portfolio";
import { projects } from "../../portfolio";

const Project = ({ isHome }) => {
	return (
		<div className="project">
			<Fade duration={2000} top>
				<h1>Projects</h1>
			</Fade>

			<Fade duration={2000} bottom>
				<div className="project__cards">
					{projects.projects.map((project, index) => {
						return <ProjectCards project={project} key={index} />;
					})}
				</div>
			</Fade>

			{!isHome && (
				<a
					href={aboutMe.githubLink}
					target="_blank"
					rel="noopener noreferrer"
					className="project__buttons"
				>
					<Button>More Projects</Button>
				</a>
			)}
		</div>
	);
};

export default Project;
