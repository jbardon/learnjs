import React, {Component} from 'react';

export class CustomerSheet extends Component {
  componentDidMount () {
    this.props.loadCustomer(this.props.match.params.id);
  }

  render () {
    if(Object.keys(this.props.customer).length === 0)
    {
      return <div>Chargement en cours</div>;
    }

    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">{`${this.props.customer.firstname} ${this.props.customer.lastname}`}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-3 col-lg-3" align="center">
              <img alt="User Pic" className="img-circle img-responsive"/>
            </div>
            <div className="col-md-9 col-lg-9">
              <table className="table table-user-information">
              <tbody>
                  <tr>
                    <td>Gender</td>
                    <td>{this.props.customer.gender}</td>
                  </tr>
                  <tr>
                    <td>Home Address</td>
                    <td>
                      <p>{this.props.customer.address.street}</p>
                      <p>{`${this.props.customer.address.zipcode} ${this.props.customer.address.city}`}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{this.props.customer.contact.email}</td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>{this.props.customer.contact.phone}(Landline)</td>
                  </tr>
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
