import "./index.scss";

import Button from "../../StyledComponents/button.style.js";
import { Fade } from "react-reveal";
import ProjectCards from "../../components/ProjectCards";
import React from "react";
import ViewMore from "../../components/ViewMore";
import { aboutMe } from "../../portfolio";
import { projects } from "../../portfolio";

const Project = ({ isHome }) => {
	React.useEffect(() => {
		!isHome && window.scrollTo(0, 0);
	}, [isHome]);

	return (
		<div className="project">
			<Fade duration={2000} top>
				<h1>Projects</h1>
			</Fade>

			<Fade duration={2000} distance="100px" bottom>
				<div className="project__cards">
					{projects?.limit
						? projects.projects
								.slice(0, projects?.limit)
								.map((project, index) => {
									return <ProjectCards project={project} key={index} />;
								})
						: projects.projects.map((project, index) => {
								return <ProjectCards project={project} key={index} />;
						  })}
					{}
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
			{isHome && <ViewMore to="projects" />}
		</div>
	);
};

export default Project;
