import axios from 'axios';
import axiosWithAuth from '../utils/Utils';

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({type: LOGIN_SUCCESS, payload: res.data.payload})
        })
        .catch(err => {
        })
}

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};

export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

export const deleteFriend = (id) => dispatch => {
    dispatch({type: DELETE_FRIEND_START})
    axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: DELETE_FRIEND_FAILURE, payload: err.response})
        })
}