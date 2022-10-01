import React, { Component } from "react";

class Forms extends Component {
	state = {
		name: "",
		email: "",
		fieldError: {},
	};

	// Function that validates input field
	validateForm = (input) => {
		const errors = {};
		if (!input.name) errors.name = "Name is required";
		if (input.name.length < 6) errors.name = "Chracter cannot be less than 7";
		if (!input.email) errors.email = "Email is required";

		return errors;
	};

	// Function that submits data to server
	handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, fieldError } = this.state;
        console.log(fieldError, 'error')
		const data = {
			name,
			email,
		};
		const fieldErrors = this.validateForm(data);
        let newErrorObject = Object.assign({}, fieldErrors)
        this.setState((prev) => ({
            fieldError: [...prev.fieldError.concat(newErrorObject)]
        }))
	};
	// Function that handles change
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		const { name, email, fieldError } = this.state;
		return (
			<div>
				<h1>Form</h1>
				<div>
					<form onSubmit={this.handleSubmit}>
						<div>
							<input
								type="text"
								name="name"
								value={this.state.name}
								onChange={this.handleChange}
								// style={{
								// 	border:
								// 		this.state.emailError.length > 0
								// 			? "1px solid red"
								// 			: "1px solid blue",
								// }}
							/>
						</div>
						{/* <p style={{fontSize:10, color:'tomato'}}>{name.length  ? '' : nameError}</p> */}
						<div>
							<input
								type="text"
								name="email"
								value={this.state.email}
								onChange={this.handleChange}
								// style={{
								// 	border:
								// 		this.state.emailError.length > 0
								// 			? "1px solid red"
								// 			: "1px solid blue",
								// }}
							/>
						</div>
						{/* <p style={{fontSize:10, color:'tomato'}}>{email.length ? '' : emailError}</p> */}
						<div>
							<button>Submit</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Forms;
