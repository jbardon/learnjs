import React, {Component} from 'react';

export class CustomerSheetEdit extends Component {

	constructor (props) {
		super(props)
		this.formUpdateCustomer = this.formUpdateCustomer.bind(this);
		this.saveCustomerForm = this.saveCustomerForm.bind(this);
	}

  componentDidMount () {
    this.props.loadCustomer(this.props.match.params.id)
	.then(data => this.setState(data.customer));
  }

  formUpdateCustomer({target: {name, value}}) {
	const nState = Object.assign({}, this.state);
	nState[name] = value;
	this.setState(nState);
  }

  saveCustomerForm() {
	this.props.saveCustomer(this.state);
  }

  render () {
    if(this.state === null || Object.keys(this.state).length === 0)
    {
      return <div>Chargement en cours</div>;
    }
    return (
      <div className="panel panel-info">
		<div className="panel-heading">
			<div className="row">
				<div className="col col-xs-6">
					<h3 className="panel-title">{`${this.state.firstname} ${this.state.lastname}`}</h3>
				</div>
				<div className="col col-xs-6 text-right">
					<button onClick={this.saveCustomerForm} type="button" className="btn btn-sm btn-success">Save</button>
				</div>
			</div>
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
					<td>
						<input type="radio" name="gender" value="Male" onChange={this.formUpdateCustomer} checked={this.state.gender === 'Male'}/>Male
						<input type="radio" name="gender" value="Female" onChange={this.formUpdateCustomer} checked={this.state.gender === 'Female'}/>Female
					</td>
                  </tr>
                  <tr>
                    <td>Home Address</td>
					<td>
						<p><input type="text" name="address.street" onChange={this.formUpdateCustomer} value={this.state.address.street}/></p>
						<p>
							<input type="text" name="address.zipcode" onChange={this.formUpdateCustomer} value={this.state.address.zipcode}/>
							<input type="text" name="address.city" onChange={() => this.formUpdateCustomer} value={this.state.address.city}/>
						</p>
					</td>
                  </tr>
                  <tr>
                    <td>Email</td>
					<td><input type="text" name="contact.email" onChange={() => this.formUpdateCustomer} value={this.state.contact.email}/></td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td><input type="text" name="contact.phone" onChange={() => this.formUpdateCustomer} value={this.state.contact.phone}/></td>
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
