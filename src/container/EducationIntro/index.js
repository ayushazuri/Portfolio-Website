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
			<Fade duration={2500} left distance="200px">
				<div className="education__left" data-aos="fade-right" data-aos-once>
					<EducationImg theme={theme} />
				</div>
			</Fade>
			<Fade duration={2500} right distance="200px">
				<div className="education__right" data-aos="fade-left" data-aos-once>
					<h1>Education</h1>
					<h3>Basic Qualifications and Certifications</h3>
					<CompetitiveLinks />
				</div>
			</Fade>
		</div>
	);
};

export default EducationIntro;
