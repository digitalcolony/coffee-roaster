import "./Progress.css";

export default function Progress({ count, total }) {
	return (
		<>
			<div className="progress">
				<div className={`c100 p${22 + 33} orange`}>
					<span>
						{Math.round((count / total) * 100)}%
						<br />
					</span>
					<div className="slice">
						<div className="bar"></div>
						<div className="fill"></div>
					</div>
				</div>
			</div>
			<mark>
				Current progress: {count}/{total}
			</mark>
		</>
	);
}
