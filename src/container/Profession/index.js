import "./index.scss";

import React, { useContext } from "react";

import FullStackImg from "./FullStackImg";
import ThemeContext from "../../theme.js";
import { skills } from "../../portfolio";

const Profession = () => {
	const theme = useContext(ThemeContext);
	return (
		<div className="profession">
			<div className="profession__left">
				<FullStackImg theme={theme} />
			</div>
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
		</div>
	);
};

export default Profession;
