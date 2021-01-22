import React from 'react';

function ComponentWithRef() {
  const ref = React.useRef(null);
  const subRef = React.useRef(null);

  React.useEffect(() => {
    console.log('[ComponentWithRef]', ref.current)
  }, [])

  const increment = () => {
    subRef.current.increment();
  };

  return (
    <div className="ComponentWithRef" ref={ ref }>
      <span onClick={ increment }>ComponentWithRef</span>
      <SubComponentWithRef ref={ subRef }></SubComponentWithRef>
    </div>
  );
}

// forwardRef necessary to have useImperativeHandle
const SubComponentWithRef = React.forwardRef((props, ref) => {
  const instanceRef = React.useRef(null);
  const [id, setId] = React.useState(1);

  // Equivalent of @ViewChild but not recommanded
  // Prefer other patterns using props, render props, composition
  React.useImperativeHandle(ref, () => ({
    increment: () => {
      setId(id + 1);
    }
  }));

  return <div ref={ instanceRef } className="SubComponentWithRef">{ id }</div>;
});

export default ComponentWithRef;
  