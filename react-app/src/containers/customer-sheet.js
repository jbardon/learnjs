import React from 'react';

import {connect} from 'react-redux';
import {loadCustomer} from '../actions/customer-sheet';

import {CustomerSheet} from '../components/customers/customer-sheet.jsx';

const mapStateToProps = state => {
    return {
        customer: state.customer // Link to reducer partial state
    };
};
const mapDispatchToProps = dispatch => {
    return {
        loadCustomer : (customerId) => dispatch(loadCustomer(customerId))
    };
};

export const CustomerSheetContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerSheet);
