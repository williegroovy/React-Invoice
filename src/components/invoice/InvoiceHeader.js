import React, { Component } from 'react';

export default class InvoiceHeader extends Component {
	render() {
		return(
			<div className="invoice-header d-flex flex-sm-row flex-column justify-content-end">
				<div className="mr-auto p-2"><h3>Invoice Details</h3></div>
				<div className="invoice-btn-group p-2">
					<button type="button" className="btn btn-primary">Download</button>
					<button type="button" className="btn btn-success">Update</button>
					<button type="button" className="btn btn-danger">Remove</button>
				</div>
			</div>
		);
	}
}