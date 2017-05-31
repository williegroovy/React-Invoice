import React from 'react';

export default class InvoiceOrigin extends React.Component {

	render() {
		return(
			<div className="invoice-origin mr-auto p-2">
				<address>
					William Richardson<br/>
					123 San Marcos Blvd<br/>
					San Marcos, CA 92078<br/>
					<br/>
					Phone: 205-223-7110<br/>
					wrichardson0521@gmail.com
				</address>
			</div>
		);
	}
}