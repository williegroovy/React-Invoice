import React, { Component } from 'react';

import InvoiceHeader from './InvoiceHeader';
import InvoiceBody from './InvoiceBody';

export default class InvoiceDetail extends Component {
	render() {
		return(
			<div>
				<InvoiceHeader/>
				<hr/>
				<InvoiceBody/>
			</div>
		)
	}
}