import React from 'react';

const CustomerSheet = props => {
  if (Object.keys(props.customer).length === 0) {
    return <div>Chargement en cours</div>;
  }

  return (
    <div className="panel panel-info">
      <div className="panel-heading">
        <h3 className="panel-title">{`${props.customer.firstname} ${
          props.customer.lastname
        }`}</h3>
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-3 col-lg-3" align="center">
            <img alt="User Pic" className="img-circle img-responsive" />
          </div>
          <div className="col-md-9 col-lg-9">
            <table className="table table-user-information">
              <tbody>
                <tr>
                  <td>Gender</td>
                  <td>{props.customer.gender}</td>
                </tr>
                <tr>
                  <td>Home Address</td>
                  <td>
                    <p>{props.customer.address.street}</p>
                    <p>{`${props.customer.address.zipcode} ${
                      props.customer.address.city
                    }`}</p>
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{props.customer.contact.email}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>
                    {props.customer.contact.phone}
                    (Landline)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSheet;
