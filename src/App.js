import "./App.css";

import { GlobalStyles } from "./globalcss";
import Main from "./container/Main";
import { Theme } from "./theme";
import ThemeContext from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
	return (
		<ThemeProvider theme={Theme} name="Ayush">
			<ThemeContext.Provider value={Theme}>
				<GlobalStyles />
				<div className="App">
					<Main />
				</div>
			</ThemeContext.Provider>
		</ThemeProvider>
	);
}

export default App;
