import React, { Component } from 'react';

//import InvoiceDetail from './invoice/InvoiceDetail';
import Cell from './Cell';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'William Richardson',
			location: 'San Marcos',
			job: 'Software Dev'
		}
	}

  render() {
		return <div className='row'>{ this.renderCells() }</div>;
  }

  renderCells() {
		return ['name', 'location', 'job'].map(field => (
			<Cell key={field} value={ this.state[field] } onChange={value => this.setState({[field]: value})} />
		))
	}

	componentDidUpdate() {
		const { name, location, job } = this.state;
		console.log(`New State: ${name} is a(n) ${job} in ${location}`);
	}
}
