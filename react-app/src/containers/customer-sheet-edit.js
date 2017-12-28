import {connect} from 'react-redux';
import {loadCustomer, saveCustomer} from '../actions/customer-sheet';

import {CustomerSheetEdit} from '../components/customers/customer-sheet-edit.jsx';

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

export const CustomerSheetEditContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerSheetEdit);
