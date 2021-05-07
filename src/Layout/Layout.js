import Contact from "../container/Contact";
import Footer from "../container/Footer";
import Header from "../components/Header/Header";
import React from "react";

const Layout = ({ children }) => {
	const isFooter = true;
	return (
		<div>
			<Header />
			{children}
			<Contact isFooter={isFooter} />
			<Footer />
		</div>
	);
};

export default Layout;
