function SubComponentHome() {
  function fail() {
    throw Error('Not Error boundary so the whole app unmount');
  }
  return <div className="SubComponentHome" onClick={fail}>SubComponentHome</div>;
}

export default SubComponentHome;