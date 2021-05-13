import "./index.scss";

import { Link } from "react-router-dom";
import React from "react";
import { Slide } from "react-reveal";

// import ThemeContext from "../../theme";

const ViewMore = ({ to }) => {
	// const theme = React.useContext(ThemeContext);

	// const onMouseEnter = (e, color) => {
	// 	e.target.style.backgroundColor = color;
	// };

	// const onMouseOut = (e) => {
	// 	e.target.style.backgroundColor = "transparent";
	// };

	return (
		<Slide right>
			<div
				className="view"
				// onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
				// onMouseOut={(event) => onMouseOut(event)}
				data-aos="fade-down"
				data-aos-once
				data-aos-offset="100"
			>
				<Link to={`/${to}`} className="view__link">
					View More &gt;&gt;&gt;
				</Link>
			</div>
		</Slide>
	);
};

export default ViewMore;
