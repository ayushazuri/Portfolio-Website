import Contact from "../Contact";
import React from "react";

const Footer = () => {
	const isFooter = true;
	return (
		<div>
			<Contact isFooter={isFooter} />
			<div
				className="footer"
				style={{
					textAlign: "center",
					margin: "10px",
					marginTop: "20px",
					fontWeight: "bold",
				}}
			>
				Made with <span style={{ color: "red" }}>❤</span> by Ayush Singh
			</div>
		</div>
	);
};

export default Footer;
