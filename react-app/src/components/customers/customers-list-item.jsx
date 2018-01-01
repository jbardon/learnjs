import React from 'react';
import { Link } from 'react-router-dom';

export const CustomersListItem = props => (
  <tr>
    <th scope="row">{props.customer.id}</th>
    <td>{props.customer.firstname}</td>
    <td>{props.customer.lastname}</td>
    <td align="center">
      <Link to={`/customers/${props.customer.id}`} className="btn btn-default">
        <i className="fa fa-eye" />
      </Link>
      <Link
        to={`/customers/${props.customer.id}/edit`}
        className="btn btn-default">
        <i className="fa fa-pencil" />
      </Link>

      {/* Array function obligatoire pour passer un paramètre autre que l'événement */}
      <a
        className="btn btn-default"
        onClick={() => props.deleteCustomer(props.customer.id)}>
        <i className="fa fa-trash" />
      </a>
    </td>
  </tr>
);
