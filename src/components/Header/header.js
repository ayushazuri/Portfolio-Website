import "./header.scss";

import { Link, NavLink } from "react-router-dom";

import React from "react";

const header = ({ theme }) => {
	const onMouseEnter = (e, color) => {
		e.target.style.backgroundColor = color;
	};

	const onMouseOut = (e) => {
		e.target.style.backgroundColor = "transparent";
	};
	console.log(theme);
	return (
		<header className="header">
			<ul className="header__menu" style={{ backgroundColor: theme.body }}>
				<li>
					<p
						to="/home"
						tag={Link}
						activeStyle={{ fontWeight: "bold" }}
						style={{ color: theme.text }}
						onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
						onMouseOut={(event) => onMouseOut(event)}
					>
						Home
					</p>
					{/* <NavLink
						to="/home"
						tag={Link}
						activeStyle={{ fontWeight: "bold" }}
						style={{ color: theme.text }}
						onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
						onMouseOut={(event) => onMouseOut(event)}
					>
						Home
					</NavLink> */}
				</li>
				<li>
					<p
						to="/education"
						tag={Link}
						activeStyle={{ fontWeight: "bold" }}
						style={{ color: theme.text }}
						onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
						onMouseOut={(event) => onMouseOut(event)}
					>
						Education
					</p>
				</li>
				<li>
					<p
						to="/experience"
						tag={Link}
						activeStyle={{ fontWeight: "bold" }}
						style={{ color: theme.text }}
						onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
						onMouseOut={(event) => onMouseOut(event)}
					>
						Experience
					</p>
				</li>
				<li>
					<p
						to="/projects"
						tag={Link}
						activeStyle={{ fontWeight: "bold" }}
						style={{ color: theme.text }}
						onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
						onMouseOut={(event) => onMouseOut(event)}
					>
						Projects
					</p>
				</li>
				<li>
					<p
						to="/projects"
						tag={Link}
						activeStyle={{ fontWeight: "bold" }}
						style={{ color: theme.text }}
						onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
						onMouseOut={(event) => onMouseOut(event)}
					>
						Contact me
					</p>
				</li>
			</ul>
		</header>
	);
};

export default header;
