import "./index.scss";

import { Fade } from "react-reveal";
import ProjectImg from "./ProjectsImg";
import React from "react";
import ThemeContext from "../../theme";
import { projects } from "../../portfolio";

const ProjectIntro = () => {
	const theme = React.useContext(ThemeContext);
	return (
		<div className="projectintro">
			<Fade duration={2000} left>
				<div className="projectintro__left">
					<ProjectImg theme={theme} />
				</div>
			</Fade>
			<Fade duration={2000} right>
				<div className="projectintro__right">
					<h1>Projects</h1>
					<p style={{ color: theme.secondaryText }}>{projects.description}</p>
				</div>
			</Fade>
		</div>
	);
};

export default ProjectIntro;
