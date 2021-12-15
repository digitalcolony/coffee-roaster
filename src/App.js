import React, { Component } from "react";
import USAMap from "react-usa-map";
import "./App.css";
import "./circle.css";
import states from "./States";
//import roasters from "./roasters.json";

function buildStatesConfig() {
	const config = {};
	states.forEach((state) => {
		config[state] = { fill: "#674736" };
	});
	return config;
}

function getStateCount() {
	let numStates = 0;
	states.forEach((state) => numStates++);
	return numStates;
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
	stateCount = getStateCount();
	progressPercent = (this.stateCount / 51) * 100;

	//roasterCustomConfig = buildRoastersConfig();

	render() {
		return (
			<div className="App">
				<USAMap customize={this.statesCustomConfig} onClick={this.mapHandler} />
				<div style={{ textAlign: "center" }}>
					<p>My mission is to order great coffee online from every state (and DC). 😎</p>
					<a href="https://docs.google.com/spreadsheets/d/1h-oqlqJ_G3UXuDSkdFHuEaCVuOXQOb68y2sduXQRTn4/edit?usp=sharing">
						Coffee Roaster Spreadsheet
					</a>{" "}
					: Current progress: {this.stateCount}/51
					<p></p>
					<div className="progress">
						<div className={`c100 p${22 + 33} orange`}>
							<span>
								{Math.round((this.stateCount / 51) * 100)}%
								<br />
							</span>
							<div class="slice">
								<div class="bar"></div>
								<div class="fill"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
