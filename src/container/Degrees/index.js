import "./index.scss";

import DegreeCard from "../../components/DegreeCard";
import React from "react";
import { education } from "../../portfolio";

const Degrees = () => {
	return (
		<div className="degree">
			<h1>Degrees</h1>
			<div className="degree__cards">
				{education.map((degree, index) => {
					return <DegreeCard degree={degree} />;
				})}
			</div>
		</div>
	);
};

export default Degrees;
