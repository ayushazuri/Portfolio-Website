import "./App.css";

import { HashRouter, Route, Switch } from "react-router-dom";

import { GlobalStyles } from "./globalcss";
import Header from "./components/Header/Header";
import Introduction from "./container/Introduction/Introduction";
import { Theme } from "./theme";
import ThemeContext from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
	return (
		<ThemeProvider theme={Theme} name="Ayush">
			<ThemeContext.Provider value={Theme}>
				<GlobalStyles />
				<div className="App">
					<Header />
					<Introduction />
				</div>
			</ThemeContext.Provider>
		</ThemeProvider>
	);
}

export default App;
