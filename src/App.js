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
	_isMounted = false;

	// mandatory for the map to work
	mapHandler = (event) => {
		//alert(event.target.dataset.name);
	};

	statesCustomConfig = buildStatesConfig();
	stateCount = getStateCount();
	progressPercent = (this.stateCount / 51) * 100;

	constructor() {
		super();
		this.state = { width: window.innerWidth, height: window.innerHeight };
	}

	// Resize the map when the window is resized
	updateDimensions() {
		if (window.innerWidth < 500) {
			let update_width = window.innerWidth - 10;
			let update_height = Math.round(update_width / 2);
			this.setState({ width: update_width, height: update_height });
		} else {
			let update_width = window.innerWidth - 100;
			let update_height = Math.round(update_width / 2.7);
			this.setState({ width: update_width, height: update_height });
		}
	}

	// Add Event listener
	componentDidMount() {
		this._isMounted = true;
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions.bind(this));
	}

	// Remove Event Listener
	componentWillUnmount() {
		this._isMounted = false;
		window.removeEventListener("resize", this.updateDimensions.bind(this));
	}

	render() {
		return (
			<div className="App">
				<h1>Coffee Roaster Map</h1>

				<div style={{ textAlign: "center" }}>
					<p>My mission is to order great coffee online from every state (and DC). 😎</p>
					<p>
						<a href="https://docs.google.com/spreadsheets/d/1h-oqlqJ_G3UXuDSkdFHuEaCVuOXQOb68y2sduXQRTn4/edit?usp=sharing">
							Coffee Roaster Spreadsheet
						</a>
					</p>

					<Progress count={this.stateCount} total={51} />

					<USAMap
						style={{ textAlign: "center" }}
						width={this.state.width}
						height={this.state.height}
						customize={this.statesCustomConfig}
						onClick={this.mapHandler}
					/>
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
