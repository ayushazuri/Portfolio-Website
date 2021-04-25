import "./Introduction.scss";

import React from "react";
import { Theme } from "../../theme";
import { greeting } from "../../portfolio";

const Introduction = () => {
	return (
		<div className="introduction">
			<div className="introduction-text">
				<h1>{greeting.title}</h1>
				<p style={{ color: Theme.secondaryText }}>{greeting.subTitle}</p>
			</div>
			<div className="introduction-img"></div>
		</div>
	);
};

export default Introduction;
