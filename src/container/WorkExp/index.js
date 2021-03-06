import "./index.scss";

import ExperienceCard from "../../components/ExperienceCard";
import { Fade } from "react-reveal";
import React from "react";
import ViewMore from "../../components/ViewMore";
import { experience } from "../../portfolio";

const WorkExp = ({ isHome }) => {
	React.useEffect(() => {
		!isHome && window.scrollTo(0, 0);
	}, [isHome]);

	return (
		<div className="internship">
			<Fade duration={2000} top distance="100px">
				<h1 data-aos="fade-down" data-aos-once>
					Work Experiences
				</h1>
			</Fade>

			<div className="internship__cards">
				{experience.works?.map((work, index) => {
					return (
						<Fade duration={2000} bottom key={index}>
							<ExperienceCard work={work} />
						</Fade>
					);
				})}
			</div>
			{isHome && <ViewMore to="experience" />}
		</div>
	);
};

export default WorkExp;
