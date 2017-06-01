import React, { Component } from 'react';

export default class InvoiceItemization extends Component {

	update(event) {
		console.log(event);
		console.log('Change: ', event.target.value);
	}

	render() {
		return(
			<div className="invoice-itemization">
				<table className="table table-bordered">
					<thead className="thead-default">
					<tr>
						<th>Description</th>
						<th>Hours</th>
						<th>Rate</th>
						<th>Amount</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td contentEditable={true} onBlur={this.update.bind(this)}>Created a web app for Mr. Locomotive.</td>
						<td>15</td>
						<td>$90.00</td>
						<td>$1350.00</td>
					</tr>
					</tbody>
					<tfoot>
					<tr>
						<td/>
						<td colSpan="2">Subtotoal:</td>
						<td>$1600.00</td>
					</tr>
					<tr>
						<td/>
						<td colSpan="2">Total:</td>
						<td>$1600.00</td>
					</tr>
					<tr>
						<td/>
						<td colSpan="2">Amount paid:</td>
						<td>$0.00</td>
					</tr>
					<tr>
						<td/>
						<td colSpan="2">Amount due:</td>
						<td>$1600.00</td>
					</tr>
					</tfoot>
				</table>
			</div>
		)
	}
}
