import React, {Component} from 'react';

import {connect} from 'react-redux';
import {loadCustomer, saveCustomer} from '../actions/customer-sheet';

import {CustomerSheetEdit} from '../components/customers/customer-sheet-edit.jsx';

class CustomerSheetEditController extends Component {
	constructor (props) {
		super(props);

		this.state = {};

		this.formUpdateCustomer = this.formUpdateCustomer.bind(this);
		this.saveCustomerForm = this.saveCustomerForm.bind(this);
	}

	componentDidMount () {
		this.props.loadCustomer(this.props.match.params.id)
			.then(data => this.setState(data.customer));
	}

	formUpdateCustomer(event) {
		const {name, value} = event.target;
		//const state = Object.assign({}, this.state);
		this.setState({...this.state, [name]: value});
		// subvalues ?
	}

	saveCustomerForm() {
		this.props.saveCustomer(this.state);
	}

	render () {
		const props = {
			customer: {...this.state},
			formUpdateCustomer: this.formUpdateCustomer,
			saveCustomerForm: this.saveCustomerForm
		};
		return <CustomerSheetEdit {...props} />;
	}
}

const mapStateToProps = state => {
    return {
        customer: state.customer // Link to reducer partial state
    };
};
const mapDispatchToProps = dispatch => {
    return {
        loadCustomer : (customerId) => dispatch(loadCustomer(customerId)),
        saveCustomer : (customer) => dispatch(saveCustomer(customer))
    };
};

export const CustomerSheetEditContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerSheetEditController);
