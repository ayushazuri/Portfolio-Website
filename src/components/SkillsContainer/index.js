import "./index.scss";

import {
	DiCss3,
	DiCss3Full,
	DiJavascript1,
	DiNodejsSmall,
	DiNpm,
	DiReact,
	DiSass,
} from "react-icons/di";
import { SiGatsby, SiJavascript, SiSass } from "react-icons/si";

import { ImNpm } from "react-icons/im";
import React from "react";
import { RiGatsbyLine } from "react-icons/ri";
import { skills } from "../../portfolio";

const SkillsContainer = () => {
	return (
		<div className="skill">
			<h1>Skills</h1>
			<div className="skill__container">
				{skills.skills.map((skill) => {
					return <p>{skill.name}</p>;
				})}
			</div>
		</div>
	);
};

export default SkillsContainer;

// DiJavascript1, DiReact, DiCss3Full DiSass RiGatsbyLine DiNodejsSmall DiNpm

// SiJavascript DiCss3 SiSass SiGatsby ImNpm
