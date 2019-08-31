const defaultState = {};
const reducer = (state = defaultState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return {
        ...state
      };
  }
};

export default reducer;
