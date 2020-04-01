import React, { Component } from "react";
class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello"
		};
	}

	clicHandler() {
		this.setState({
			message: "Good Bye"
		});
	}
	render() {
		return (
			<div>
				<div> {this.state.message} </div>
				{/* <button onClick={this.clicHandler.bind(this)}>
					click
				</button> */}
				{/* <button onClick={() => this.clicHandler()}>
					click
				</button> */}
				<button onClick={() => this.clicHandler()}>
					click
				</button>
			</div>
		);
	}
}

export default EventBind;
