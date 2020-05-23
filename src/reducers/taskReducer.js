import * as TYPES from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TYPES.FETCH_TASKS:
      return {
        ...action.payload.reduce((newState, task) => {
          newState[task._id] = task;
          return newState;
        }, {}),
      };
    case TYPES.FETCH_TASK:
      return {
        ...state,
        [action.payload._id]: action.payload,
      };

    case TYPES.ADD_TASK:
      return {
        ...state,
        [action.payload._id]: action.payload,
      };
    case TYPES.EDIT_TASK:
      return {
        ...state,
        [action.payload._id]: action.payload,
      };

    case TYPES.DELETE_TASK:
      const newState = { ...state };
      delete newState[action.payload._id];
      return newState;

    default:
      return state;
  }
};
