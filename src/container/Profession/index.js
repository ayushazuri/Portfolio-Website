import "./index.scss";

import React, { useContext } from "react";

import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import ThemeContext from "../../theme.js";
import { skills } from "../../portfolio";

const Profession = () => {
	const theme = useContext(ThemeContext);
	return (
		<div className="profession">
			<Fade duration={2000} left>
				<div className="profession__left">
					<FullStackImg theme={theme} />
				</div>
			</Fade>
			<Fade duration={2000} right>
				<div className="profession__right">
					<h1 className="profession__heading">What I DO?</h1>

					<ul className="profession__descriptions">
						{skills?.descriptions?.map((description, index) => {
							return (
								<li
									key={index}
									style={{ color: theme.secondaryText }}
									className="profession__description"
								>
									{description}
								</li>
							);
						})}
					</ul>
				</div>
			</Fade>
		</div>
	);
};

export default Profession;
