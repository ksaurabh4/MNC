import * as TYPES from './types';
import api from '../apis/api';
import history from '../history';

//User Related Actions

export const fetchUser = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  if (!data) {
    return { type: TYPES.FETCH_USER };
  }
  return { type: TYPES.FETCH_USER, payload: data };
};

export const signIn = (formValues) => async (dispatch) => {
  const res = await api.post('/users/login', formValues);
  dispatch({ type: TYPES.SIGN_IN, payload: res.data });
  history.push('/');
  localStorage.setItem(
    'data',
    JSON.stringify({
      token: res.data.token,
      name: res.data.user.name,
      id: res.data.user._id,
    })
  );
};

export const signUp = (formValues) => async (dispatch) => {
  const res = await api.post('/users', formValues);
  dispatch({ type: TYPES.SIGN_UP, payload: res.data });
  history.push('/');
  localStorage.setItem(
    'data',
    JSON.stringify({
      token: res.data.token,
      name: res.data.user.name,
      id: res.data.user._id,
    })
  );
};

export const signOut = (token) => async (dispatch) => {
  await api({
    method: 'post',
    url: '/users/logout',
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch({ type: TYPES.SIGN_OUT });
  localStorage.removeItem('data');
  history.push('/login');
};

//TASK RELATED ACTIONS//
export const fetchTasks = (token) => async (dispatch) => {
  try {
    const res = await api({
      method: 'get',
      url: `/tasks`,
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({ type: TYPES.FETCH_TASKS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchTask = (token, id) => async (dispatch) => {
  try {
    const res = await api({
      method: 'get',
      url: `/tasks/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res.data);
    dispatch({ type: TYPES.FETCH_TASK, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addTask = (formValues, token) => async (dispatch) => {
  try {
    const res = await api({
      method: 'post',
      url: '/tasks',
      data: {
        description: formValues.description,
        completed: formValues.status,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: TYPES.ADD_TASK, payload: res.data });
    history.push('/tasks');
  } catch (error) {
    console.log(error);
  }
};
export const editTask = (formValues, token, id) => async (dispatch) => {
  try {
    const res = await api({
      method: 'patch',
      url: `/tasks/${id}`,
      data: {
        description: formValues.description,
        completed: formValues.status,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: TYPES.EDIT_TASK, payload: res.data });
    history.push('/tasks');
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (token, id) => async (dispatch) => {
  try {
    const res = await api({
      method: 'delete',
      url: `/tasks/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: TYPES.DELETE_TASK, payload: res.data });
    history.push('/tasks');
  } catch (error) {
    console.log(error);
  }
};
