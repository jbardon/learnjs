import React from 'react';

// Equivalent de extends React.PureComponent et bind automatiquement componentShouldUpdate
const CustomersListDisplay = props => (
  <table className="table table-hover table-condensed">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {/*
        props.customers.map(customer => (
            <CustomersListItem
                key={customer.id}
                customer={customer}
                deleteCustomer={props.deleteCustomer} // Prop drilling: not need but pass it down
            />
        ))
      */}
      {// renderListItem avoid deleteCustomer prop drilling
      props.customers.map(customer => props.renderListItem(customer))}
    </tbody>
  </table>
);

export default CustomersListDisplay;
