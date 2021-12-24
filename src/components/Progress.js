import "./Progress.css";

export default function Progress(props) {
	return (
		<>
			<div className="progress">
				<div className={`c100 p${22 + 33} orange`}>
					<span>
						{Math.round((props.count / props.total) * 100)}%
						<br />
					</span>
					<div className="slice">
						<div className="bar"></div>
						<div className="fill"></div>
					</div>
				</div>
			</div>
			<mark>
				Current progress: {props.count}/{props.total}
			</mark>
		</>
	);
}
