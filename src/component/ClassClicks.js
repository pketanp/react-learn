import React, { Component } from "react";

class ClassClicks extends Component {
	ClickHandler() {
		console.log("Clicked Me");
	}
	render() {
		return (
			<div>
				<button onClick={this.ClickHandler}>click me</button>
			</div>
		);
	}
}

export default ClassClicks;
