import React from 'react';

const CustomersList = props => {
  const hasCustomers = props.customers.length >= 1;

  return (
    <div className="panel panel-default panel-table">
      <div className="panel-heading">
        <div className="row">
          <div className="col col-xs-6">
            <h3 className="panel-title">Customers list</h3>
          </div>
          <div className="col col-xs-6 text-right">
            {!hasCustomers ? null : (
              <button
                onClick={props.clearCustomers}
                type="button"
                className="btn btn-sm btn-danger">
                Clear
              </button>
            )}
            <button
              onClick={props.addItem}
              type="button"
              className="btn btn-sm btn-success">
              Create
            </button>
          </div>
        </div>
      </div>
      <div className="panel-body">
        {!hasCustomers ? (
          <div>Pas de clients</div>
        ) : (
          /*
            <CustomersListDisplay
                customers={props.customers}
                deleteCustomer={props.deleteCustomer}
            />
          */
          props.children // Avoid prop drilling
        )}
      </div>
    </div>
  );
};

export default CustomersList;
