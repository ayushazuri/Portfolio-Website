import React from "react";

export const blueTheme = {
	body: "#EDF9FE",
	text: "#001C55",
	highlight: "#A6E1FA",
	dark: "#00072D",
	secondaryText: "#7F8DAA",
	imageHighlight: "#0E6BA8",
	compImgHighlight: "#E6E6E6",
	jacketColor: "#0A2472",
	headerColor: "#0E6BA877",
};
const Theme = blueTheme;

const ThemeContext = React.createContext();

export default ThemeContext;
export { Theme };
