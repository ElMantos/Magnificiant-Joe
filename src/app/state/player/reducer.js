const defaultState = {
  position: [0, 0]
};

const playerReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
};

export default playerReducer;
