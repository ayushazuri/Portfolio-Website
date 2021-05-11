import "./index.scss";

import AchievementImg from "./AchievementImg";
import { Fade } from "react-reveal";
import React from "react";
import ThemeContext from "../../theme";
import { achievements } from "../../portfolio";

const Achievements = () => {
	const theme = React.useContext(ThemeContext);

	return (
		<div className="achievement">
			<Fade duration={2000} left>
				<div className="achievement__left">
					<AchievementImg theme={theme} />
				</div>
			</Fade>
			<Fade duration={2000} right>
				<div className="achievement__right">
					<h1>Achievements and Extra Curriculars</h1>
					<ul>
						{achievements.map((achievement, index) => {
							return <li>{achievement}</li>;
						})}
					</ul>
				</div>
			</Fade>
		</div>
	);
};
export default Achievements;