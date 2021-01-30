import React from 'react';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';

// Requires module to have default export, named exports not supported
// React.lazy adds integration with Suspense tag
const SubComponentHome = React.lazy(() => import('./SubComponentHome'));
const SubComponentCustomers = React.lazy(() =>
  // Hack to see suspense loading
  new Promise(resolve =>
    setTimeout(() => resolve(import('./SubComponentCustomers')), 1500)
  )
);

function ComponentWithRouting() {
  return (
    <div className="ComponentWithRouting">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/customers">Customers</Link>

        {/* Usable with code spliting only, experimental for HTTP requests */}
        <React.Suspense fallback={ <SubComponentLoading></SubComponentLoading> }>
          <Switch>
            <Route exact path="/" component={SubComponentHome} />
            <Route exact path="/customers" component={SubComponentCustomers} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

const SubComponentLoading = () => <div>Loading...</div>;

export default ComponentWithRouting;
  