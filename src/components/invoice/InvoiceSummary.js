import React, { Component } from 'react';

export default class InvoiceSummary extends Component {
	render() {
		return(
			<div className="invoice-summary p-2">
				<table>
					<thead>
						<tr>
							<td><h3>Invoice</h3></td>
						</tr>
					</thead>
					<tbody>
					<tr>
						<td>Invoice #:</td>
						<td>101123</td>
					</tr>
					<tr>
						<td>Invoice Date:</td>
						<td>10/31/2017</td>
					</tr>
					<tr>
						<td>Terms:</td>
						<td>Due on receipt</td>
					</tr>
					</tbody>
				</table>
				<div className="amount-due">
					<div>
						<h5>Amount Due</h5>
						<p>$1350.00</p>
					</div>
				</div>
			</div>
		);
	}
}