import Footer from "../container/Footer";
import Header from "../components/Header/Header";
import React from "react";

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
