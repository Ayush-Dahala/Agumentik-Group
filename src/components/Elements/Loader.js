import React from "react";

const Loader = () => {
	return (
		<div className="loading-area">
		<div className="loading-box" />
		<div className="loading-pic">
			<div className="cssload-loader" style={{color:'red'}}>Loading</div>
		</div>
		</div>

	);
};

export default Loader;
