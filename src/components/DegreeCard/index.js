import "./index.scss";

import Card from "@material-ui/core/Card";
import React from "react";
import ThemeContext from "../../theme";

const DegreeCard = ({ degree }) => {
	const { name, timeline, pointer, branch, location, image } = degree;
	const theme = React.useContext(ThemeContext);

	return (
		<Card
			className="degreeCard"
			style={{ color: theme.text, backgroundColor: theme.body }}
		>
			<div
				className="degreeCard__logo"
				style={{ backgroundColor: theme.headerColor }}
			>
				<img src={image} width="70px" alt={name} />
			</div>
			<div className="degreeCard__details">
				<h4>{name}</h4>
				<h6>{branch}</h6>
				<p>{location}</p>
				<div>
					<small>{timeline}</small>
					<small>{pointer}</small>
				</div>
			</div>
		</Card>
	);
};

export default DegreeCard;
