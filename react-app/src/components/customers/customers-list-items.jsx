import React from 'react';

import {CustomersListItem} from './customers-list-item.jsx';

export const CustomersListItems = props =>
<table className="table table-hover table-condensed">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {
    props.customers
      .map(customer => <CustomersListItem key={customer.id} customer={customer}/>)
  }
  </tbody>
</table>;

