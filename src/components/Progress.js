import React from "react";
import "./Progress.css";

export default function Progress({ count, total }) {
	const percent = Math.round((count / total) * 100);

	return (
		<>
			<div className="progress">
				<div className={`c100 p${percent} orange`}>
					<span>
						{percent}%
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
