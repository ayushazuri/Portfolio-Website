import "./index.scss";

import { Link } from "react-router-dom";
import React from "react";

const ViewMore = ({ to }) => {
	return (
		<div className="view">
			<Link to={`/${to}`} className="view__link">
				View More &gt;&gt;&gt;
			</Link>
		</div>
	);
};

export default ViewMore;
