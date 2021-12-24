import React, { Component } from "react";
import USAMap from "react-usa-map";
import "./App.css";
import states from "./data/States";
import Progress from "./components/Progress";

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

class App extends Component {
	/* mandatory */
	mapHandler = (event) => {
		//alert(event.target.dataset.name);
	};

	statesCustomConfig = buildStatesConfig();
	stateCount = getStateCount();
	progressPercent = (this.stateCount / 51) * 100;

	render() {
		return (
			<div className="App">
				<USAMap customize={this.statesCustomConfig} onClick={this.mapHandler} />
				<div style={{ textAlign: "center" }}>
					<p>My mission is to order great coffee online from every state (and DC). 😎</p>
					<p>
						<a href="https://docs.google.com/spreadsheets/d/1h-oqlqJ_G3UXuDSkdFHuEaCVuOXQOb68y2sduXQRTn4/edit?usp=sharing">
							Coffee Roaster Spreadsheet
						</a>
					</p>

					<Progress count={this.stateCount} total={51} />
					<p>
						☕{" "}
						<em>
							Created by <a href="https://michaelallensmith.com">Michael Allen Smith</a>. (
							<a href="https://github.com/digitalcolony/coffee-roaster">GitHub</a>)
						</em>
					</p>
				</div>
			</div>
		);
	}
}

export default App;
