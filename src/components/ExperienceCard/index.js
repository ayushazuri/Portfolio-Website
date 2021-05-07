import "./index.scss";

import Badge from "../../StyledComponents/Badge.style.js";
import Button from "../../StyledComponents/button.style.js";
import Card from "@material-ui/core/Card";
import React from "react";
import ThemeContext from "../../theme";

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
		<Card
			className="card"
			style={{ color: theme.text, backgroundColor: theme.body }}
		>
			<div
				className="card__details"
				style={{ backgroundColor: theme.headerColor }}
			>
				<div className="card__logo">
					<img
						src={image}
						alt=""
						style={{
							width: "70px",
							height: "auto",
							backgroundColor: "white",
							padding: "10px",
							borderRadius: "50%",
						}}
					/>
				</div>
				<div className="card__description">
					<h4>{name}</h4>
					<p>{role}</p>
					<p className="card__location">{location}</p>
					<small>{timeline}</small>
				</div>
			</div>
			<div className="card__technologies">
				<p>Technologies Used :</p>
				<div className="card__technology">
					{technologies.map((technology, index) => {
						return <Badge key={index}>{technology}</Badge>;
					})}
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
			<div className="card__button">
				<a href={link} target="_blank" rel="noopener noreferrer">
					<Button>Visit Website</Button>
				</a>
			</div>
		</Card>
	);
};

export default ExperienceCard;
