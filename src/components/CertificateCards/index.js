import "./index.scss";

import Card from "@material-ui/core/Card";
import React from "react";
import ThemeContext from "../../theme";
import Tooltip from "@material-ui/core/Tooltip";

const CertificateCard = ({ certificate }) => {
	const { name, author, source, link, image } = certificate;
	const theme = React.useContext(ThemeContext);
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			style={{ textDecoration: "none" }}
		>
			<Tooltip
				title={"View Certificate"}
				arrow
				enterDelay={250}
				leaveDelay={300}
				placement="top"
			>
				<Card style={{ color: theme.text }} className="certificateCards">
					<div className="image">
						<img src={image} alt="" />
					</div>
					<div className="text" style={{ backgroundColor: theme.headerColor }}>
						<h3>{name}</h3>
						<p>- {author}</p>
					</div>
				</Card>
			</Tooltip>
		</a>
	);
};

export default CertificateCard;
