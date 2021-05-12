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
			<Fade duration={2500} top distance="100px">
				<h5 data-aos="fade-down" data-aos-once>
					Proficiency
				</h5>
			</Fade>
			<div className="proficiency__container">
				{skills?.proficiency?.map((skill, index) => {
					return (
						<Fade duration={2500} bottom distance="200px">
							<div
								key={index}
								className="proficiency__progressDiv"
								data-aos="fade-up"
								data-aos-once
							>
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
