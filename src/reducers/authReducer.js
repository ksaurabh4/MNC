import * as TYPES from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TYPES.SIGN_IN:
      return {
        ...state,
        id: action.payload.user.id,
        token: action.payload.token,
        name: action.payload.user.name,
      };
    case TYPES.FETCH_USER:
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        name: action.payload.name,
      };
    case TYPES.SIGN_OUT:
      return { ...state, id: '', token: '', name: '' };
    default:
      return state;
  }
};
