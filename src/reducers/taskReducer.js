import * as TYPES from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TYPES.ADD_TASK:
      return {
        ...state,
        Id: action.payload._id,
        description: action.payload.description,
        completed: action.payload.completed,
      };

    default:
      return state;
  }
};
