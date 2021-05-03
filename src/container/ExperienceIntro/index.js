import "./index.scss";

import ExperienceImg from "./ExperienceImg";
import React from "react";
import ThemeContext from "../../theme";
import { experience } from "../../portfolio";

const ExperienceIntro = () => {
	const theme = React.useContext(ThemeContext);

	return (
		<div className="experience">
			<div className="experience__left">
				<ExperienceImg theme={theme} />
			</div>
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
		</div>
	);
};

export default ExperienceIntro;
