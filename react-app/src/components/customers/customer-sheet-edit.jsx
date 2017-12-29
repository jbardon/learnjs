import React, {Component} from 'react';

export const CustomerSheetEdit = props => {
	if(props.customer === null || Object.keys(props.customer).length === 0)
	{
		return <div>Chargement en cours</div>;
	}
	return (
		<div className="panel panel-info">
			<div className="panel-heading">
				<div className="row">
					<div className="col col-xs-6">
						<h3 className="panel-title">{`${props.customer.firstname} ${props.customer.lastname}`}</h3>
					</div>
					<div className="col col-xs-6 text-right">
						<button onClick={props.saveCustomerForm} type="button" className="btn btn-sm btn-success">Save</button>
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
									<input type="radio" name="gender" value="Male" onChange={props.formUpdateCustomer} checked={props.customer.gender === 'Male'}/>Male
									<input type="radio" name="gender" value="Female" onChange={props.formUpdateCustomer} checked={props.customer.gender === 'Female'}/>Female
								</td>
							</tr>
							<tr>
								<td>Home Address</td>
								<td>
									<p><input type="text" name="address.street" onChange={props.formUpdateCustomer} value={props.customer.address.street}/></p>
									<p>
										<input type="text" name="address.zipcode" onChange={props.formUpdateCustomer} value={props.customer.address.zipcode}/>
										<input type="text" name="address.city" onChange={() => props.formUpdateCustomer} value={props.customer.address.city}/>
									</p>
								</td>
							</tr>
							<tr>
								<td>Email</td>
								<td><input type="text" name="contact.email" onChange={() => props.formUpdateCustomer} value={props.customer.contact.email}/></td>
							</tr>
							<tr>
								<td>Phone Number</td>
								<td><input type="text" name="contact.phone" onChange={() => props.formUpdateCustomer} value={props.customer.contact.phone}/></td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
