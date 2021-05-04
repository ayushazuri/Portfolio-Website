import "./index.scss";

import CompetitiveLinks from "../../components/CompetitiveLinks";
import EducationImg from "./EducationImg";
import React from "react";
import ThemeContext from "../../theme";

const EducationIntro = () => {
	const theme = React.useContext(ThemeContext);

	return (
		<div className="education">
			<div className="education__left">
				<EducationImg theme={theme} />
			</div>
			<div className="education__right">
				<h1>Education</h1>
				<h3>Basic Qualifications and Certifications</h3>
				<CompetitiveLinks />
			</div>
		</div>
	);
};

export default EducationIntro;
