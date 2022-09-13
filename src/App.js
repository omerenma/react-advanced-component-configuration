import React, { useState } from "react";
import Heading from "./Heading";
import HeaderClass from "./HeaderClass";
import "./App.css";
import { themes } from "./theme";
import { ThemeContext } from "./theme";

function App() {
	const [theme, setTheme] = useState(themes);
	const handleThemeChange = () => {
    setTheme(prev => !prev)
	};

	return (
		<ThemeContext.Provider value={theme}>
			<ThemeContext.Consumer>
				{(theme) => (
					<div className="App" style={{backgroundColor:theme}}>
            <button onClick={handleThemeChange} >Dark theme</button>
						<Heading header="Header props" />
						<HeaderClass header="Header props" />
					</div>
				)}
			</ThemeContext.Consumer>
		</ThemeContext.Provider>
	);
}

export default App;
