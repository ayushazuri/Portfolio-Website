import "./index.scss";

import {
	AiFillGithub,
	AiFillHome,
	AiFillPhone,
	AiTwotoneMail,
} from "react-icons/ai";

import Button from "../../StyledComponents/button.style.js";
import Profile from "../../assets/Images/profile.jpeg";
import React from "react";
import SocialMedia from "../../components/SocialMedia";
import ThemeContext from "../../theme";
import { aboutMe } from "../../portfolio";

const Contact = ({ isFooter }) => {
	const {
		name,
		email,
		phone,
		address,
		resumeLink,
		openForOpportunity,
		message,
		portfolio_repository,
	} = aboutMe;

	const theme = React.useContext(ThemeContext);
	return (
		<div className="contact">
			<div className="contact__image">
				<img
					src={Profile}
					alt=""
					style={{ border: `9px solid ${theme.text}` }}
				/>
			</div>
			<div className="contact__details">
				<h1>Contact Me!</h1>
				<p>{message}</p>
				<div className="contact__contact">
					<div className="contact__email">
						<AiTwotoneMail />
						<a href={`mailto: ${email}`}>
							<p>{email}</p>
						</a>
					</div>
					<div className="contact__phone">
						<AiFillPhone />
						<a href={`tel: ${phone}`}>
							<p>{phone}</p>
						</a>
					</div>
				</div>
				<div className="contact__address">
					<AiFillHome className="contact__logo" />
					<p>{address}</p>
				</div>
				<div className="contact__open">
					<p>
						Open For Opportunity:{" "}
						<span style={{ fontWeight: "bold" }}>{openForOpportunity}</span>
					</p>
				</div>
				<SocialMedia />
				{!isFooter && (
					<div className="contact__buttons">
						<a href={resumeLink} target="_blank" rel="noopener noreferrer">
							<Button>See My Resume</Button>
						</a>
						<a
							href={portfolio_repository}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button className="contact__button">
								<AiFillGithub /> <span>Source Code</span>
							</Button>
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default Contact;
