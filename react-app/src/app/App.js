import React from 'react';
import './App.css';
import ComponentWithContext from './components/contexts/ComponentWithContext';
import ComponentWithPortal from './components/portals/ComponentWithPortal';

import ComponentWithRef from './components/refs/ComponentWithRef';
import ComponentWithStyle from './components/style/ComponentWithStyle';

const App = () =>
  // <></> is short form for <React.Fragment></React.Fragment>
  <>
    {/* <ComponentWithRef>Hello</ComponentWithRef>
    <ComponentWithStyle></ComponentWithStyle>
    <ComponentWithPortal></ComponentWithPortal> */}
    <ComponentWithContext></ComponentWithContext>
  </>;

export default App;
