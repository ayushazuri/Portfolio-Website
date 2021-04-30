import "./Introduction.scss";

import React, { useContext } from "react";

import FeelingProud from "./FeelingProud";
import ThemeContext from "../../theme.js";
import { greeting } from "../../portfolio";

const Introduction = () => {
	const Theme = useContext(ThemeContext);
	return (
		<div className="introduction">
			<div className="introduction__text">
				<h1>{greeting.title}</h1>
				<p style={{ color: Theme.secondaryText }}>{greeting.subTitle}</p>
				<div className="buttons">
					<button>Contact me</button>
					<button>Resume</button>
					<button>Code</button>
				</div>
			</div>
			<div className="introduction__img">
				<FeelingProud />
			</div>
		</div>
	);
};

export default Introduction;
