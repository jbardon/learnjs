import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

/**
 * Portal are suposed to be used to render outside
 * of React components structure
 * 
 * The target ref for the portal is often a div,
 * created in the `<body>` with `document.createElement`
 */
function ComponentWithPortal() {
  const ref = useRef(null);
  const [refState, setRefState] = useState(null)

  // useState to force reload
  useEffect(() => setRefState(ref.current), []);

  return (
    <div className="ComponentWithPortal">
      <span>ComponentWithPortal</span>
      <div className="portalTarget" ref={ ref }></div>

      <SubComponentWithPortal portalRef={ refState }>
        <div>Inside the portal</div>
      </SubComponentWithPortal>
    </div>
  );
}

const SubComponentWithPortal = ({ children, portalRef }) => 
  <div className="SubComponentWithPortal">
    <span>SubComponentWithPortal</span>
    { 
      portalRef ?  ReactDOM.createPortal(children, portalRef) : 'No portal'
    }
  </div>;

export default ComponentWithPortal;
  