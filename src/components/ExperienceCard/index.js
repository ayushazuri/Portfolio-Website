import "./index.scss";

import React from "react";
import ThemeContext from "../../theme";
import rewfa from "../../assets/Images/rewfa_logo.svg";

const ExperienceCard = ({ internship }) => {
	const {
		name,
		image,
		role,
		tasks,
		link,
		timeline,
		location,
		technologies,
	} = internship;

	const theme = React.useContext(ThemeContext);

	return (
		<div className="card">
			<div className="card__details">
				<div className="card__logo">
					<img src={rewfa} alt="" style={{ width: "70px", height: "auto" }} />
				</div>
				<div className="card__description">
					<h4>{name}</h4>
					<p>{role}</p>
					<p className="card__location">{location}</p>
					<small>{timeline}</small>
				</div>
			</div>
			<div className="card__task">
				<p>Tasks :</p>
				<ul>
					{tasks?.map((task, index) => {
						return <li key={index}>{task}</li>;
					})}
				</ul>
			</div>
			<div className="card__technologies">
				<p>Technologies Used :</p>
				<div className="card__technology">
					{technologies.map((technology, index) => {
						return <p key={index}>{technology}</p>;
					})}
				</div>
			</div>
			<div className="card__button"></div>
		</div>
	);
};

export default ExperienceCard;
