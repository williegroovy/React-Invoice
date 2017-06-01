import React from 'react';

export default class Cell extends React.Component {

	constructor(props) {
		super(props);
		this.state = { editing: false };
	}

	render() {

		const { value, onChange } = this.props;

		return this.state.editing ?
			<input ref='input' value={value} onChange={e => onChange(e.target.value)} onBlur={ e => this.onBlur()} /> :
			<div onClick={() => this.onFocus()}>{value}</div>
	}

	onFocus() {
		this.setState({ editing: true }, () => this.refs.input.focus());
	}

	onBlur() {
		this.setState({ editing: false });
	}
}