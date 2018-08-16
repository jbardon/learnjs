import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  addCustomer,
  deleteCustomer,
  clearCustomers,
  loadCustomers,
} from '../actions/customers-list';

import { getAllCustomers } from '../reducers/customers-list';

import CustomersList from '../components/customers/customers-list.jsx';
import CustomersListDisplay from '../components/customers/customers-list-display.jsx';
import CustomersListItem from '../components/customers/customers-list-item.jsx';

class CustomersListController extends Component {
  constructor(props) {
    super(props);

    // Methods bindings must be in constructor not in lifecycle methods
    this.addItem = this.addItem.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }
  componentDidMount() {
    this.props.loadCustomers();
  }

  // Render prop pattern : pass a function for rendering with needs this component props
  // Avoid prop drilling deleteCustomer in CustomersList
  renderListItem(customer) {
    return (
      <CustomersListItem
        key={customer.id}
        customer={customer}
        deleteCustomer={this.props.deleteCustomer}
      />
    );
  }

  addItem() {
    this.props.addCustomer({
      id: 99,
      firstname: 'John',
      lastname: 'Doe',
    });
  }

  render() {
    const props = {
      ...this.props, // Surtout pour injections de l'état redux
      customers: this.props.customers,
      addItem: this.addItem,
    };
    return (
      <CustomersList {...props}>
        <CustomersListDisplay // Use children to avoid prop drilling renderListItem
          customers={props.customers}
          renderListItem={this.renderListItem}
        />
      </CustomersList>
    );
  }
}

const mapStateToProps = state => ({
  customers: getAllCustomers(state.customers), // Link to reducer partial state
});

const mapDispatchToProps = dispatch => ({
  addCustomer: customer => dispatch(addCustomer(customer)),
  deleteCustomer: customerId => dispatch(deleteCustomer(customerId)),
  clearCustomers: () => dispatch(clearCustomers()),
  loadCustomers: customers => dispatch(loadCustomers(customers)),
});

const CustomersListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomersListController);

export default CustomersListContainer;
