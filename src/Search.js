import React, { Component } from "react";

let arr = ["kingsley", "Mary", "Onyebuchi", "Blessing", "Yan"];
export default class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			user: "",
		};

		this.input = React.createRef();
	}

	handleChange = (e) => {
		this.setState({ name: e.target.value });
	};
	handleSearch = (e) => {
		e.preventDefault();
		let user = this.input.current.value;
		let search = arr.map((result) => arr[result] === user);
		console.log(search);
		// if (e.code === "Enter") {
		// 	alert(search);
		// 	return;
		// } else {
		// 	alert("Not found");
		// 	return;
		// }
	};
	render() {
		return (
			<div className="App-header">
				<h1>Search</h1>
				<form onSubmit={this.handleSearch}>
					<input
						type="text"
						placeholder="Search for name"
						ref={this.input}
						value={this.state.name}
						onChange={this.handleChange}
						//onKeyUp={this.handleSearch}
					/>
				</form>
				<span style={{ color: "red" }}>{this.state.user}</span>
			</div>
		);
	}
}
