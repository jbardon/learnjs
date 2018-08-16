import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadCustomer, saveCustomer } from '../actions/customer-sheet';

import CustomerSheetEdit from '../components/customers/customer-sheet-edit.jsx';
import CustomerSheet from '../components/customers/customer-sheet.jsx';

class CustomerSheetEditController extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.formUpdateCustomer = this.formUpdateCustomer.bind(this);
    this.formUpdateCustomerAddress = this.formUpdateCustomerAddress.bind(this);
    this.formUpdateCustomerContact = this.formUpdateCustomerContact.bind(this);

    this.saveCustomerForm = this.saveCustomerForm.bind(this);
  }

  componentDidMount() {
    this.props
      .loadCustomer(this.props.match.params.id)
      .then(data => this.setState(data.customer));
  }

  formUpdateCustomer(event) {
    const { name, value } = event.target;

    // Utiliser this.state ou this.props est une bad practice
    // React peut faire des batches de modifs
    // const state = Object.assign({}, this.state);
    // Les () permettent d'éviter d'écrire: prevState => { return {..} };
    this.setState(prevState => ({ ...prevState, [name]: value }));
  }

  formUpdateCustomerAddress(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
  }

  formUpdateCustomerContact(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      contact: {
        ...prevState.contact,
        [name]: value,
      },
    }));
  }

  saveCustomerForm() {
    this.props.saveCustomer(this.state);
    // this.props.history.push('/customers'); Go to page with router
  }

  render() {
    const props = {
      ...this.props,
      customer: { ...this.state },
      formUpdateCustomer: this.formUpdateCustomer,
      formUpdateCustomerAddress: this.formUpdateCustomerAddress,
      formUpdateCustomerContact: this.formUpdateCustomerContact,
      saveCustomerForm: this.saveCustomerForm,
    };

    return this.props.location.pathname.endsWith('/edit') ? (
      <CustomerSheetEdit {...props} />
    ) : (
      <CustomerSheet {...props} />
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customer, // Link to reducer partial state
});

const mapDispatchToProps = dispatch => ({
  loadCustomer: customerId => dispatch(loadCustomer(customerId)),
  saveCustomer: customer => dispatch(saveCustomer(customer)),
});

const CustomerSheetEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withRouter(CustomerSheetEditController), // To access router in component
);

export default CustomerSheetEditContainer;
