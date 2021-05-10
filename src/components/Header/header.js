import "./Header.scss";

import { Link, NavLink } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderList from "./HeaderList";
import ThemeContext from "../../theme";

const Header = ({ isAboutPage }) => {
	const theme = useContext(ThemeContext);
	const [open, setOpen] = useState(false); //For hamburger
	const [size, setSize] = useState(window.innerWidth); //For responding to the size change (Media Query)
	const isMobileTablet = 674; //Width for mobiles or tablet

	const onMouseEnter = (e, color) => {
		e.target.style.backgroundColor = color;
	};

	const onMouseOut = (e) => {
		e.target.style.backgroundColor = "transparent";
	};

	const checkSize = () => {
		setSize(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", checkSize);
		// window.addEventListener("scroll", stickyFunction);
		return () => {
			window.removeEventListener("resize", checkSize);
		};
	}, []);

	const handleOpen = () => {
		if (open === true) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	};

	const styleForAboutPage = {
		width: "100vw",
	};
	// const stickyFunction = () => {
	// 	let header = document.getElementById("header");
	// 	let sticky = header.offsetTop;

	// 	window.pageYOffset >= sticky
	// 		? header.classList.add("stickyHeader")
	// 		: header.classList.remove("stickyHeader");
	// };

	//Look afterwards for a better solution!!
	return (
		// <div
		// 	id="header"
		// 	// className="stickyHeader"
		// 	style={{ backgroundColor: theme.body }}
		// >
		<header
			style={isAboutPage ? styleForAboutPage : {}}
			className={!open ? "header" : "header__mobile"}
		>
			{/* <NavLink to="skills">Home</NavLink> */}
			{!open && (
				<h1 to={Link} tag={Link} className="header__logo">
					<span style={{ color: theme.text }}> &lt;</span>
					<span
						className="logo-name"
						style={{
							color: theme.text,
							fontFamily: "Agustina Regular",
							margin: "2px 5px",
						}}
					>
						Ayush Singh
					</span>
					<span style={{ color: theme.text }}> /&gt;</span>
				</h1>
			)}
			{size > isMobileTablet ? (
				<ul
					className="header__menu"
					style={{ backgroundColor: theme.body, paddingLeft: "0" }}
				>
					<HeaderList
						theme={theme}
						onMouseEnter={onMouseEnter}
						onMouseOut={onMouseOut}
					/>
				</ul>
			) : (
				<div className="header__menu_hamburger">
					<div>
						{open === false ? (
							<GiHamburgerMenu
								className="hamburger"
								size={30}
								onClick={handleOpen}
							/>
						) : (
							<AiOutlineClose
								className="hamburger"
								size={30}
								onClick={handleOpen}
							/>
						)}
					</div>
					{open === true ? (
						<ul
							className="header__menu_mobile"
							style={{ backgroundColor: theme.body }}
						>
							<HeaderList
								theme={theme}
								onMouseEnter={onMouseEnter}
								onMouseOut={onMouseOut}
							/>
						</ul>
					) : (
						""
					)}
				</div>
			)}
		</header>
		// </div>
	);
};

export default Header;
