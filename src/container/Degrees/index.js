import "./index.scss";

import DegreeCard from "../../components/DegreeCard";
import { Fade } from "react-reveal";
import React from "react";
import { education } from "../../portfolio";

const Degrees = () => {
	return (
		<div className="degree">
			<Fade duration={2000} top>
				<h1>Degrees</h1>
			</Fade>

			<div className="degree__cards">
				{education.map((degree, index) => {
					return (
						<Fade duration={2000} bottom>
							<DegreeCard key={index} degree={degree} />
						</Fade>
					);
				})}
			</div>
		</div>
	);
};

export default Degrees;
