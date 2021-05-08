import "./index.scss";

import { Fade, Slide } from "react-reveal";

import ExperienceCard from "../../components/ExperienceCard";
import React from "react";
import { experience } from "../../portfolio";

const InternshipExperience = () => {
	return (
		<div className="internship">
			<Fade duration={2000} top>
				<h1>Internship Experiences</h1>
			</Fade>

			<div className="internship__cards">
				{experience.internships?.map((internship, index) => {
					return (
						<Fade duration={2000} bottom>
							<ExperienceCard internship={internship} key={index} />
						</Fade>
					);
				})}
			</div>
		</div>
	);
};

export default InternshipExperience;
