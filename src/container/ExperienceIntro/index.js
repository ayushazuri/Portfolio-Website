import "./index.scss";

import ExperienceImg from "./ExperienceImg";
import { Fade } from "react-reveal";
import React from "react";
import ThemeContext from "../../theme";
import { experience } from "../../portfolio";

const ExperienceIntro = () => {
	const theme = React.useContext(ThemeContext);

	return (
		<div className="experience">
			<Fade duration={2000} left>
				<div className="experience__left">
					<ExperienceImg theme={theme} />
				</div>
			</Fade>
			<Fade duration={2000} right>
				<div className="experience__right">
					<h1>Experience</h1>
					<div className="experience__description">
						{experience?.descriptions?.map((description, index) => {
							return (
								<p key={index} style={{ color: theme.secondaryText }}>
									{description}
								</p>
							);
						})}
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default ExperienceIntro;
