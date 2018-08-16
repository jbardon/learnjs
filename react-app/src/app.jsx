import React from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';

import CustomersListContainer from './containers/customers-list.jsx';
import CustomerSheetContainer from './containers/customer-sheet.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';

const App = props => (
  <div>
    <nav className="navbar navbar-inverse navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            React-App
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className={(props.location.pathname === '/' && 'active') || ''}>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li
              className={
                (props.location.pathname === '/customers' && 'active') || ''
              }>
              <NavLink to="/customers" activeClassName="active">
                Customers
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/customers" component={CustomersListContainer} />

      {/* Also matches /customers/:id/edit because not exact */}
      <Route path="/customers/:id" component={CustomerSheetContainer} />
    </Switch>
    {/*
    customers && (
      <Route path='/customers/:id' render={({match}) => (
        <CustomerSheet customer={this.stats.customers[0]}/>
      )}/>)
  */}
  </div>
);

export default withRouter(App); // Because css want active class on <li> and not <a>
