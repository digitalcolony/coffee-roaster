import React, { Component } from "react";
import USAMap from "react-usa-map";
import "./App.css";
import states from "./States";
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
				<div style={{ textAlign: "center" }}>
					<p>My mission is to order great coffee online from every state (and DC). 😎</p>
					<a href="https://docs.google.com/spreadsheets/d/1h-oqlqJ_G3UXuDSkdFHuEaCVuOXQOb68y2sduXQRTn4/edit?usp=sharing">
						Coffee Roaster Spreadsheet
					</a>
					<p>Current progress: {Object.keys(this.statesCustomConfig).length}/51</p>
				</div>
			</div>
		);
	}
}

export default App;
