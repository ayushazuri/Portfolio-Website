import "./index.scss";

import Card from "@material-ui/core/Card";
import React from "react";
import ThemeContext from "../../theme";

const CertificateCard = ({ certificate }) => {
	const { name, author, source, link } = certificate;
	const theme = React.useContext(ThemeContext);
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			style={{ textDecoration: "none" }}
		>
			<Card style={{ color: theme.text }}>
				<div className="image">
					<img src="" alt="" />
				</div>
				<div className="text">
					<h3>{name}</h3>
					<p>- {author}</p>
				</div>
			</Card>
		</a>
	);
};

export default CertificateCard;
