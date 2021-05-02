import { Link, NavLink } from "react-router-dom";

import React from "react";

const MobileHeaderList = ({ theme, onMouseEnter, onMouseOut }) => {
	return (
		<>
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
			</li>
			<li>
				<p
					to="/home"
					tag={Link}
					activeStyle={{ fontWeight: "bold" }}
					style={{ color: theme.text }}
					onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
					onMouseOut={(event) => onMouseOut(event)}
				>
					Skills
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
		</>
	);
};

export default MobileHeaderList;
