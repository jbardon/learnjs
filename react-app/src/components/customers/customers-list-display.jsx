import React from 'react';

import { CustomersListItem } from './customers-list-item.jsx';

// Equivalent de extends React.PureComponent et bind automatiquement componentShouldUpdate
export const CustomersListDisplay = props => (
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
      {props.customers.map(customer => (
        <CustomersListItem
          key={customer.id}
          customer={customer}
          deleteCustomer={props.deleteCustomer}
        />
      ))}
    </tbody>
  </table>
);
