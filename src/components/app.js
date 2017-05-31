import React, { Component } from 'react';

import InvoiceDetail from './invoice/InvoiceDetail';

export default class App extends Component {
  render() {
    return (
      <div className="container">
				<InvoiceDetail className="invoice"/>
			</div>
    );
  }
}
