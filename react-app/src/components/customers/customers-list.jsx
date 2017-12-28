import React, {Component} from 'react';

import {CustomersListItems} from './customers-list-items.jsx';

export class CustomersList extends Component {
  componentDidMount () {
    this.props.loadCustomers();
  }

  addItem () {
    this.props.addCustomer(CustomersAPI.one(99));
  }

  render() {
    let hasCustomers = this.props.customers.length >= 1;

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
          { !hasCustomers ?
              <div>Pas de clients</div> :
              <CustomersListItems customers={this.props.customers}></CustomersListItems>
          }
        </div>
      </div>
    );
  }
}
