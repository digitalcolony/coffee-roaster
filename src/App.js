import React, { useState, useEffect } from "react";
import useWindowSize from "./hooks/useWindowSize";
import USAMap from "react-usa-map";
import "./App.css";
import states from "./data/States";
import Progress from "./components/Progress";

const App = () => {
	const [stateCount, setStateCount] = useState(0);
	const [stateData, setStateData] = useState({});
	const [mapHeight, setMapHeight] = useState(0);
	const [mapWidth, setMapWidth] = useState(0);

	const windowSize = useWindowSize();

	// completed states and their count
	useEffect(() => {
		function buildStatesConfig() {
			const config = {};
			states.forEach((state) => {
				config[state] = { fill: "#674736" };
			});
			setStateData(config);
		}
		function getStatesCount() {
			let numStates = 0;
			states.forEach((state) => numStates++);
			setStateCount(numStates);
		}
		buildStatesConfig();
		getStatesCount();
	}, []);

	useEffect(() => {
		function updateMapSize() {
			if (windowSize.width < 500) {
				setMapHeight(Math.round(windowSize.width / 2));
				setMapWidth(windowSize.width - 10);
			} else {
				setMapHeight(Math.round(windowSize.width / 2.7));
				setMapWidth(windowSize.width - 100);
			}
		}
		updateMapSize();
	}, [windowSize.width]);

	return (
		<div className="App">
			<h1>Coffee Roaster Map</h1>

			<div style={{ textAlign: "center" }}>
				<p>
					My mission is to order great coffee online from every state (and DC).{" "}
					<span role="img" aria-label="smile">
						😎
					</span>
				</p>
				<p>
					<a href="https://docs.google.com/spreadsheets/d/1h-oqlqJ_G3UXuDSkdFHuEaCVuOXQOb68y2sduXQRTn4/edit?usp=sharing">
						Coffee Roaster Spreadsheet
					</a>
				</p>

				<Progress count={stateCount} total={51} />

				<USAMap
					style={{ textAlign: "center" }}
					width={mapWidth}
					height={mapHeight}
					customize={stateData}
					// onClick={mapHandler}
				/>
				<p>
					<span role="img" aria-label="coffee">
						☕
					</span>{" "}
					<em>
						Created by <a href="https://michaelallensmith.com">Michael Allen Smith</a>. (
						<a href="https://github.com/digitalcolony/coffee-roaster">GitHub</a>)
					</em>
				</p>
			</div>
		</div>
	);
};

export default App;
