import React from 'react';

function ComponentWithRef() {
  const ref = React.useRef(null);
  const subRef = React.useRef(null);

  // Different from componentDidMount, more a componentDidUpdate
  // Don't forget to correctly set state & props deps even if executed one time
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
// For some reason providing forwardRef ref parameters is enough, no need to get top element ref
const SubComponentWithRef = React.forwardRef((props, ref) => {
  const [id, setId] = React.useState(1);

  // Equivalent of @ViewChild but not recommanded
  // Prefer other patterns using props, render props, composition
  // Implementation with classes: https://stackoverflow.com/a/37950970
  React.useImperativeHandle(ref, () => ({
    increment: () => {
      setId(id + 1);
    }
  }));

  return <div className="SubComponentWithRef">{ id }</div>;
});

export default ComponentWithRef;
  