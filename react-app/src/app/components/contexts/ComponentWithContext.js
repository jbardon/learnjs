import React from 'react';

function ComponentWithContext() {
  return (
    <div className="ComponentWithContext">
      <HouseStoreProvider>
        <SubComponentConsumeOld></SubComponentConsumeOld>
        <SubComponentConsumeHook></SubComponentConsumeHook>
      </HouseStoreProvider>
    </div>
  )
}

function SubComponentConsumeHook() {
  const { state, dispatch } = useHouseStore();

  const toggle = () => {
    const action = state.light ? houseStore.actions.OFF : houseStore.actions.ON;
    dispatch({ type: action });
  }

  return (
    <div className="SubComponentConsumeHook" onClick={ toggle }>Light 2 : { state.light ? 'ON' : 'OFF' }</div>
  )
}

function SubComponentConsumeOld() {
  const toggle = (state, dispatch) => {
    const action = state.light ? houseStore.actions.OFF : houseStore.actions.ON;
    dispatch({ type: action });
  }

  return (
    <div className="SubComponentConsumeOld">
      <HouseStoreContext.Consumer>{ ({ state, dispatch}) =>
        <div onClick={() => toggle(state, dispatch) }>Light: { state.light ? 'ON' : 'OFF' } </div>
      }</HouseStoreContext.Consumer>
    </div>
  )
}

const houseStore = {
  initialState: { 
    light: false
  },
  actions: {
    ON: "on",
    OFF: "off",
  },
  reducer: function (state, action)  {
    switch (action.type) {
      case this.actions.ON: {
        return {
          ...state,
          light: true
        };
      }
      case this.actions.OFF: {
        return {
          ...state,
          light: false
        };
      }
      default:
        return state;
    }
  }
}

const HouseStoreContext = React.createContext();

// Provider pattern
const HouseStoreProvider = ({ children }) => {
  // Bind mandatory because used bad workaround (this.actions in houseStore)
  const [state, dispatch] = React.useReducer(houseStore.reducer.bind(houseStore), houseStore.initialState);

  return (
    <HouseStoreContext.Provider value={{ state, dispatch }}>
      { children }
    </HouseStoreContext.Provider>
  );
};

const useHouseStore = () => {
  const context = React.useContext(HouseStoreContext);
  if (context === undefined) {
    throw new Error('useHouseStore must be used within a HouseStoreProvider')
  }
  return context;
};

// Prefer to have one useReducer rather than multiple useState
// Especially when sync is needed with useEffect (bad)
export default ComponentWithContext;
  