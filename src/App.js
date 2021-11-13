import React, { Component } from "react";
import USAMap from "react-usa-map";
import "./App.css";
import { states } from "./States";
//import roasters from "./roasters.json";

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
