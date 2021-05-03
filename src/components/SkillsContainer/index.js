import "./index.scss";

import {
	DiCss3Full,
	DiGit,
	DiNodejsSmall,
	DiNpm,
	DiPython,
	DiReact,
} from "react-icons/di";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
	SiAdobexd,
	SiBootstrap,
	SiFirebase,
	SiJava,
	SiJavascript,
	SiMysql,
	SiSass,
} from "react-icons/si";

import { ImHtmlFive2 } from "react-icons/im";
import React from "react";
import { RiGatsbyLine } from "react-icons/ri";
import ThemeContext from "../../theme";
import { skills } from "../../portfolio";

const getSkillLogo = (skill) => {
	const size = 50;
	const style = {
		color: skill?.style?.color,
	};

	if (skill.name === "ReactJs") return <DiReact size={size} style={style} />;
	if (skill.name === "Javascript")
		return <SiJavascript size={size} style={style} />; //-10
	if (skill.name === "CSS") return <DiCss3Full size={size} style={style} />;
	if (skill.name === "SASS") return <SiSass size={size} style={style} />;
	if (skill.name === "HTML") return <ImHtmlFive2 size={size} style={style} />; //-5
	if (skill.name === "Bootstrap")
		return <SiBootstrap size={size} style={style} />; //-5
	if (skill.name === "GatsbyJS")
		return <RiGatsbyLine size={size} style={style} />;
	if (skill.name === "NodeJs")
		return <DiNodejsSmall size={size} style={style} />;
	if (skill.name === "express.js") return <DiReact size={size} style={style} />;
	if (skill.name === "Firebase")
		return <SiFirebase size={size} style={style} />;
	if (skill.name === "Git") return <DiGit size={size} style={style} />; //+10
	if (skill.name === "npm")
		return (
			<DiNpm
				size={size} //-10
				style={{
					...style,
					backgroundColor: skill?.style?.color,
					color: "white",
				}}
			/>
		);
	if (skill.name === "Adobe Xd")
		return (
			<SiAdobexd
				size={size}
				style={{ ...style, backgroundColor: "#2e001e", borderRadius: "11px" }}
			/>
		);
	if (skill.name === "Java") return <SiJava size={size} style={style} />;
	if (skill.name === "Python") return <DiPython size={size} style={style} />;
	if (skill.name === "MySQL") return <SiMysql size={size} style={style} />;
};

const SkillsContainer = () => {
	const theme = React.useContext(ThemeContext);
	return (
		<div className="skill">
			<h5>Skills</h5>
			<div className="skill__container">
				{skills?.skills?.map((skill) => {
					return (
						<OverlayTrigger
							key={skill.name}
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={
								<Tooltip
									className="skill__tooltip"
									style={{
										color: "white",
										backgroundColor: theme.text,
										padding: "2px 3px",
										borderRadius: "2px",
									}}
								>
									<strong style={{ fontWeight: "500" }}>{skill.name}</strong>
								</Tooltip>
							}
						>
							<div className="skill__logos">
								<span className="skill__logo">{getSkillLogo(skill)}</span>
								<small>{skill.name}</small>
							</div>
						</OverlayTrigger>
					);
				})}
			</div>
		</div>
	);
};

export default SkillsContainer;
