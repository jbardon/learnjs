import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loadCustomer } from '../actions/customer-sheet';

import { CustomerSheet } from '../components/customers/customer-sheet.jsx';

class CustomerSheetController extends Component {
  componentDidMount() {
    this.props.loadCustomer(this.props.match.params.id);
  }

  render() {
    return <CustomerSheet {...this.props} />;
  }
}

const mapStateToProps = state => ({
  customer: state.customer, // Link to reducer partial state
});

const mapDispatchToProps = dispatch => ({
  loadCustomer: customerId => dispatch(loadCustomer(customerId)),
});

export const CustomerSheetContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerSheetController);
