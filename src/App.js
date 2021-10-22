import React, { Component } from "react";
import USAMap from "react-usa-map";
import "./App.css";
//import roasters from "./roasters.json";

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
	"OH",
	"TX",
];

function buildStatesConfig() {
	const config = {};
	states.forEach((state) => {
		config[state] = { fill: "#674736" };
	});
	return config;
}

// function buildRoastersConfig() {
// 	const config = {};
// 	roasters.forEach((roaster) => {
// 		config[roaster.state] = { fill: "#674736" };
// 	});

// 	return config;
// }

class App extends Component {
	/* mandatory */
	mapHandler = (event) => {
		//alert(event.target.dataset.name);
	};

	statesCustomConfig = buildStatesConfig();
	//roasterCustomConfig = buildRoastersConfig();

	render() {
		return (
			<div className="App">
				<p>{this.state}</p>
				<USAMap customize={this.statesCustomConfig} onClick={this.mapHandler} />
			</div>
		);
	}
}

export default App;
