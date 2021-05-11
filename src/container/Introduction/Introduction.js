import "./Introduction.scss";

import React, { useContext } from "react";

import Button from "../../StyledComponents/button.style.js";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import Jump from "react-reveal/Jump";
import { Link } from "react-router-dom";
import SocialMedia from "../../components/SocialMedia/";
import ThemeContext from "../../theme.js";
import { greeting } from "../../portfolio";

const Introduction = () => {
	const { title, subTitle, resumeLink } = greeting;
	const Theme = useContext(ThemeContext);
	return (
		<Fade bottom duration={2000}>
			<div className="introduction">
				<div className="introduction__text">
					<h1>{title}</h1>

					<p style={{ color: Theme.secondaryText }}>{subTitle}</p>
					<SocialMedia />
					<div className="buttons">
						<Link to="/about">
							<Button>Contact me</Button>
						</Link>

						<a href={resumeLink} target="_blank" rel="noreferrer">
							<Button>Resume</Button>
						</a>
					</div>
				</div>
				<div className="introduction__img">
					<FeelingProud />
				</div>
			</div>
		</Fade>
	);
};

export default Introduction;
