import "./index.scss";

import React, { useEffect, useState } from "react";

import { ImArrowUp } from "react-icons/im";
import ThemeContext from "../../theme";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	const theme = React.useContext(ThemeContext);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div>
			{isVisible && (
				<div
					className="scroll"
					onClick={scrollToTop}
					style={{ backgroundColor: theme.text }}
				>
					<ImArrowUp size={20} className="scroll__logo" />
				</div>
			)}
		</div>
	);
};

export default ScrollToTop;
