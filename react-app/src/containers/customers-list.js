import React from 'react';

import {connect} from 'react-redux';
import {addCustomer, clearCustomers, loadCustomers} from '../actions/customers-list';

import {CustomersList} from '../components/customers/customers-list.jsx';

const mapStateToProps = state => {
    return {
        customers: state.customers // Link to reducer partial state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCustomer : (customer) => dispatch(addCustomer(customer)),
        clearCustomers : () => dispatch(clearCustomers()),
        loadCustomers : (customers) => dispatch(loadCustomers(customers))
    };
};

export const CustomersListContainer = connect(mapStateToProps, mapDispatchToProps)(CustomersList);
