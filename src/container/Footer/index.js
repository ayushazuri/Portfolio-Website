import { Fade } from "react-reveal";
import React from "react";

const Footer = () => {
	return (
		<div>
			<Fade duration={2000} bottom>
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
			</Fade>
		</div>
	);
};

export default Footer;
