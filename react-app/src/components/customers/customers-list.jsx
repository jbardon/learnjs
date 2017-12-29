import React, {Component} from 'react';

import {CustomersListItems} from './customers-list-items.jsx';

export const CustomersList = props => {
	let hasCustomers = props.customers.length >= 1;

	return (
		<div className="panel panel-default panel-table">
			<div className="panel-heading">
				<div className="row">
					<div className="col col-xs-6">
						<h3 className="panel-title">Customers list</h3>
					</div>
					<div className="col col-xs-6 text-right">
						{ !hasCustomers ? null :
							<button onClick={props.clearCustomers} type="button" className="btn btn-sm btn-danger">Clear</button>
						}
						<button onClick={props.addItem} type="button" className="btn btn-sm btn-success">Create</button>
					</div>
				</div>
			</div>
			<div className="panel-body">
				{ !hasCustomers ?
					<div>Pas de clients</div> :
					<CustomersListItems customers={props.customers}></CustomersListItems>
				}
			</div>
		</div>
	);
};
