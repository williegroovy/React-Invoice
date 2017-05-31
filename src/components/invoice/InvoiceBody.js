import React, { Component } from 'react';

import InvoiceOrigin from './InvoiceOrigin';
import InvoiceSummary from './InvoiceSummary';
import InvoiceBillTo from "./InvoiceBillTo";
import InvoiceNotes from './InvoiceNotes';
import InvoiceItemization from "./InvoiceItemization";

export default class InvoiceBody extends Component {

	render() {
		return(
			<div className="invoice-body">
				<div className=" d-flex flex-sm-row flex-column justify-content-end">
					<InvoiceOrigin/>
					<InvoiceSummary/>
				</div>
				<hr/>
				<InvoiceBillTo/>
				<InvoiceItemization/>
				<hr/>
				<InvoiceNotes/>
			</div>
		);
	}
}