import "./index.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../StyledComponents/button.style.js";
import { CSSTransition } from "react-transition-group";
import { FaCircle } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import changeTheme from "../../Redux/Action/changeTheme";
import { themes } from "../../theme";

const Modal = ({ theme, show, onClose }) => {
	const closeOnEscapeKeyDown = (e) => {
		if ((e.charCode || e.keyCode) === 27) onClose();
	};

	useEffect(() => {
		document.body.addEventListener("keydown", closeOnEscapeKeyDown);
		return function cleanup() {
			document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
		};
	});
	const onMouseEnter = (e, color) => {
		e.target.style.backgroundColor = color;
	};

	const onMouseLeave = (e) => {
		e.target.style.backgroundColor = "";
	};

	const dispatch = useDispatch();
	const handleChangeTheme = (theme) => {
		dispatch(changeTheme({ theme: theme }));
		onClose();
	};

	return (
		<CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
			<div className={`modal ${show ? "modal__show" : ""}`} onClick={onClose}>
				<div className="modal__content" style={{ backgroundColor: theme.body }}>
					<button className="modal__close">
						<GrFormClose
							size={30}
							onClick={onClose}
							style={{ color: theme.text }}
						/>
					</button>
					<div
						className="modal__header"
						style={{ backgroundColor: theme.headerColor }}
					>
						<p>Change Theme</p>
					</div>
					<div className="modal__body">
						{themes.map((theme, index) => {
							return (
								<div
									className="modal__themes"
									key={index}
									onMouseEnter={(e) => onMouseEnter(e, theme.headerColor)}
									onFocus={(e) => onMouseEnter(e, theme.headerColor)}
									onMouseLeave={(e) => onMouseLeave(e)}
									onClick={() => handleChangeTheme(theme)}
								>
									<FaCircle
										style={{
											color: theme.display,
										}}
										size={40}
										onMouseLeave={(e) => onMouseLeave(e)}
									/>

									{/* <div
										className="modal__color"
										style={{
											backgroundColor: theme.body,
											backgroundImage: `linear-gradient(43deg, ${theme.body} 0%, ${theme.headerColor} 50%, ${theme.text} 100%)`,
										}}
									></div> */}
									<span className="modal__name">{theme.name}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default Modal;
