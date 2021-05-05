import "./index.scss";

import CSC from "../../assets/Images/csc.png";
import Card from "@material-ui/core/Card";
import React from "react";
import SJIC from "../../assets/Images/sjic.png";
import SPIT from "../../assets/Images/SPIT_logo.png";
import ThemeContext from "../../theme";

const DegreeCard = ({ degree }) => {
	const { name, timeline, pointer, branch, location } = degree;
	const theme = React.useContext(ThemeContext);

	const getLogo = (name) => {
		if (name === "Sardar Patel Institute of Technology")
			return <img src={SPIT} width="70px" alt="SPIT_logo" />;
		if (name === "Chandrabhan Sharma College")
			return <img src={CSC} width="70px" alt="CSC_logo" />;
		if (name === "St. Joseph's School")
			return <img src={SJIC} width="70px" alt="SJIC_logo" />;
	};

	return (
		<Card
			className="degreeCard"
			style={{ color: theme.text, backgroundColor: theme.body }}
		>
			<div className="degreeCard__logo">{getLogo(name)}</div>
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
