import "./index.scss";

import ExperienceCard from "../../components/ExperienceCard";
import React from "react";
import { experience } from "../../portfolio";

const InternshipExperience = () => {
	return (
		<div className="internship">
			<h1>Internship Experiences</h1>
			<div className="internship__cards">
				{experience.internships?.map((internship, index) => {
					return <ExperienceCard internship={internship} key={index} />;
				})}
			</div>
		</div>
	);
};

export default InternshipExperience;
