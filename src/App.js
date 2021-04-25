import "./App.css";

import { HashRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header/header";
import Introduction from "./container/Introduction/Introduction";
import { blueTheme } from "./theme";

function App() {
	return (
		<div className="App">
			{/* <Switch>
				<Route></Route>
			</Switch> */}
			<Header theme={blueTheme} />
			<Introduction />
		</div>
	);
}

export default App;
