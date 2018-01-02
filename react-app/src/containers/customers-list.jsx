import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  addCustomer,
  deleteCustomer,
  clearCustomers,
  loadCustomers,
} from '../actions/customers-list';

import CustomersList from '../components/customers/customers-list.jsx';

class CustomersListController extends Component {
  componentDidMount() {
    this.props.loadCustomers();
    this.addItem = this.addItem.bind(this);
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
    return <CustomersList {...props} />;
  }
}

const mapStateToProps = state => ({
  customers: state.customers, // Link to reducer partial state
});

const mapDispatchToProps = dispatch => ({
  addCustomer: customer => dispatch(addCustomer(customer)),
  deleteCustomer: customerId => dispatch(deleteCustomer(customerId)),
  clearCustomers: () => dispatch(clearCustomers()),
  loadCustomers: customers => dispatch(loadCustomers(customers)),
});

const CustomersListContainer = connect(mapStateToProps, mapDispatchToProps)(
  CustomersListController,
);

export default CustomersListContainer;