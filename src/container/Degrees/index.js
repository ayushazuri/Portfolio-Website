import "./index.scss";

import DegreeCard from "../../components/DegreeCard";
import { Fade } from "react-reveal";
import React from "react";
import ViewMore from "../../components/ViewMore";
import { education } from "../../portfolio";

const Degrees = ({ isHome }) => {
	React.useEffect(() => {
		!isHome && window.scrollTo(0, 0);
	}, [isHome]);

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
			{isHome && <ViewMore to="education" />}
		</div>
	);
};

export default Degrees;
