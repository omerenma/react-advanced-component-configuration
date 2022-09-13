import React, { Component } from "react";
import PropType from "prop-types";

class HeaderClass extends Component {
    static propTypes = {
        
    }
	render() {
		const { header } = this.props;
		return (
			<>
				<div>Header Class</div>
				<div>{header}</div>
			</>
		);
	}
}

export default HeaderClass;
