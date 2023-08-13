const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});

const intialState = {
  count: 0,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
