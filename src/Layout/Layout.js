import ChangeTheme from "../components/ChangeTheme";
import Contact from "../container/Contact";
import Footer from "../container/Footer";
import Header from "../components/Header/Header";
import { Helmet } from "react-helmet";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";

const Layout = ({ children, page }) => {
	const isFooter = true;
	return (
		<div>
			<Helmet>
				<title>{`Ayush's Portfolio | ${page}`}</title>
				<html lang="en" />
				<meta name="description" content="Portfolio Website"></meta>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<meta name="author" content="Ayush Singh"></meta>
				<meta
					name="keywords"
					content="Portfolio, Ayush Singh, ReactJs, SASS, Javascript"
				></meta>
			</Helmet>
			<Header />
			{children}
			<ChangeTheme />
			<ScrollToTop />
			<Contact isFooter={isFooter} />
			<Footer />
		</div>
	);
};

export default Layout;
