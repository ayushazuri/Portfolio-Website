import "./index.scss";

import React, { useContext } from "react";

import { Fade } from "react-reveal";
import ProgressBar from "../../components/ProgressBar";
import ThemeContext from "../../theme";
import { skills } from "../../portfolio";

const Proficiency = () => {
	const theme = useContext(ThemeContext);
	return (
		<div className="proficiency">
			<Fade duration={1000} top>
				<h5>Proficiency</h5>
			</Fade>

			<div className="proficiency__container">
				{skills?.proficiency?.map((skill, index) => {
					return (
						<Fade duration={1000} bottom>
							<div key={index} className="proficiency__progressDiv">
								<p>{skill.skills}</p>
								<ProgressBar
									bgColor={theme.text}
									progress={skill.proficiency}
								/>
							</div>
						</Fade>
					);
				})}
			</div>
		</div>
	);
};

export default Proficiency;
