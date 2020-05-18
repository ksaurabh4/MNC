import * as TYPES from './types';
import api from '../apis/api';
export const signIn = () => async (dispatch, getState) => {
  const values = getState().form.values;
  console.log(values);
  //api.get('/users');
  dispatch({ type: TYPES.SIGN_IN });
};

export const signOut = () => {
  return { type: TYPES.SIGN_OUT };
};
