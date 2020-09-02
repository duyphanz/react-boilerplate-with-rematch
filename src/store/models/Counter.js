export const Counter = {
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      return state + payload;
    },
  },
  effects: dispatch => ({
    // handle state changes with impure functions.
    // use async/await for async actions
  }),
  selectors: (slice, createSelector) => ({
    selectState() {
      return slice(state => state);
    },
  }),
};
