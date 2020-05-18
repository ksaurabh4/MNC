import * as TYPES from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TYPES.SIGN_IN:
      return state;
    case TYPES.SIGN_OUT:
      return state;
    default:
      return state;
  }
};
