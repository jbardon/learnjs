import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import {CustomersListContainer} from './containers/customers-list';
import {CustomerSheetContainer} from './containers/customer-sheet';
import {CustomerSheetEditContainer} from './containers/customer-sheet-edit';
import {Dashboard} from './components/dashboard/dashboard.jsx';

export const App = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">React-App</a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/customers'>Customers</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/customers' component={CustomersListContainer}/>
        <Route exact path='/customers/:id' component={CustomerSheetContainer}/>
        <Route path='/customers/:id/edit' component={CustomerSheetEditContainer}/>
      </Switch>
      { /*
        customers && (
          <Route path='/customers/:id' render={({match}) => (
            <CustomerSheet customer={this.stats.customers[0]}/>
          )}/>)
      */}
    </div>
  )
};
