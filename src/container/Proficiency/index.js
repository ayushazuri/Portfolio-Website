import "./index.scss";

import React, { useContext } from "react";

import ProgressBar from "../../components/ProgressBar";
import ThemeContext from "../../theme";
import { skills } from "../../portfolio";

const Proficiency = () => {
	const theme = useContext(ThemeContext);
	return (
		<div className="proficiency">
			<h5>Proficiency</h5>
			<div className="proficiency__container">
				{skills?.proficiency?.map((skill, index) => {
					return (
						<div key={index} className="proficiency__progressDiv">
							<p>{skill.skills}</p>
							<ProgressBar bgColor={theme.text} progress={skill.proficiency} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Proficiency;
