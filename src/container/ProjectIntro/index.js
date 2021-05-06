import "./index.scss";

import ProjectImg from "./ProjectsImg";
import React from "react";
import ThemeContext from "../../theme";
import { projects } from "../../portfolio";

const ProjectIntro = () => {
	const theme = React.useContext(ThemeContext);
	return (
		<div className="projectintro">
			<div className="projectintro__left">
				<ProjectImg theme={theme} />
			</div>
			<div className="projectintro__right">
				<h1>Projects</h1>
				<p style={{ color: theme.secondaryText }}>{projects.description}</p>
			</div>
		</div>
	);
};

export default ProjectIntro;
