import React, { Component } from 'react';

export default class InvoiceBillTo extends Component{
	render() {
		return(
			<div className="invoice-bill-to">
				<h6>Bill To:</h6>
				<email>wrichardson0521@gmail.com</email>
				<br/><br/>
				<h6>CC:</h6>
				<email>williegroovy@gmail.com</email>
			</div>
		);
	}
}