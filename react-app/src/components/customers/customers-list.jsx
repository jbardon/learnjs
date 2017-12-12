import React, {Component} from 'react';

import {CustomersListItem} from './customers-list-item.jsx';

export class CustomersList extends Component {
  componentDidMount () {
    this.props.loadCustomers();
  }

  addItem () {
    this.props.addCustomer(CustomersAPI.one(99));
  }

  render() {
    let hasCustomers = this.props.customers.length >= 1;
    let customersTable = <div>Pas de clients</div>;

    if (hasCustomers) {
      customersTable = (
        <table className="table table-hover table-condensed">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.customers
              .map(customer => <CustomersListItem key={customer.id} customer={customer}/>)
          }
          </tbody>
        </table>
      );
    }

    return (
      <div className="panel panel-default panel-table">
        <div className="panel-heading">
          <div className="row">
            <div className="col col-xs-6">
              <h3 className="panel-title">Customers list</h3>
            </div>
            <div className="col col-xs-6 text-right">
              { !hasCustomers ? null :
                  <button onClick={() => this.props.clearCustomers()} type="button" className="btn btn-sm btn-danger">Clear</button>
              }
              <button onClick={() => this.addItem()} type="button" className="btn btn-sm btn-success">Create</button>
            </div>
          </div>
        </div>
        <div className="panel-body">
          {customersTable}
        </div>
      </div>
    );
  }
}
