import React, { Component } from "react";
import USAMap from "react-usa-map";
import "./App.css";

// https://docs.google.com/spreadsheets/d/e/2PACX-1vQR37ZQny3aE5FtYXhqE8UwR4YGK6Z9A2iKeLEaCP8N_xvmlV5IO_W2s2rQWHXfHcUw6CBV-Q3O6OW0/pubhtml
const states = [
	"PA",
	"OR",
	"CA",
	"WA",
	"MD",
	"CA",
	"MO",
	"OR",
	"WY",
	"IL",
	"ID",
	"CT",
	"WI",
	"WA",
	"MI",
	"PA",
	"SC",
	"WA",
	"NY",
	"KS",
	"OR",
	"MT",
	"CA",
	"OR",
	"WI",
	"CO",
	"ME",
	"CA",
	"CA",
	"IN",
	"WA",
	"CA",
	"OR",
	"WI",
];

function buildStatesConfig() {
	const config = {};
	states.forEach((state) => {
		config[state] = { fill: "brown" };
	});
	return config;
}
class App extends Component {
	/* mandatory */
	mapHandler = (event) => {
		alert(event.target.dataset.name);
	};

	statesCustomConfig = buildStatesConfig();

	render() {
		return (
			<div className="App">
				<USAMap customize={this.statesCustomConfig} onClick={this.mapHandler} />
			</div>
		);
	}
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
