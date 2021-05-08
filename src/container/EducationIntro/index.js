import "./index.scss";

import CompetitiveLinks from "../../components/CompetitiveLinks";
import EducationImg from "./EducationImg";
import { Fade } from "react-reveal";
import React from "react";
import ThemeContext from "../../theme";

const EducationIntro = () => {
	const theme = React.useContext(ThemeContext);

	return (
		<div className="education">
			<Fade duration={2000} left>
				<div className="education__left">
					<EducationImg theme={theme} />
				</div>
			</Fade>
			<Fade duration={2000} right>
				<div className="education__right">
					<h1>Education</h1>
					<h3>Basic Qualifications and Certifications</h3>
					<CompetitiveLinks />
				</div>
			</Fade>
		</div>
	);
};

export default EducationIntro;
