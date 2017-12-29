import React, {Component} from 'react';

import {connect} from 'react-redux';
import {addCustomer, clearCustomers, loadCustomers} from '../actions/customers-list';

import {CustomersList} from '../components/customers/customers-list.jsx';

class CustomersListController extends Component {
	componentDidMount () {
		this.props.loadCustomers();
		this.addItem = this.addItem.bind(this);
	}

	addItem () {
		this.props.addCustomer(CustomersAPI.one(99));
	}

    render() {
		const props = {
			customers: this.props.customers,
			addItem: this.addItem
		};
        return <CustomersList {...props}/>;
    }
}

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

export const CustomersListContainer = connect(mapStateToProps, mapDispatchToProps)(CustomersListController);
