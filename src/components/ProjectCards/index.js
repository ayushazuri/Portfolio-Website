import "./index.scss";

import { AiFillGithub } from "react-icons/ai";
import Badge from "../../StyledComponents/Badge.style.js";
import Button from "../../StyledComponents/button.style.js";
import Card from "@material-ui/core/Card";
import React from "react";
import ThemeContext from "../../theme";

const ProjectCards = ({ project }) => {
	const {
		name,
		githubLink,
		technologies,
		websiteLink,
		description,
		image,
	} = project;

	const theme = React.useContext(ThemeContext);

	return (
		<Card
			className="projectcard"
			style={{ color: theme.text, backgroundColor: theme.body }}
		>
			<div className="projectCard">
				<div className="projectcard__front">
					<img src={image.default} alt="" />
					<div className="front__details">
						<h3>{name}</h3>
						<div className="technologies">
							<p>Technologies used</p>
							<div className="technology">
								{technologies.map((technology, index) => {
									return <Badge key={index}>{technology}</Badge>;
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="projectcard__back">
					<h3>{name}</h3>

					<p>{description}</p>
					<div className="buttons">
						{githubLink ? (
							<a href={githubLink} target="_blank" rel="noreferrer">
								<Button>
									<AiFillGithub />
									<p>Source Code</p>
								</Button>
							</a>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</Card>
	);
};

export default ProjectCards;